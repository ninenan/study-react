import { Component } from "react";
import './index.css'

export default class User extends Component {
  render() {
    return (
      <div className="user__container">
        <h2>
          我是 User 组件
        </h2>
        <div>
          {/* render 返回的组件 */}
          <Son render={(name) => <SonTwo name={name} />} />
        </div>
      </div>
    )
  }
}


class Son extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div className="son__container">
        <h2>
          我是 Son 组件
        </h2>
        {/* 相当于是插槽 */}
        {this.props.render('sonnnnn')}
      </div>
    )
  }
}

class SonTwo extends Component {
  render() {
    return (
      <div className="son-two__container">
        <h2>
          我是 SonTwo 组件,son 传过来的 name: {this.props.name}
        </h2>
      </div>
    )
  }
}
