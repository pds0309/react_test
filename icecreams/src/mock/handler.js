import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate scoop", imagePath: "/images/chocolate.png" },
        { name: "Vanilla scoop", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
];
