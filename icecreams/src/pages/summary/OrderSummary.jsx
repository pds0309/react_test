import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderSummary = ({ setPhase }) => {
  const [orderDetails] = useOrderDetails();
  const scoopList = Array.from(orderDetails.scoops.entries()).map(
    ([key, value]) => (
      <li key={key}>
        {value}.{key}
      </li>
    )
  );
  const toppingList = Array.from(orderDetails.toppings.keys()).map((key) => (
    <li key={key}>{key}</li>
  ));
  return (
    <div>
      <h2>Order Summary</h2>
      <h2>Scoops: {orderDetails.totals.scoops}</h2>
      <ul>{scoopList}</ul>
      {orderDetails.toppings.size > 0 && (
        <>
          <h2>Toppings: {orderDetails.totals.toppings}</h2>
          <ul>{toppingList}</ul>
        </>
      )}

      <SummaryForm setPhase={setPhase} />
    </div>
  );
};

export default OrderSummary;
