import { render, screen } from "@testing-library/react";

import ScoopOption from "../ScoopOption";
import userEvent from "@testing-library/user-event";

test("마이너스 또는 부적절한 scoop 개수 입력에 대한 검증", async () => {
  render(<ScoopOption name="" imagePath="" updateItemCount={jest.fn()} />);

  const input = screen.getByRole("spinbutton");
  userEvent.clear(input);
  await userEvent.type(input, "-1");
  expect(input).toHaveClass("is-invalid");

  userEvent.clear(input);
  await userEvent.type(input, "2.5");
  expect(input).toHaveClass("is-invalid");

  userEvent.clear(input);
  await userEvent.type(input, "11");
  expect(input).toHaveClass("is-invalid");

  //정상적인 입력
  userEvent.clear(input);
  await userEvent.type(input, "3");
  expect(input).not.toHaveClass("is-invalid");
});
