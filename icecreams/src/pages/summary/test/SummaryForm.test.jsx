import { fireEvent, render, screen } from "@testing-library/react";

import SummaryForm from "../SummaryForm";

test("동의 체크 박스는 기본적으로 체크되어있지 않다.", () => {
  render(<SummaryForm />);
  const confirmCheckBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  expect(confirmCheckBox).not.toBeChecked();
});

test("동의 체크 박스가 체크된다면 주문 확인 버튼이 활성화 되며 체크 해제 시 다시 비활성화 된다.", () => {
  render(<SummaryForm />);
  const confirmCheckBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  const orderButton = screen.getByRole("button", { name: /confirm order/i });

  // 체크한다.
  fireEvent.click(confirmCheckBox);
  expect(orderButton).toBeEnabled();

  // 체크 해제한다.
  fireEvent.click(confirmCheckBox);
  expect(orderButton).toBeDisabled();
});
