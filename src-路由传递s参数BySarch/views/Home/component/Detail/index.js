import { useEffect, useState } from "react"
import './index.css'
import qs from "query-string";

const detailMap = new Map([
  [1, { content: '我是内容1' }],
  [2, { content: '我是内容2' }],
  [3, { content: '我是内容3' }],
])

export default function Detail(props) {
  const { location: { search } } = props
  const params = qs.parse(search)
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
