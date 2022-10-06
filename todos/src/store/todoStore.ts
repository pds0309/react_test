import { Todo } from "../Models/types";
import { atom } from "recoil";

export const todoState = atom<Todo[]>({
  key: "todos",
  default: [],
});
