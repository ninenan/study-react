import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "../Detail";

export default function Message() {
  const [list] = useState([
    { id: '1', title: 'message1' },
    { id: '2', title: 'message2' },
    { id: '3', title: 'message3' },
  ])

  return (
    <>
      我是 message 的内容
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                {/* 如果这里开启了 replace 则当前的执行不会压入页面的历史记录中，点击页面的返回会直接返回 News 的页面 */}
                {/* 默认是开起 push */}
                <Link replace to={{
                  pathname: '/home/message/detail', state: {
                    id: item.id,
                    title: item.title
                  }
                }}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <Route path="/home/message/detail" component={Detail} />
    </>
  )
}
