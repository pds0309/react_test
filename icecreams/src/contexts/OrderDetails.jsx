import { createContext } from "react";
import { formatCurrency } from "../utils";
import { pricePerItem } from "../constants";
import { useContext } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

const OrderDetails = createContext([]);

export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetails provider"
    );
  }
  return context;
}

function calculateSubTotal(optionType, orderDetails) {
  let optionCount = 0;
  for (const count of orderDetails[optionType].values()) {
    optionCount += count;
  }
  return optionCount * pricePerItem[optionType];
}

export function OrderDetailsProvider(props) {
  const zeroCurrency = formatCurrency(0);
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopSubTotals = calculateSubTotal("scoops", optionCounts);
    const toppingSubTotals = calculateSubTotal("toppings", optionCounts);
    const grandTotal = scoopSubTotals + toppingSubTotals;
    setTotals({
      scoops: formatCurrency(scoopSubTotals),
      toppings: formatCurrency(toppingSubTotals),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));
      setOptionCounts(newOptionCounts);
    }

    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);

  return <OrderDetails.Provider value={value} {...props} />;
}
