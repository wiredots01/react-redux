import React, { Component } from 'react';
import './App.css'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    const { deadline } = this.props
    this.getTimeUntil(deadline);
  }

  componentDidMount() {
    const { deadline } = this.props
    setInterval(() => this.getTimeUntil(deadline), 1000)
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    console.log('seconds', seconds);
    console.log('minutes', minutes);
    console.log('hours', hours);
    console.log('days', days);
    this.setState({days, minutes, hours, seconds})
  }

  leading0(num) {
    return (num < 10) ? '0' + num : num
  }

  render() {
    const { days, hours, minutes, seconds } = this.state
    // const { deadline } = this.props

    return (
      <div>
        <div className="Clock-days">{this.leading0(days)} days</div>
        <div className="Clock-hours">{this.leading0(hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock
