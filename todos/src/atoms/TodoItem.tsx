import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../Models/types";
import styled from "@emotion/styled";

export interface TodoItemProps {
  todo: Todo;
  handleItemClick: (
    event: React.MouseEvent & { target: HTMLButtonElement }
  ) => void;
}

const TodoItem = ({ todo, handleItemClick }: TodoItemProps): JSX.Element => {
  return (
    <StyledListItem id={todo.id + ""} onClick={handleItemClick}>
      {todo.id + ":  " + todo.text}
    </StyledListItem>
  );
};
const StyledListItem = styled(ListGroup.Item)`
  @media (hover: hover) {
    :hover {
      background-color: lightgray;
      cursor: pointer;
    }
    margin: 0.5rem;
  }
`;

export default TodoItem;
