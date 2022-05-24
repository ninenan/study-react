import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from "../../redux/countAction";
import './index.css'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  const selectRef = React.useRef()
  const dispatch = useDispatch()
  const count = useSelector(state => state)

  const increment = () => {
    dispatch(createIncrementAction(+selectRef.current.value))
  }

  const decrement = () => {
    dispatch(createDecrementAction(+selectRef.current.value))
  }

  const incrementIfOddNumber = () => {
    if (count % 2 !== 0) {
      return increment()
    }
    alert('奇数才能增加')
  }

  const incrementAsync = async () => {

    const res = await dispatch(createIncrementActionAsync(+selectRef.current.value, 1_000))
    console.log(res)
  }

  return (
    <>
      <p className="row">
        <button className="button" onClick={() => increment()}>+</button>
        <span className="value">
          {count}
        </span>
        <button className="button" onClick={() => decrement()}>-</button>
      </p>
      <select className="row" ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <button className="button asyncButton" onClick={() => incrementIfOddNumber()}>奇数才能加</button>
        <button className="button asyncButton" onClick={() => incrementAsync()}>异步增加</button>
      </div>
    </>
  )
}
