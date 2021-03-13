import firebase from 'firebase/app';
import 'firebase/auth';
import createBoardForm from '../components/forms/createBoardForm';
import createPinForm from '../components/forms/createPinForm';
import { showPins } from '../components/pins';
import {
  deletePin, createPin, getSinglePin, updatePin
} from '../helpers/data/pinData';
import editPinForm from '../components/forms/editPinForm';
import { showBoards } from '../components/boards';
import { createBoards, getSingleBoard, updateBoard } from '../helpers/data/boardData';
import editBoardForm from '../components/forms/editBoardForm';
import { boardPinsInfo, deleteBoardPins } from '../helpers/data/boardPinsData';
import boardInfo from '../components/boardInfo';
import formModal from '../components/forms/formModal';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // VIEW ALL BOARDS PINS
    if (e.target.id.includes('board-title')) {
      const boardId = e.target.id.split('--')[1];
      boardPinsInfo(boardId).then((boardInfoObj) => {
        showPins(boardInfoObj.pins);
        boardInfo(boardInfoObj.boardTitle);
      });
    }

    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR CREATING A PIN
    if (e.target.id.includes('add-pin-btn')) {
      createPinForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR CREATING A PIN
    if (e.target.id.includes('create-pin')) {
      e.preventDefault();
      const pinObject = {
        image: document.querySelector('#pinImage').value,
        title: document.querySelector('#pinTitle').value,
        description: document.querySelector('#pinDescription').value,
        board_id: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR EDITING A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        image: document.querySelector('#pinImage').value,
        title: document.querySelector('#pinTitle').value,
        description: document.querySelector('#pinDescription').value,
        board_id: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }

    // ADD CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoardPins(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      }
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR CREATING A BOARD
    if (e.target.id.includes('create-board-btn')) {
      createBoardForm();
    }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR CREATING A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        image: document.querySelector('#boardImage').value,
        title: document.querySelector('#boardTitle').value,
        uid: firebase.auth().currentUser.uid
      };
      createBoards(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR EDITING A BOARD
    if (e.target.id.includes('edit-board-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Board');
      getSingleBoard(firebaseKey).then((boardObject) => editBoardForm(boardObject));
    }

    // ADD CLICK EVENT FOR EDITING A BOARD
    if (e.target.id.includes('update-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const boardObject = {
        image: document.querySelector('#boardImage').value,
        title: document.querySelector('#boardTitle').value,
        uid: firebase.auth().currentUser.uid
      };

      updateBoard(firebaseKey, boardObject).then((boardsArray) => showBoards(boardsArray));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
