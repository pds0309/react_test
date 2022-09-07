import { getByRole, getByText, render, screen } from "@testing-library/react";

import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("동의 체크 박스는 기본적으로 체크되어있지 않다.", () => {
  render(<SummaryForm />);
  const confirmCheckBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  expect(confirmCheckBox).not.toBeChecked();
});

test("동의 체크 박스가 체크된다면 주문 확인 버튼이 활성화 되며 체크 해제 시 다시 비활성화 된다.", async () => {
  render(<SummaryForm />);
  const confirmCheckBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  const orderButton = screen.getByRole("button", { name: /confirm order/i });

  // 체크한다.
  await userEvent.click(confirmCheckBox);
  expect(orderButton).toBeEnabled();

  // 체크 해제한다.
  await userEvent.click(confirmCheckBox);
  expect(orderButton).toBeDisabled();
});

test("동의 링크 텍스트 마우스오버 시 팝 오버로 부가정보가 나온다.", async () => {
  render(<SummaryForm />);
  // 렌더링 시에는 팝오버 콘텐츠를 식별할 수 없다.
  const nullPopOver = screen.queryByText("실제로는 안준다");
  // null
  expect(nullPopOver).not.toBeInTheDocument();

  // 마우스오버 시 팝오버 콘텐츠가 식별된다.
  const linkText = screen.getByText(/terms and conditions/i);
  await userEvent.hover(linkText);
  const notNullPopOver = screen.queryByText("실제로는 안준다");
  expect(notNullPopOver).toBeInTheDocument();

  // 마우스오버를 종료 시 팝오버 콘텐츠가 사라진다.
  await userEvent.unhover(linkText);
  const nullAgainPopOver = screen.queryByText("실제로는 안준다");
  expect(nullAgainPopOver).not.toBeInTheDocument();
});
