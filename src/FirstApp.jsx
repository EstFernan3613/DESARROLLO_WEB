import PropTypes from 'prop-types';
import { useState } from 'react';
import {useCounter} from "./Hooks/useCounter";

const FirstApp = ({ title, title2, title3, sum, value }) => {
  const { counter, increment, decrement, reset } = useCounter(value);

  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>{title2}</h2>
        <h3>{title3}</h3>
        <span>{sum}</span>
        <h1>Counter</h1>
        <span> {counter} </span>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>Resetear</button>
        <button onClick={decrement}>-1</button>
      </div>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: 'No hay titulo',
  sum: 15,
};

export default FirstApp;
