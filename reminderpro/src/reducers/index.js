import { bake_cookie, read_cookie } from 'sfcookies';
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

const reminder = (action) => {
  const { text, dueDate } = action
  return {
    text,
    dueDate,
    id: Math.random()
  }
}

const removeByID = (state = [], id) => {
  // return state.filter(s => { if (s.id !== action.id)})
  const reminders = state.filter(reminder => reminder.id !== id)
  console.log('new reduce reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);
      bake_cookie('reminders', reminders);
      return reminders;

    case DELETE_REMINDER:
      reminders = removeByID(state, action.id);
      bake_cookie('reminders', reminders)
      return reminders;

    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;

    default:
      return state;
  }
}

export default reminders;
