import React from "react";
import './index.css';
import PubSub from "pubsub-js";

export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      gun: {
        type: 'M4-16',
        bullet: 5.56
      }
    }
  }

  componentDidMount() {
    this.token = PubSub.subscribe('changeData', (_, data) => {
      const { gun, count } = data
      this.setState({
        gun: gun,
        count
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token) //记得清除
  }

  render() {
    const { gun, count } = this.state

    return (
      <>
        <div className="test-container">
          我是 Test 组件
          <div>
            <p>这是 Home 组件传过来的数据</p>
            <span>{`传过来了${count}把玩具枪,型号是${gun.type},使用的子弹是${gun.bullet}`}</span>
          </div>
        </div>
      </>
    )
  }
}

