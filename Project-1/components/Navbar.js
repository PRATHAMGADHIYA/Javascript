const Navbar = () => {
let isLogin = localStorage.getItem('isLogin') || false;
let username = localStorage.getItem('username')

  return`
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="/Project-1/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Project-1/pages/addProduct.html">Add Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Project-1/pages/product.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Project-1/pages/cart.html">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Project-1/pages/login.html">${isLogin ?"Logout" :"Login"}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Project-1/pages/signup.html">${isLogin ? username :"signup"}</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  `
}
export default Navbar