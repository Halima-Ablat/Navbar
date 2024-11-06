function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <a className="navbar-brand ms-5" href="#">
              React Jobs
            </a>

            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-5">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item me-5">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
