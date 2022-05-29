import { Component, PureComponent } from "react";
import './index.css'

export default class User extends Component {

  state = {
    val: 1,
    fruit: ['apple', 'banana']
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps) // 将要变化的目标 props
    // console.log(nextState) // 将要变化的目标 state
    // console.log(this.props) // 目前的 props
    // console.log(this.state) // 目前的 state

    return true
  }

  add = () => {
    this.setState(preState => {
      return {
        val: preState.val += 1
      }
    })

    // 下面的写法引用地址还是一样的
    const obj = this.state
    obj.val = obj.val += 1
    this.setState(obj)
  }

  addFruit = () => {
    this.setState(preState => {
      return { fruit: ['origin', ...preState.fruit] }
    })
  }

  render() {
    const { val, fruit } = this.state
    return (
      <div className="user__container">
        <h2>
          我是 User 组件
        </h2>
        <div>
          <p>当前的 val：{val}</p>
          <button onClick={() => this.add()}>val++</button>
          <ul>
            {fruit.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
          <button onClick={() => this.addFruit()}>furit++</button>
        </div>
        {/* <Son val={val} /> */}
        <SonPure val="3" />
      </div>
    )
  }
}

// 效率高的做法
// 只有当组件的 state/props 发生变化的时候才需要去触发 render
// Component 中的 shouldComponentUpdate 总是返回 true

class Son extends Component {
  shouldComponentUpdate(nextProps) {
    console.log('this.props: ', this.props) // 目前的 props
    console.log('nextProps: ', nextProps) // 将要变化的目标 props
    if (nextProps.val === this.props.val || nextProps.val > 3) {
      return false
    }

    return true
  }

  render() {
    console.log(222)
    const { val } = this.props
    return (
      <div className="son__container">
        <h2>
          我是 Son 组件
          <p>传过来的 val 是 {val}</p>
        </h2>
      </div>
    )
  }
}

class SonPure extends PureComponent {
  render() {
    console.log(333)
    const { val } = this.props
    return (
      <div className="son__container">
        <h2>
          我是 Son 组件
          <p>传过来写死的 val 是 {val}</p>
        </h2>
      </div>
    )
  }
}
