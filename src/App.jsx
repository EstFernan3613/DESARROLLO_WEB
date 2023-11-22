import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counterSlice";


export const App = () => {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <>
      <h1>App Counter</h1>
      <hr />
      <span> Counter is { counter } </span>

      <button 
        className="btn btn-primary"
        onClick={ () => dispatch(increment() )}
        >  +1 </button>
      <button 
        className="btn btn-primary"
        onClick={ () => dispatch(decrement() )}
        >  -1 </button>
      <button 
        className="btn btn-primary"
        onClick={ () => dispatch(incrementByAmount(5) )}
        >  +5 </button>                
    </>
  );
}