import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "../atoms/TodoItem";
import { todoState } from "../store/todoStore";
import { useRecoilState } from "recoil";

const TodoListProvider = (): JSX.Element => {
  const [todos, setTodosValue] = useRecoilState(todoState);
  const handleItemClick = (
    event: React.MouseEvent & { target: HTMLButtonElement }
  ) => {
    setTodosValue(todos.filter((todo) => todo.text + "" !== event.target.id));
  };
  return (
    <ListGroup data-testid="todolist">
      {todos?.map((todo) => (
        <TodoItem onHandleItemClick={handleItemClick} todo={todo} />
      ))}
    </ListGroup>
  );
};
export default TodoListProvider;
