import { render, screen } from "@testing-library/react";

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
