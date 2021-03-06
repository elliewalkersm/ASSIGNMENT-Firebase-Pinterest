const createBoardForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <form id="create-board-form" class="mb-4">
  <div class="form-group">
    <label for="boardImage">Board Image</label>
    <input type="url" class="form-control" id="boardImage" placeholder="Image URL" required>
  </div>
  <div class="form-group">
  <label for="boardTitle">Board Title</label>
  <input type="text" class="form-control" id="pinTitle" aria-describedby="boardTitle" placeholder="Enter Board Title" required>
</div>
  <button type="submit" id="create-board-btn" class="btn btn-primary">Create Board</button>
</form>`;
};

export default createBoardForm;
