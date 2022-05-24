import React from "react"
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from "../../redux/countAction";
import './index.css'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const countUI = (props) => {
  const inputRef = React.createRef()

  const increment = () => {
    props.increment(1)
  }

  const decrement = () => {
    props.decrement(1)
  }

  const incrementIfOddNumber = () => {
    if (+inputRef.current.value % 2 !== 0) {
      return increment()
    }
    inputRef.current.value = null
    alert('奇数才能增加')
  }

  const incrementAsync = async () => {
    const res = await props.incrementActionAsync(2, 1_000)
    console.log(res)
  }

  return (
    <>
      <p className="row">
        <button className="button" onClick={() => increment()}>+</button>
        <span className="value">
          {props.count}
        </span>
        <button className="button" onClick={() => decrement()}>-</button>
      </p>
      <div>
        <input className="textbox" ref={inputRef} />
        <button className="button" onClick={() => incrementIfOddNumber()}>奇数才能加</button>
        <button className="button asyncButton" onClick={() => incrementAsync()}>异步增加</button>
      </div>
    </>
  )
}

export default connect(
  state => ({
    count: state
  }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementActionAsync: createIncrementActionAsync
  }
)(countUI)