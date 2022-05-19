import { useEffect } from "react"

export default function News(props) {
  useEffect(() => {
    setTimeout(() => {
      props.history.push('/home/message')
    }, 2_000)
  })

  return (
    <>
      我是 News 内容
    </>
  )
}
