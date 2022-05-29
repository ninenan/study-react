import { Component, useState } from "react";
import './index.css'

export default class User extends Component {
  state = {
    hasError: ''
  }
  // 当子组件出现报错信息的时候，会触发 getDerivedStateFromError 钩子函数，并返回 error 信息
  static getDerivedStateFromError(error) {
    return {
      hasError: error
    }
  }

  // 子组件出现错误，可以获取到报错信息
  // 一般用于统计错误次数，发送给后台，错误监控
  componentDidCatch(error) {
    console.log('组件出现错误', error)
  }

  render() {
    return (
      <div className="user__container">
        <h2>
          我是 User 组件
        </h2>
        <div>
          {this.state.hasError ? '当前网络不稳定' : <Son />}
        </div>
      </div>
    )
  }
}

class Son extends Component {
  state = {
    users: [
      { id: 1, name: 'xxx1', age: 18 },
      { id: 2, name: 'xxx2', age: 19 },
      { id: 3, name: 'xxx3', age: 20 },
      { id: 4, name: 'xxx4', age: 21 },
    ]
  }

  render() {
    return (
      <div className="son__container">
        <h2>
          我是 Son 组件
        </h2>
        <ul>
          {
            this.state.users.map(user => {
              return <li key={user.id}>{user.name}---{user.age}</li>
            })
          }
        </ul>
        {/* <SonTwo /> */}
      </div>
    )
  }
}

function SonTwo() {
  const [users] = useState([
    { id: 1, name: 'xxx1', age: 18 },
    { id: 2, name: 'xxx2', age: 19 },
    { id: 3, name: 'xxx3', age: 20 },
    { id: 4, name: 'xxx4', age: 21 },
  ])

  return (
    <div className="son-two__container">
      <h2>
        我是 SonTwo 组件
      </h2>
      <ul>
        {
          users.map(user => {
            return <li key={user.id}>{user.name}---{user.age}</li>
          })
        }
      </ul>
    </div>
  )
}
