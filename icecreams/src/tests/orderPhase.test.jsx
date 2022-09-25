import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";

test("All Order Phase Happy Path Testing", async () => {
  // render all
  render(<App />);
  // add icecream scoops and toppings
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla scoop",
  });
  userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, "1");
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate scoop",
  });
  userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "2");
  const cherryCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries topping",
  });
  await userEvent.click(cherryCheckbox);
  const scoopHeading = screen.getByRole("heading", {
    name: "Scoops Total: $6.00",
  });
  expect(scoopHeading).toBeInTheDocument();
  const toppingHeading = screen.getByRole("heading", {
    name: "Toppings Total: $1.50",
  });
  expect(toppingHeading).toBeInTheDocument();
  // find and click order button
  const orderButton = screen.getByRole("button", {
    name: /order sundae/i,
  });
  expect(orderButton).toBeInTheDocument();
  userEvent.click(orderButton);
  // check summary information based on order
  const summaryHeading = await screen.findByRole("heading", {
    name: "Order Summary",
  });
  expect(summaryHeading).toBeInTheDocument();
  expect(screen.getByText("1.Vanilla scoop")).toBeInTheDocument();
  expect(screen.getByText("2.Chocolate scoop")).toBeInTheDocument();
  expect(screen.getByText("Cherries topping")).toBeInTheDocument();
  // accept terms and conditions and click button to confirm order
  const tcCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  await userEvent.click(tcCheckbox);
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  await userEvent.click(confirmOrderButton);
  // confirm order number on confirmation page
  const thankHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  });
  expect(thankHeader).toBeInTheDocument();
  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();
  // click "new order" button on confirmation page
  const newOrderButton = await screen.findByRole("button", {
    name: /create new order/i,
  });
  expect(newOrderButton).toBeInTheDocument();
  await userEvent.click(newOrderButton);
  //check all options have been reset
  const scoopTotal = screen.getByRole("heading", {
    name: "Scoops Total: $0.00",
  });
  expect(scoopTotal).toBeInTheDocument();
  // wait for items to appear so that testing library has no error for umount update
  await screen.findByRole("spinbutton", { name: "Vanilla scoop" });
  await screen.findByRole("checkbox", { name: "Cherries topping" });
});
