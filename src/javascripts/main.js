// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import navigationBar from './components/navigationBar';

const init = () => {
  // USE WITH FIREBASE AUTH
  navigationBar();
  checkLoginStatus();
};

init();
