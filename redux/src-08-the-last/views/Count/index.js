import React from "react"
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from "../../redux/count/countAction";
import './index.css'

const countUI = (props) => {
  const inputRef = React.createRef()

  const increment = () => {
    props.increment(1)
  }

  const decrement = () => {
    props.decrement(1)
  }

  const incrementIfOddNumber = () => {
    const value = +inputRef.current.value

    if (!value) return alert('请输入数字')
    if (value % 2 === 0) {
      inputRef.current.value = null
      return alert('奇数才能增加')
    }

    return increment()

  }

  const incrementAsync = async () => {
    const res = await props.incrementAsync(2, 1_000)
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
    count: state.count
  }),
  {
    increment: increment,
    decrement: decrement,
    incrementAsync: incrementAsync
  }
)(countUI)
