import { getSingleBoard, deleteBoard } from './boardData';
import { getBoardPins, deletePin } from './pinData';

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { boardTitle: boardResponse, pins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});

const deleteBoardPins = (boardId, userId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));

    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, userId)));
  }).catch((error) => reject(error));
});

export { boardPinsInfo, deleteBoardPins };
