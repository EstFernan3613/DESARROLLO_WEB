import { useState } from 'react'

const FirstApp = ({ value = 10 }) => {

  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubtract = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubtract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
}

export default FirstApp
