const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button type="button" class="btn btn-danger" id="add-pin-btn">Add Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <button type="button" class="btn btn-primary" id="view-pins-btn">Edit</button>
      <button type="button" class="btn btn-danger" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#view').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
