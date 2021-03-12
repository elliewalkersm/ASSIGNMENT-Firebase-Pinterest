const editBoardForm = (boardObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-board-form" class="mb-4">
      <div class="form-group">
        <label for="boardImage">Board Image</label>
        <input type="text" class="form-control" id="boardImage" aria-describedby="boardImage" placeholder="Update Board Image" value="${boardObject.image}" required>
      </div>
      <div class="form-group">
        <label for="boardTitle">Board Title</label>
        <input type="text" class="form-control" id="boardTitle" placeholder="Update Board Title" value="${boardObject.title}" required>
      </div>
      <button type="submit" id="update-board--${boardObject.firebaseKey}" class="btn btn-dark">Update Board</button>
    </form>`;
};

export default editBoardForm;
