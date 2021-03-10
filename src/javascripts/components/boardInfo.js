const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML += `<h1>${boardObj.title}'s Pins</h1>`;
};

export default boardInfo;
