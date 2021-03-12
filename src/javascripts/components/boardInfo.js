const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML += `<h1>${boardObj.title}</h1>`;
};

export default boardInfo;
