import { useEffect, useState } from "react";

import AlertBanner from "../common/AlertBanner";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import axios from "axios";
import { formatCurrency } from "../../utils";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);
  if (error) {
    return <AlertBanner />;
  }
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const optionItems = items.map((item, index) => (
    <ItemComponent
      key={index}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) => {
        updateItemCount(itemName, newItemCount, optionType);
      }}
    />
  ));
  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <h2>
        {title} Total: {orderDetails.totals[optionType]}
      </h2>
      <Row>{optionItems}</Row>
    </>
  );
};
export default Options;
