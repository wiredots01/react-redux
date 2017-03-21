import React, { Component} from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions'

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completedGoals = [];
      snap.forEach(goal => {
        const serverKey = goal.key;
        const { email, title } = goal.val();
        completedGoals.push({serverKey, email, title });

      })
      console.log('completed goals', completedGoals);
      this.props.setCompletedGoals(completedGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    console.log('awa ang props sa completed', this.props)
    const { completedGoals } = this.props;
    return (
      <div>
        {
          completedGoals.map(goal => {
            return(
              <div key={goal.serverKey}>
                <strong>{goal.title}</strong>
                <span style={{marginLeft: '5px'}}>completed by: <em>{goal.email}</em></span>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >Clear</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completedGoals } = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalList);
