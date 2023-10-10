import React from 'react';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={handleToggle}
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    </li>
  );
};