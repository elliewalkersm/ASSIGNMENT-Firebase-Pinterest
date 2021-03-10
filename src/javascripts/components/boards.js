const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-danger btn-lg mb-4" id="add-author-btn">Create A Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <a href="#"><h5 id="board-title--${item.firebaseKey}"
      h5 class="card-title">${item.title}</h5></a>
      <button type="button" class="btn btn-primary" id="view-pins-btn">Edit</button>
      <button type="button" class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#view').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
