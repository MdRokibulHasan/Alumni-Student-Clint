import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Alumni | About</title>
      </Helmet>
      <section id="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="page-title-content">
                <h1 className="h2">About Us</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
                <a
                  href="#page-content-wrap"
                  className="btn btn-brand smooth-scroll"
                >
                  Let 's See
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-area" className="section-padding">
        <div className="about-area-wrapper">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-10">
                <div className="about-content-wrap">
                  <div className="section-title text-lg-left">
                    <h2>Our Misssion</h2>
                  </div>

                  <div className="about-thumb">
                    <img
                      src="assets/images/misc/about-bg.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p>
                    There are many company Lorem ipsm dolor sitg amet, csetur
                    adipicing elit, sed do eiusmod tempor dncint ut labore et
                    dolore magna alis enim ad minim veniam, quis csetur
                    adipicing elit, sed do eiusmod tempor dncint ut labore et
                    dolore magna alis enim ad minim veniam, quis nostrud
                    exercitation ullamco.
                  </p>
                  <p>
                    There are many company Lorem ipsm dolor sitg amet, csetur
                    adipicing elit, sed do eiusmod tempor dncint ut labore et
                    dolore magna alis enim ad minim veniam, quis nostrud
                    exercitation ullamco.
                  </p>
                  <a href="about.html" className="btn btn-brand about-btn">
                    know more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
