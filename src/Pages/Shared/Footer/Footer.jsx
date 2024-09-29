const Footer = () => {
  return (
    <>
      <footer id="footer-area">
        {/* Footer Widget Start */}
        <div className="footer-widget section-padding">
          <div className="container">
            <div className="row">
              {/* Single Widget Start */}
              <div className="col-lg-5 col-sm-6">
                <div className="single-widget-wrap">
                  <div className="widgei-body">
                    <div className="footer-about">
                      <img
                        src="assets/images/logo/footer-logo.svg"
                        alt="Logo"
                        className="img-fluid"
                        style={{ height: "120px", width: "120px" }}
                      />
                      <p>
                        We are legend Lorem ipsum dolor sitmet, nsecte ipisicing
                        eit, sed do eiusmod tempor incidunt ut et do maga aliqua
                        enim ad minim.
                      </p>
                      <a href="#">Phone: 017xxxxxxxx</a>
                      <br />
                      <a href="#">Email: alumnistudentarchive@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Widget End */}

              {/* Single Widget Start */}
              <div className="col-lg-3 col-sm-6">
                <div className="single-widget-wrap">
                  <h4 className="widget-title">Get In Touch</h4>
                  <div className="widgei-body">
                    <p>
                      We are legend Lorem ipsum dolor sitmet, nsecte ipisicing
                      eit, sed
                    </p>
                    <div className="newsletter-form">
                      <form id="cbx-subscribe-form">
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter Your Email"
                          id="subscribe"
                          required
                        />
                        <button type="submit">
                          <i className="far fa-paper-plane"></i>
                        </button>

                        <p id="cbx-subscribe-form-error"></p>
                      </form>
                    </div>
                    <div className="footer-social-icons">
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Widget End */}

              {/* Single Widget Start */}
              <div className="col-lg-2 col-sm-6">
                <div className="single-widget-wrap">
                  <h4 className="widget-title">University</h4>
                  <div className="widgei-body">
                    <ul className="footer-list clearfix">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Event</a>
                      </li>
                      <li>
                        <a href="#">Recent Jobs</a>
                      </li>
                      <li>
                        <a href="#">Galery</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Single Widget End */}
            </div>
          </div>
        </div>
        {/* Footer Widget End */}

        {/* Footer Bottom Start */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer-bottom-text">
                  <p>© 2023 Codeboxr, All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom End */}
      </footer>
    </>
  );
};

export default Footer;
