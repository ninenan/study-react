import React, { useState } from "react"

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  const [count, setCount] = useState(0)
  const [isIncrementAsyncBtnDisabled, setIsIncrementAsyncBtnDisabled] = useState(false)
  const selectRef = React.useRef()

  const increment = () => {
    const newCount = count + +selectRef.current.value
    setCount(newCount)
  }
  const decrement = () => {
    const newCount = count - +selectRef.current.value
    setCount(newCount)

  }
  const incrementIfOddNumber = () => {
    if (count % 2 !== 0) {
      const newCount = count + +selectRef.current.value
      setCount(newCount)
      return
    }
    alert('奇数才能增加')
  }
  const incrementAsync = () => {
    setIsIncrementAsyncBtnDisabled(true)
    const timer = setTimeout(() => {
      increment()
      setIsIncrementAsyncBtnDisabled(false)
    }, 500)
    return () => clearTimeout(timer)
  }

  return (
    <>
      <p>当前的和为: {count}</p>
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => incrementIfOddNumber()}>奇数才能加</button>
      <button onClick={() => incrementAsync()} disabled={isIncrementAsyncBtnDisabled}>异步增加</button>
    </>
  )
}
