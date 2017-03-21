import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    // console.log('delete', id);
    // console.log(this.props);
    this.props.deleteReminder(id);
  }

  clearReminders() {
    this.props.clearReminders();
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="col-sm-4">
        {
          reminders.map( reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>

                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render(){
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={ event => this.setState({text: event.target.value}) }
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={ event => this.setState({dueDate: event.target.value})}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={ () => this.addReminder() }
          >Add Reminder</button>

          <button
            className="btn btn-danger"
            type="button"
            onClick={ ()=> this.clearReminders()}
          >Clear Reminders</button>

        </div>
        { this.renderReminders() }
      </div>

    )
  }
}

// function mapDispatchToProps(dispatch) {
//   console.log(dispatch);
//   return bindActionCreators({addReminder}, dispatch);
// }

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
