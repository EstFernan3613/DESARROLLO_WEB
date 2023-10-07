import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { TodoList } from "./Components/TodoList";
import { TodoAdd } from "./Components/TodoAdd";
import { todoReducer } from "./todoReducer";
import * as types from './Components/types';

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispacth] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispacth(action) 
    }


    return (
        <>
            <h1> TodoApp: 10, <small> pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>  
        </>
    )
}