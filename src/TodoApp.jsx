import React, { useReducer } from "react";
import { TodoAdd } from "./Components/TodoAdd";
import { TodoList } from "./Components/TodoList";
import { todoReducer } from "./Components/todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los Challenges ",
        done: false
    }
]

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] ADD TODO',
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