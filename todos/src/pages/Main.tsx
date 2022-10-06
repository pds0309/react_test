import TodoEditor from "../templates/TodoEditor";
import TodoList from "../templates/TodoList";

const Main = () => {
  return (
    <div>
      <TodoEditor />
      <br />
      <hr />
      <br />
      <TodoList />
    </div>
  );
};

export default Main;
