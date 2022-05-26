import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [name, setName] = useState('user')
  const [count, setCount] = useState(0)

  const changeName = () => {
    const count = name.length + 1
    console.log(count)

    // setName(name => `${name}${name.length}`)
    setName(`${name}${count}`)
  }
  // error
  const unmountComponent = () => {
    ReactDOM.unmountComponent(document.getElementById('root'))
  }

  useEffect(() => {
    setCount(count => count += 1)
    setInterval(() => {
      setCount(count => count + 1)
      console.log(22)
    }, 1_000)
  }, [])


  return (
    <>
      我是 {name} 路由内容
      <button onClick={changeName}>change Name</button>
      <p>{count}</p>
      <button onClick={unmountComponent}>卸载组件</button>
    </>
  )
}
