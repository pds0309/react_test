import { Container, Form } from "react-bootstrap";
import React, { useState } from "react";

import Buton from "../atoms/Buton";
import Inputbox from "../atoms/Inputbox";
import Label from "../atoms/Label";
import { Todo } from "../Models/types";
import { todoState } from "../store/todoStore";
import { useRecoilState } from "recoil";

const TodoEditor = (): JSX.Element => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useRecoilState<Todo[]>(todoState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: Todo = { id: new Date(), text: todo };
    setTodos(todos.concat(result));
    setTodo("");
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="todo">
          <Label color={"blue"}>add todos</Label>
          <Inputbox value={todo} onChange={handleChange} />
          <br />
          <Buton type="submit">추가하기</Buton>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TodoEditor;
