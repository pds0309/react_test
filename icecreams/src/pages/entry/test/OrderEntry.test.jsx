import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";

import { LAMBDA_URL } from "../../../constants";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mock/server";
import userEvent from "@testing-library/user-event";

test("Scoop 및 Topping 라우트의 api 호출 장애를 핸들링한다.", async () => {
  //에러 상황을 위해 핸들러를 리셋한다.
  server.resetHandlers(
    rest.get(`${LAMBDA_URL}/scoops`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get(`${LAMBDA_URL}/toppings`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<OrderEntry setPhase={jest.fn()} />);
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});

test("Scoop 선택이 없으면 주문 버튼은 비활성화 상태이며 선택이 하나라도 있으면 활성화 된다", async () => {
  render(<OrderEntry setPhase={jest.fn()} />);
  const orderButton = screen.getByRole("button", { name: "Order Sundae" });
  expect(orderButton).toBeInTheDocument();
  expect(orderButton).toBeDisabled();

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate scoop",
  });
  userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "1");

  expect(orderButton).toBeEnabled();
});
