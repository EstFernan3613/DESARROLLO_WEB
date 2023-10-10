import React, { createContext, useContext, useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const deleteTodo = (todoId) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: todoId,
    };
    dispatch(action);
  };

  const toggleTodo = (todoId) => {
    const action = {
      type: "[TODO] TOGGLE TODO",
      payload: todoId,
    };
    dispatch(action);
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter((todo) => !todo.done).length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleNewTodo,
        deleteTodo,
        toggleTodo,
        countTodos,
        countPendingTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
