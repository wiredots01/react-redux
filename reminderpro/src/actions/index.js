import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in add reminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting reminder in actions')
  return action;
}

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS,
  }
  console.log('clearing all reminder');
  return action;
}
