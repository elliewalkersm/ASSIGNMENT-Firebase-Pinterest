import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">      
    <div class="form-group">
        <label for="pinImage">Update Pin Image</label>
        <input type="url" class="form-control" id="pinImage" placeholder="Update Pin Image" required value="${pinObject.image}">
      </div>
      <div class="form-group">
        <label for="pinTitle">Pin Title</label>
        <input type="text" class="form-control" id="pinTitle" aria-describedby="pinTitle" placeholder="Update Pin Title" value="${pinObject.title}" required>
      </div>
      <div class="form-group">
        <label for="pinDescription">Pin Description</label>
        <input type="text" class="form-control" id="pinDescription" aria-describedby="pinDescription" placeholder="Enter Pin Description" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-dark">Update Pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
