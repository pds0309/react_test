import { Button } from "react-bootstrap";
import { LAMBDA_URL } from "../../constants";
import axios from "axios";
import { useEffect } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { useState } from "react";

const OrderConfirmation = ({ setPhase }) => {
  const [, , reset] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post(`${LAMBDA_URL}/order`)
      .then((response) => setOrderNumber(response.data.orderNumber))
      .catch();
  }, []);
  const handleClick = () => {
    reset();
    setPhase("inProgress");
  };

  return orderNumber ? (
    <div style={{ textAlign: "center" }}>
      <h1>Thank you</h1>
      <p>Your Order number is {orderNumber}</p>
      <Button onClick={handleClick}>Create new order</Button>
    </div>
  ) : (
    <div>loading</div>
  );
};
export default OrderConfirmation;
