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
// DELETE PIN
// CREATE PIN
// UPDATE PIN

export default getPins;
