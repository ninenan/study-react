import React, { useRef, Fragment } from "react"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const inputRef = useRef(null)

  const showVal = () => {
    console.log(inputRef.current.value)
  }


  return (
    // 也可以直接使用 <></>
    // Fragment 可以设置 key 当当前的组件会被遍历的时候，需要唯一 key 可以使用 Fragment
    <Fragment key={1}>
      <input ref={inputRef} />
      <button onClick={showVal}>show input val</button>
    </Fragment>
  )
}
