import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";

import { LAMBDA_URL } from "../../../constants";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mock/server";

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
