import { useEffect, useState } from "react"
import './index.css'

const detailMap = new Map([
  [1, { content: '我是内容1' }],
  [2, { content: '我是内容2' }],
  [3, { content: '我是内容3' }],
  [4, { content: '编程式导航内容 push 方法 4' }],
  [5, { content: '编程式导航内容 replace 方法 5' }],
])

export default function Detail(props) {
  const { location: { state } } = props
  const params = state || {}
  const [currentDetail, setCurrentDetail] = useState(() => detailMap.get(+params.id))

  useEffect(() => {
    setCurrentDetail(detailMap.get(+params.id))
  }, [params.id])

  return (
    <div className="detail-container">
      <p>id: {params.id}</p>
      <p>title: {params.title}</p>
      {currentDetail && <p>content: {currentDetail.content}</p>}
    </div>
  )
}
