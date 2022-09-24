import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("서버로부터 scoop 옵션의 이미지를 가져온다", async () => {
  render(<Options optionType="scoops" />);
  // 이미지를 찾는다.
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // 이미지 alt 텍스트 확인
  const altText = scoopImages.map((value) => value.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("서버로부터 topping 옵션의 이미지를 가져온다", async () => {
  render(<Options optionType="toppings" />);
  // 이미지를 찾는다.
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // 이미지 alt 텍스트 확인
  const altText = toppingImages.map((value) => value.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
