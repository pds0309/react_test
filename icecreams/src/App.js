import "./App.css";

import { Container } from "react-bootstrap";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";
import { useState } from "react";
import { LAMBDA_URL } from "./constants";

function App() {
  // orderPhase: inProgress, review, completed;
  const [phase, setPhase] = useState("inProgress");
  console.log(LAMBDA_URL);
  return (
    <Container>
      {phase}
      <OrderDetailsProvider>
        {/* summary page and entry page need provider */}
        {phase === "inProgress" ? (
          <OrderEntry setPhase={setPhase} />
        ) : phase === "review" ? (
          <OrderSummary setPhase={setPhase} />
        ) : (
          <OrderConfirmation setPhase={setPhase} />
        )}
      </OrderDetailsProvider>
      {/* confirmination page does not need provider */}
    </Container>
  );
}

export default App;
