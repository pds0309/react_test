import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";

import { LAMBDA_URL } from "../../../constants";
import OrderConfirmation from "../OrderConfirmation";
import { rest } from "msw";
import { server } from "../../../mock/server";

test("POST 요청에 대한 서버 에러 발생 시 alert 발생", async () => {
  server.resetHandlers(
    rest.post(`${LAMBDA_URL}/orders`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<OrderConfirmation setPhase={jest.fn()} />);
  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent(
    "예상치 못한 에러가 발생했어요. 다시 시도해주세요"
  );
});
