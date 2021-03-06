// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../authentication/apiKeys';

// API CALL
const dbUrl = firebaseConfig.databaseURL;
// GET BOARDS
const getBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE BOARD
// CREATE BOARD
// UPDATE BOARD

export default getBoards;
