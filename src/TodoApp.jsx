import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./Components/TodoAdd";
import { TodoList } from "./Components/TodoList";
import { todoReducer } from "./Components/todoReducer";
import * as types from "./Components/types";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: types.DELETE_TODO,
            payload: id
        };
        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: types.TOGGLE_TODO,
            payload: id
        };
        dispatch(action);
    };

    const countTodos = () => {
        return todos.length;
    };

    const countPendingTodos = () => {
        return todos.filter(todo => !todo.done).length;
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    };
};

export const TodoApp = () => {
    const {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    } = useTodos();

    return (
        <div>
            <h1>Todo App</h1>
            <h2>Tareas Pendientes: {countTodos()}</h2>
            <h3> Es necesario recargar la pagina, hace uso del Local Storage </h3>
            <p> </p>
            <TodoAdd handleNewTodo={handleNewTodo} />
            <TodoList
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleTodo={handleToggleTodo}
            />
        </div>
    );
};