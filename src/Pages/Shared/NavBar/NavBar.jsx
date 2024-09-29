import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="site-header header-fixed" data-responsive-width="991">
      <div className="header-topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7 col-7">
              <div className="preheader-left">
                <a href="mailto:info@codeboxr.com">
                  <strong>Email:</strong> alumnistudentarchive@gmail.com
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-sm-5 col-5 text-end">
              <div className="preheader-right">
                <Link
                  title="Login"
                  className="btn-auth btn-auth-rev"
                  to="/register"
                >
                  Login
                </Link>
                <Link
                  title="Register"
                  className="btn-auth btn-auth"
                  to="/register"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.header-topbar --> */}

      <div className="container">
        <div className="header-inner">
          <nav id="site-navigation" className="main-nav">
            <div className="site-logo">
              <Link to="/home" className="logo ">
                <img
                  src="assets/images/logo/logo.svg"
                  alt="site logo"
                  className="main-logo"
                  style={{ height: "120px", width: "120px" }}
                />
                <img
                  src="assets/images/logo/logo.svg"
                  alt="site logo"
                  className="logo-sticky"
                  style={{ height: "120px", width: "120px" }}
                />
              </Link>

              <div className="burger-menu">
                <span className="bar-one"></span>
                <span className="bar-two"></span>
                <span className="bar-three"></span>
              </div>
            </div>
            {/* <!-- /.site-logo --> */}

            <div
              className="menu-wrapper main-nav-container canvas-menu-wrapper"
              id="mega-menu-wrap"
            >
              <div className="canvas-header">
                <div className="mobile-offcanvas-logo">
                  <Link to="/home">
                    <img
                      src="assets/images/logo/logo.svg"
                      alt="site logo"
                      className="logo-sticky"
                    />
                  </Link>
                </div>

                <div className="close-menu" id="page-close-main-menu">
                  <i className="fas fa-times"></i>
                </div>
              </div>

              <ul className="codeboxr-main-menu">
                <li>
                  <Link to="/home">Home</Link>
                  {/* <a href="index.html">Home</a> */}
                </li>
                <li>
                  <Link to="/about">About</Link>
                  {/* <a href="about.html">About</a> */}
                </li>
                <li>
                  <Link to="/event">Event</Link>
                  {/* <a href="event.html">Event</a> */}
                </li>
                <li>
                  <Link to="/career">Recent Jobs</Link>
                  {/* <a href="event.html">Recent Jobs</a> */}
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="menu-item-depth-0">
                  <Link to="/contact">Contact</Link>
                  {/* <a href="contact.html">Contact</a> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
