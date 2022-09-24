import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";
import userEvent from "@testing-library/user-event";

test("scoops 옵션 변경으로 scoop 파트 총계가 변경된다", async () => {
  render(<Options optionType="scoops" />);

  // 시작은 $0.00 이다.
  const scoopSubTotals = await screen.findByText("Scoops Total: $", {
    exact: false,
  });
  expect(scoopSubTotals).toHaveTextContent("0.00");
  // 바닐라 scoop 선택 상태가 스핀버튼 이벤트로 1이 되는 상황에서 업데이트를 테스트한다.
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla scoop",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubTotals).toHaveTextContent("2.00");

  // 초콜렛 scoop 상태가 2인 상황에서 업데이트를 테스트한다.
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate scoop",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopSubTotals).toHaveTextContent("4.00");
});
