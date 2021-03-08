import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../components/buttons/loginButton';
import startApp from '../../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // document.querySelector('#nav-create-board').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
      // document.querySelector('#nav-create-board').innerHTML = '';
    }
  });
};

export default checkLoginStatus;
