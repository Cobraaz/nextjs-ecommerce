import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return "active";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Cobraaz</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/cart">
                <a
                  className={`nav-link ${isActive("/cart")}`}
                  aria-current="page"
                >
                  <i aria-hidden className="fas fa-shopping-cart"></i>Cart
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signin">
                <a
                  className={`nav-link ${isActive("/signin")}`}
                  aria-current="page"
                >
                  <i aria-hidden className="fas fa-user"></i>Sign In
                </a>
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                User Name
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
