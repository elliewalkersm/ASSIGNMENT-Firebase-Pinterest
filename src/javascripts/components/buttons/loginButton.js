import signIn from '../../helpers/authentication/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-dark">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
