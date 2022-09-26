import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";
import userEvent from "@testing-library/user-event";

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

test("유효한 Scoop Option 입력 값에 대해서만 소계를 적용한다.", async () => {
  render(<Options optionType="scoops" />);
  const inputValue = await screen.findByRole("spinbutton", {
    name: "Vanilla scoop",
  });

  userEvent.clear(inputValue);
  await userEvent.type(inputValue, "2.5");
  const scoopsTotal = await screen.findByText("Scoops Total: $0.00");
  expect(scoopsTotal).toBeInTheDocument();
});
