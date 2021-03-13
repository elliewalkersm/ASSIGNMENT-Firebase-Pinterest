const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML += `<h1 class="text-white">${boardObj.title}</h1>`;
};

export default boardInfo;
