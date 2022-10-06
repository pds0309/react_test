import { Todo } from "../Models/types";
import TodoListProvider from "../organisms/TodoListProvider";
import { todoState } from "../store/todoStore";
import { useRecoilValue } from "recoil";

const TodoList = (): JSX.Element => {
  const todosValue = useRecoilValue<Todo[]>(todoState);
  return (
    <div>
      <span>
        number of Todos:
        {todosValue.length}
      </span>
      <TodoListProvider />
    </div>
  );
};

export default TodoList;
