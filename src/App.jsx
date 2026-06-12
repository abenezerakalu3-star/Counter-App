import { useState } from "react"

const App = () => {
  const [count,setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev +1)
  }
   const decrement = () => {
    setCount((prev) => prev - 1)
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="btn-group">
        <button className="btn" onClick={increment}>+</button>
        <button className="btn" onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default App