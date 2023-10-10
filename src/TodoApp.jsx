import React from "react";
import { TodoList } from "./Components/TodoList";
import { TodoAdd } from "./Components/TodoAdd";
import { useTodo } from "./Hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  } = useTodo();

  return (
    <>
      <h1>
        {" "}
        TodoApp: {countTodos()}, <small> pendientes: {countPendingTodos()}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
