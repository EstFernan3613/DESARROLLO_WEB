import PropTypes from 'prop-types';
import { useState } from "react";

const FirstApp = ( {title, title2, title3, sum, value} ) => {

  const [counter, setCounter] = useState( value )

  const handleAdd = () => {
    setCounter(counter + 1 )
    console.log(counter);
  }

  const handleSubstract = () => {
    setCounter(counter - 1)
    console.log(counter)
  }

  const handleReset = () => {
    setCounter(value)
    console.log(counter)
  }

    return (
      <>
      <div> 
        <h1>{ title }</h1>
        <h2>{ title2 }</h2>
        <h3>{ title3 }</h3>
        <span>{ sum }</span>
        <h1> Counter </h1>
        <span> { counter } </span>
        <button onClick={() => handleAdd()}> +1 </button>
        <button onClick={() => handleReset()}> Reset </button>
        <button onClick={() => handleSubstract()}> -1 </button>
      </div>
      </>
      )
  } 


  FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    title3: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
  }

  FirstApp.defaultProps = {
    title: 'No hay titulo',
    sum: 15
  }
  
  export default FirstApp;