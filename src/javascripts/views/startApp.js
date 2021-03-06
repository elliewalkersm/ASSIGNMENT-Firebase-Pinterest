import { showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import getBoards from '../helpers/data/boardData';

const startApp = (user) => {
  logoutButton();
  domBuilder();
  navigationEvents(user.id);
  getBoards(user.id).then((boards) => showBoards(boards));
};

export default startApp;
