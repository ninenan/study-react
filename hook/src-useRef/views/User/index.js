import React, { useRef } from "react"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const inputRef = useRef(null)

  const showVal = () => {
    console.log(inputRef.current.value)
  }


  return (
    <>
      <input ref={inputRef} />
      <button  onClick={showVal}>show input val</button>
    </>
  )
}
