const navigationBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Pinterest</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="all-boards">Boards<span class="sr-only">(current)</span>
          </a>
        </li>
        <div id="nav-create-board"></div>
      </ul>
    </div>
  </div>
</nav>`;
};

export default navigationBar;
