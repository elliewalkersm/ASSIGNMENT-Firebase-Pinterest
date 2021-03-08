const createPinForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <form id="create-pin-form" class="mb-4">
  <div class="form-group">
    <label for="pinImage">Pin Image</label>
    <input type="url" class="form-control" id="pinImage" placeholder="Pin Image" required>
  </div>
  <div class="form-group">
    <label for="pinTitle">Pin Title</label>
    <input type="text" class="form-control" id="pinTitle" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
  </div>
  <div class="form-group">
  <label for="pinDescription">Pin Description</label>
  <input type="text" class="form-control" id="pinDescription" aria-describedby="pinDescription" placeholder="Enter Pin Descriptiom" required>
</div>
  <div class="form-group" id="select-board">
  </div>
  <button type="submit" id="create-pin" class="btn btn-primary">Create Pin</button>
</form>`;
};

export default createPinForm;
