import React, { Component } from 'react';
import './App.css'
import Clock from './Clock'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Dec 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    const { deadline } = this.state
    return (
      <div className="App">
        <div className="App-title">Countdown to {deadline}</div>
        <Clock deadline={deadline} />
        <Form inline>
          <FormControl placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
          <Button onClick={() => this.changeDeadline()} >Submit</Button>
        </Form>

      </div>
    )
  }
}

export default App
