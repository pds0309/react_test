import { render, screen, waitFor } from "@testing-library/react";

import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mock/server";

test("Scoop 및 Topping 라우트의 api 호출 장애를 핸들링한다.", async () => {
  //에러 상황을 위해 핸들러를 리셋한다.
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<OrderEntry />);
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});
