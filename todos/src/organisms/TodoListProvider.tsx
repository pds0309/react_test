import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../Models/types";
import TodoItem from "../atoms/TodoItem";
import { todoState } from "../store/todoStore";
import { useSetRecoilState } from "recoil";

export interface TodoListProps {
  todosValue: Todo[];
}

const TodoListProvider = ({ todosValue }: TodoListProps): JSX.Element => {
  const setTodosValue = useSetRecoilState(todoState);
  const handleItemClick = (
    event: React.MouseEvent & { target: HTMLButtonElement }
  ) => {
    setTodosValue(
      todosValue.filter((todo) => todo.id + "" !== event.target.id)
    );
  };
  return (
    <ListGroup data-testid="todolist">
      {todosValue?.map((todo) => (
        <TodoItem handleItemClick={handleItemClick} todo={todo} />
      ))}
    </ListGroup>
  );
};
export default TodoListProvider;
