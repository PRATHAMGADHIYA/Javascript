const Navbar = () => {
  let isLogin = localStorage.getItem('isLogin') === 'true';
  let username = localStorage.getItem('username');

  return `
    <nav class="navbar navbar-expand-xxl">
      <div style =background-color:#02c3d0 class="container shadow-lg p-3 rounded-1">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link  text-white" href="/Project-1/index.html"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white fw-semibold fs-6" href="/Project-1/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold fs-6" href="/Project-1/pages/addProduct.html">Add Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold fs-6" href="/Project-1/pages/product.html">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold fs-6" href="/Project-1/pages/cart.html">Cart</a>
            </li>
          </ul>
          <form class="d-flex mx-auto" role="search" id="Search">
            <input
              class="me-5 rounded-4 border-0"
              type="search"
              placeholder=" Search"
              aria-label="Search"
              id="search"
            />
            <button class="form-control bg-white text-black" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav me-1 mb-2 mb-lg-0 ms-5">
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold fs-6" href="#" id="logoutButton">
                <i class="bi bi-box-arrow-right text-white fs-6 me-2"></i>
                ${isLogin ? 'Logout' : 'Login'}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold fs-6" href="/Project-1/pages/signup.html">
                ${isLogin ? username : 'Signup'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
};

export default Navbar;

document.addEventListener('DOMContentLoaded', () => {

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {


      let isLogin = localStorage.getItem('isLogin') === 'true';

      if (isLogin) {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('username');
      }
      else {
        window.location.href = '/Project-1/pages/login.html';
      }
    });
  }
});
