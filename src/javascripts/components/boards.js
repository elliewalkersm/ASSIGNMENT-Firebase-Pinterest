const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  array.forEach((item) => {
    const firebaseKey = item.target.id.split('--')[1];
    document.querySelector('#view').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <button type="button" class="btn btn-primary" id="view-pins-btn">View</button>
      <button type="button" class="btn btn-danger" id="delete-board--${firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#view').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
