import { useEffect, useState } from "react";

import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import axios from "axios";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const optionItems = items.map((item, index) => (
    <ItemComponent key={index} name={item.name} imagePath={item.imagePath} />
  ));
  return (
    <>
      <Row>{optionItems}</Row>
    </>
  );
};
export default Options;
