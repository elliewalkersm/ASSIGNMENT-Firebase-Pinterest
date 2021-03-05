import firebase from 'firebase/app';
import 'firebase/auth';
import navigationBar from '../components/navigationBar';

const signOut = () => {
  firebase.auth().signOut();
  document.querySelector('#create-board-nav').innerHTML = ' ';
};

export default signOut;
