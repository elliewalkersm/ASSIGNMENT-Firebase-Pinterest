// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../authentication/apiKeys';

// API CALL
const dbUrl = firebaseConfig.databaseURL;
// GET BOARDS
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE BOARD
const deleteBoard = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(userId).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});
// CREATE BOARD
// UPDATE BOARD

export { getBoards, deleteBoard };
