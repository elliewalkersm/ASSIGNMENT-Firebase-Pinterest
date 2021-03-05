import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
};

export default signIn;
