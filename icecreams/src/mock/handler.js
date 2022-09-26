import { LAMBDA_URL } from "../constants";
import { rest } from "msw";

export const handlers = [
  rest.get(`${LAMBDA_URL}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate scoop", imagePath: "/images/chocolate.png" },
        { name: "Vanilla scoop", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
  rest.get(`${LAMBDA_URL}/toppings`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries topping", imagePath: "/images/cherries.png" },
        { name: "M&Ms topping", imagePath: "/images/m-and-ms.png" },
        { name: "Hot fudge topping", imagePath: "/images/hot-fudge.png" },
      ])
    );
  }),

  rest.post(`${LAMBDA_URL}/order`, (req, res, ctx) => {
    return res(ctx.json({ orderNumber: 111111111 }));
  }),
];
