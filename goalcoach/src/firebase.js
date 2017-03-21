import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDqfrLInLg8wJgjlqdS1vcJH6h_ZyUXeI",
  authDomain: "goal-coach-4d10b.firebaseapp.com",
  databaseURL: "https://goal-coach-4d10b.firebaseio.com",
  storageBucket: "goal-coach-4d10b.appspot.com",
  messagingSenderId: "260742130904"
};

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
