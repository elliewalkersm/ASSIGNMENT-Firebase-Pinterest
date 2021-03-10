// import createBoardForm from '../components/forms/createBoardForm';
// import createPinForm from '../components/forms/createPinForm';
import { showPins } from '../components/pins';
// import { deletePin, createPin, getSinglePin, updatePins } from '../helpers/data/pinData';
// import editPinForm from '../components/forms/editPinForm';
import { showBoards } from '../components/boards';
// import { deleteBoard, createBoard, getSingleBoard, updateBoards } from '../helpers/data/boardData';
// import editBoardForm from '../components/forms/editBoardForm';
import boardPinsInfo from '../helpers/data/boardPinsData';
import boardInfo from '../components/boardInfo';

import { deleteBoard } from '../helpers/data/boardData';

const domEvents = () => {
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
    //   if (e.target.id.includes('delete-pin')) {
    //   if (window.confirm('Want to delete?')) {
    //     const firebaseKey = e.target.id.split('--')[1];
    //     deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
    //   }
    // }

    // CLICK EVENT FOR SHOWING FORM FOR CREATING A PIN
    // if (e.target.id.includes('create-pin-btn')) {
    //   createPinForm();
    // }

    // CLICK EVENT FOR SUBMITTING FORM FOR CREATING A PIN
    // if (e.target.id.includes('create-pin')) {
    //   e.preventDefault();
    //   const pinObject = {
    //     image: document.querySelector('#pinImage').value,
    //     title: document.querySelector('#pinTitle').value,
    //     description: document.querySelector('#pinDescription').value,
    //     uid: userId
    //   };
    //   console.warn(pinObject);

    // createPin(pinObject, userId).then((pinsArray) => showPins(pinsArray));
    // }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR EDITING A PIN
    // if (e.target.id.includes('edit-pin-btn')) {
    //   const firebaseKey = e.target.id.split('--')[1];
    //   formModal('Edit Pin');
    //   getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    // }

    // CLICK EVENT FOR EDITING A PIN
    // if (e.target.id.includes('update-pin')) {
    //   const firebaseKey = e.target.id.split('--')[1];
    //   e.preventDefault();
    //   const pinObject = {
    //    image: document.querySelector('#pinImage').value,
    //    title: document.querySelector('#pinTitle').value,
    //    description: document.querySelector('#pinDescription').value,
    //    uid: userId
    //   };

    //   updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

    //   $('#formModal').modal('toggle');
    // }

    // ADD CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
        // deleteBoardPins(boardId, userId).then((boardsArray) => showBoards(boardssArray));
      }
    }

    // DELETING ALL BOARD'S PINS
    // if (e.target.id.includes('board-name-title')) {
    //   const boardId = e.target.id.split('--')[1];
    //   boardPinsInfo(boardId).then((boardInfoObj) => {
    //     showBoards(boardInfoObj.pins);
    //     boardInfo(boardInfoObj.boards);
    //   });
    // }

    // ADD CLICK EVENT FOR SHOWING FORM FOR CREATING A BOARD
    // if (e.target.id.includes('create-borad')) {
    //   createBoardForm();
    // }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR CREATING A BOARD
    // if (e.target.id.includes('create-board')) {
    //   e.preventDefault();
    //   const boardObject = {
    //     image: document.querySelector('#boardImage').value,
    //     title: document.querySelector('#boardTitle').value,
    //     uid: userId
    //   };
    //   console.warn(boardObject);
    // createBoards(boardObject, userId).then((boardsArray) => showBoardss(boardsArray));
    // }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR EDITING A BOARD
    // if (e.target.id.includes('edit-board-btn')) {
    //   const firebaseKey = e.target.id.split('--')[1];
    //   formModal('Edit Board');
    //   getSingleBoard(firebaseKey).then((boardObject) => editBoardForm(boardObject));
    // }

    // ADD CLICK EVENT FOR EDITING A BOARD
    // if (e.target.id.includes('update-board')) {
    //   const firebaseKey = e.target.id.split('--')[1];
    //   e.preventDefault();
    //   const boardObject = {
    //   image: document.querySelector('#boardImage').value,
    //   title: document.querySelector('#boardTitle').value,
    //   uid: userId
    //   };

    //   updateBoard(firebaseKey, boardObject).then((boardsArray) => showBoards(boardsArray));

    //   $('#formModal').modal('toggle');
    // }
  });
};

export default domEvents;
