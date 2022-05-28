import React, { useRef, Fragment, useState, createContext, useContext } from "react"
import './index.css'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ValConatext = createContext()
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const inputRef = useRef(null)
  const [val, setVal] = useState(0)

  const addVal = () => {
    const inputVal = inputRef.current.value
    setVal(preVal => preVal + +inputVal)
  }

  return (
    // 也可以直接使用 <></>
    // Fragment 可以设置 key 当当前的组件会被遍历的时候，需要唯一 key 可以使用 Fragment
    <Fragment key={1}>
      <div className="user__container">
        <input ref={inputRef} />
        <button onClick={addVal}>addVal</button>
        <div>
          <ValConatext.Provider value={{ value: val, theme: themes.dark }}>
            <Son value={val}>
              <div>
                <Grandson />
              </div>
            </Son>
          </ValConatext.Provider>
        </div>
      </div>
    </Fragment>
  )
}

function Son({ children, value }) {
  return (
    <div className="son__container">
      <h2>我是 son 组件</h2>
      <div>
        user 组件传过来的 value: {value}
      </div>
      {children}
    </div>
  )
}


function Grandson() {
  const { value, theme } = useContext(ValConatext)

  return (
    <div className="grandson__container">
      <h2>我是 grandson 组件</h2>
      <div style={theme}>
        user 组件传过来的 value: {value}
      </div>
    </div>
  )
}

