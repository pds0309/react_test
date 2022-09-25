import { Button } from "react-bootstrap";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = ({ setPhase }) => {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: ${orderDetails.totals["grandTotal"]}</h2>
      <Button onClick={() => setPhase("review")}>Order Sundae</Button>
    </div>
  );
};

export default OrderEntry;
