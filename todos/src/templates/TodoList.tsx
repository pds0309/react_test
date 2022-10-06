import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../Models/types";
import styled from "@emotion/styled";
import { todoState } from "../store/todoStore";
import { useRecoilState } from "recoil";

const TodoList = (): JSX.Element => {
  const [todosValue, setTodosValue] = useRecoilState<Todo[]>(todoState);
  const handleItemClick = (
    event: React.MouseEvent & { target: HTMLButtonElement }
  ) => {
    setTodosValue(
      todosValue.filter((todo) => todo.id + "" !== event.target.id)
    );
  };
  return (
    <div>
      <span>
        number of Todos:
        {todosValue.length}
      </span>
      <ListGroup data-testid="todolist">
        {todosValue?.map((todo) => (
          <StyledListItem id={todo.id + ""} onClick={handleItemClick}>
            {todo.id + ":  " + todo.text}
          </StyledListItem>
        ))}
      </ListGroup>
    </div>
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

export default TodoList;
