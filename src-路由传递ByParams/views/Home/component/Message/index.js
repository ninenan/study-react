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
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <Route path="/home/message/detail/:id/:title" component={Detail} />
    </>
  )
}
