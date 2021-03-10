import { showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navigationBar from '../components/navigationBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getBoards } from '../helpers/data/boardData';

const startApp = (user) => {
  domBuilder();
  domEvents(user.id);
  navigationBar();
  logoutButton();
  navigationEvents();
  getBoards(user.id).then((boards) => showBoards(boards));
};

export default startApp;
