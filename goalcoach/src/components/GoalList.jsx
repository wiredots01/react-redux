import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';

import GoalItem from './GoalItem';

class GoalList extends Component {

  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        // let goalObject = goal.val();
        const serverKey = goal.key;
        const { email, title } = goal.val();
        goals.push({email, title, serverKey });
      })
      console.log('goals', goals);
      // console.log('awa',this.props);
      this.props.setGoals(goals);
    })
  }
  render() {
    console.log('awa props', this.props);
    const { goals } = this.props;
    return(
      <div>
        {
          goals.map((goal, index) => <GoalItem key={index} goal={goal} /> )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  console.log('kani dire', goals);
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
