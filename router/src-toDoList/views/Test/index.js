import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0
    }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1_000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    const { seconds } = this.state

    return (
      <>
        Secondes：{seconds}
      </>
    )
  }
}

