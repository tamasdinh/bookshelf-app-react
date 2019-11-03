import React, { Component } from 'react'


class Clock extends Component {

  state = {
    time: new Date().toLocaleTimeString()
  }

  date = new Date().toLocaleDateString()

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.tick()
    }, 1000);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <p className='clock'>{'Today is ' + this.date + ' - ' + this.state.time}</p>
    )
  }

}

export default Clock