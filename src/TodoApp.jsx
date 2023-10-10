import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./Components/TodoAdd";
import { TodoList } from "./Components/TodoList";
import { todoReducer } from "./Components/todoReducer";
import * as types from "./Components/types";

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch( action )
    }

    return (
        <>
            <h1>Todo App / Pendientes:{ todos.length }</h1>
            <hr />
            <TodoAdd handleNewTodo={handleNewTodo} />
            <TodoList todos={todos} dispatch={dispatch} />
        </>
    )
}
