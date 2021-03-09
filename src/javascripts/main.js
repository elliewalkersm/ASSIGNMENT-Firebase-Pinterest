// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/authentication/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';

const init = () => {
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
