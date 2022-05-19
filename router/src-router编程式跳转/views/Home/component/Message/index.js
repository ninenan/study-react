import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "../Detail";
import './index.css';

export default function Message(props) {
  const [list] = useState([
    { id: '1', title: 'message1' },
    { id: '2', title: 'message2' },
    { id: '3', title: 'message3' },
  ])

  const toDetailByPush = (id, title) => {
    console.log(props)
    props.history.push({
      pathname: '/home/message/detail',
      state: {
        id,
        title
      }
    })
  }

  const toDetailByReplace = (id, title) => {
    props.history.push({
      pathname: '/home/message/detail',
      state: {
        id,
        title
      }
    })
  }

  const goBack = () => {
    props.history.goBack()
  }

  const goForward = () => {
    props.history.goForward()
  }


  return (
    <div className="message-container">
      我是 message 的内容
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                {/* 如果这里开启了 replace 则当前的执行不会压入页面的历史记录中，点击页面的返回会直接返回 News 的页面 */}
                {/* 默认是开起 push */}
                <Link to={{
                  pathname: '/home/message/detail', state: {
                    id: item.id,
                    title: item.title
                  }
                }}>{item.title}</Link>
              </li>
            )
          })
        }
        <li onClick={() => toDetailByPush('4', 'message4')}>push 跳转</li>
        <li onClick={() => toDetailByReplace('5', 'message5')}>replace 跳转</li>
        <li onClick={() => goBack()}>go 跳转</li>
        <li onClick={() => goForward()}>forward 跳转</li>
      </ul>
      <Route path="/home/message/detail" component={Detail} />
    </div>
  )
}
