// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../authentication/apiKeys';

// API CALL
const dbUrl = firebaseConfig.databaseURL;
// GET PINS
const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE PIN
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE PIN
const deletePin = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins(userId).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});
// CREATE PIN
// UPDATE PIN
// GET ALL BOARDS PINS
const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${boardId}"`)
    .then((response) => {
      const boardPinsArray = Object.values(response.data);
      resolve(boardPinsArray);
    })
    .catch((error) => reject(error));
});

export {
  getPins, getSinglePin, getBoardPins, deletePin
};
