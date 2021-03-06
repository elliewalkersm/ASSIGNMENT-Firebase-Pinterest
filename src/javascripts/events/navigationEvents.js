// import signOut from '../helpers/authentication/signOut';
import getBoards from '../helpers/data/boardData';
import { showBoards } from '../components/boards';
import createBoardForm from '../components/forms/createBoardForm';

const navigationEvents = (userId) => {
  // LOGOUT BUTTON
  // document.querySelector('#logout-button')
  //   .addEventListener('click', signOut);

  // HOME: SHOW ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards(userId).then((boardsArray) => showBoards(boardsArray));
  });

  // CREATE BOARD: SHOW FORM TO ADD BOARD
  document.querySelector('#nav-create-board')
    .addEventListener('click', createBoardForm);
};

export default navigationEvents;
