import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Alumni | Contact</title>
      </Helmet>
      <section id="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="page-title-content">
                <h1 className="h2">Contact Us</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
                <a
                  href="#page-content-wrap"
                  className="btn btn-brand smooth-scroll"
                >
                  Let s See
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="page-content-wrap">
        <div className="contact-page-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-content-inner">
                  <div className="row">
                    <div className="col-lg-5">
                      {/* Map Area Start */}
                      <div className="map-area-wrap">
                        <iframe src="https://snazzymaps.com/embed/75079" />
                      </div>
                      {/* Map Area End */}
                    </div>
                    <div className="col-lg-6 m-auto">
                      <div className="contact-form-wrap">
                        <h3>Send Message</h3>
                        <form action="#" id="cbx-contact-form">
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="cbxname">Name</label>
                                <input
                                  type="text"
                                  name="cbxname"
                                  required=""
                                  id="cbxname"
                                  placeholder="Your Full Name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="cbxemail">Email</label>
                                <input
                                  type="email"
                                  name="cbxemail"
                                  required=""
                                  id="cbxemail"
                                  placeholder="Your Email"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="cbxsubject">Subject</label>
                            <input
                              type="text"
                              name="cbxsubject"
                              id="cbxsubject"
                              placeholder="Subject"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="cbxmessage">Message</label>
                            <textarea
                              name="cbxmessage"
                              id="cbxmessage"
                              rows={10}
                              cols={80}
                              placeholder="Your Message"
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cbxsendme"
                              name="cbxsendme"
                              defaultValue="on"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cbxsendme"
                            >
                              Send Me CC
                            </label>
                          </div>
                          <button className="btn btn-reg">Send</button>
                          <div id="cbx-formalert" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
