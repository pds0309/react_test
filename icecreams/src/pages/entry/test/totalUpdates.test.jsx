import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";
import OrderEntry from "../OrderEntry";
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
  await userEvent.type(vanillaInput, "1");
  expect(scoopSubTotals).toHaveTextContent("2.00");

  // 초콜렛 scoop 상태가 2인 상황에서 업데이트를 테스트한다.
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate scoop",
  });
  userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, "2");
  expect(scoopSubTotals).toHaveTextContent("6.00");
});

test("toppings 옵션 체크여부로 topping 파트 총계가 변경된다.", async () => {
  render(<Options optionType="toppings" />);

  const toppingsTotal = screen.getByText("Toppings Total: $", {
    exact: false,
  });
  expect(toppingsTotal).toHaveTextContent("0.00");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries topping",
  });
  await userEvent.click(cherriesCheckbox);
  expect(toppingsTotal).toHaveTextContent("1.50");

  const hotFudgeCheckbox = await screen.findByRole("checkbox", {
    name: "Hot fudge topping",
  });
  await userEvent.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent("3.00");

  await userEvent.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent("1.50");
});

describe("grand total test", () => {
  test("grand total 은 최초에 $0.00 값을 가진다.", () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });
    expect(grandTotal).toHaveTextContent("0.00");
  });

  test("scoops option 의 변동으로 grand total 의 값이 변경된다.", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla scoop",
    });
    userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, "1");

    expect(grandTotal).toHaveTextContent("2.00");
  });

  test("toppings option 의 변동으로 grand total의 값이 변경된다.", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });

    const hotFudgeCheckbox = await screen.findByRole("checkbox", {
      name: "Hot fudge topping",
    });
    await userEvent.click(hotFudgeCheckbox);
    expect(grandTotal).toHaveTextContent("1.50");
  });

  test("toppings 및 scoops 가 순차적으로 변동될 때 grand total 의 값이 변경된다,", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByRole("heading", {
      name: /Grand total: \$/i,
    });

    const hotFudgeCheckbox = await screen.findByRole("checkbox", {
      name: "Hot fudge topping",
    });
    await userEvent.click(hotFudgeCheckbox);
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla scoop",
    });
    userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, "1");
    expect(grandTotal).toHaveTextContent("3.50");
  });
});
