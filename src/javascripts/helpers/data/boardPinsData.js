import { getSingleBoard } from './boardData';
import { getBoardPins } from './pinData';

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve(
      { boardTitle: boardResponse, pins: boardPinsResponse }
    ))
    .catch((error) => reject(error));
});

export default boardPinsInfo;
