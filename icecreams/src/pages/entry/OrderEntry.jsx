import { Button } from "react-bootstrap";
import Options from "./Options";
import { useEffect } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { useState } from "react";

const OrderEntry = ({ setPhase }) => {
  const [orderDetails] = useOrderDetails();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(
      ![...orderDetails.scoops.values()].filter((v) => v > 0).length > 0
    );
  }, [orderDetails]);
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals["grandTotal"]}</h2>
      <Button onClick={() => setPhase("review")} disabled={disabled}>
        Order Sundae
      </Button>
    </div>
  );
};

export default OrderEntry;
