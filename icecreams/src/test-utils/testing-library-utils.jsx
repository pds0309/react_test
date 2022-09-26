import { OrderDetailsProvider } from "../contexts/OrderDetails";
import { render } from "@testing-library/react";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everthing

export * from "@testing-library/react";

// override render method
// OrderDetailsProvider context 가 필요하면 여기서임포트해서쓰면됨
export { renderWithContext as render };
