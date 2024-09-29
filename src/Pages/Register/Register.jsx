const Register = () => {
  const handleLogin = (event) => {
    event.PreventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email);
  };

  return (
    <>
      <section id="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="page-title-content">
                <h1 className="h2">Membership Form</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
                <a
                  href="#page-content-wrap"
                  className="btn btn-brand smooth-scroll"
                >
                  Let's See
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===========================*/}
      {/*=         Register        =*/}
      {/*===========================*/}
      <section id="page-content-wrap">
        <div className="register-page-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="register-page-inner">
                  <div className="col-lg-10 m-auto">
                    <div className="register-form-content">
                      <div className="row justify-content-between">
                        {/* Signin Area Content Start */}
                        <div className="col-lg-4 col-md-6 text-center">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <div className="signin-area-wrap">
                                <h4>Already a Member?</h4>
                                <div className="sign-form">
                                  <form onSubmit={handleLogin}>
                                    <input
                                      type="email"
                                      name="email"
                                      placeholder="Enter your Email"
                                    />
                                    <input
                                      type="password"
                                      name="password"
                                      placeholder="Password"
                                    />
                                    <button
                                      type="submit"
                                      className="btn btn-reg"
                                    >
                                      Login
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Signin Area Content End */}
                        {/* Regsiter Form Area Start */}
                        <div className="col-lg-7 col-md-6 ml-auto">
                          <div className="register-form-wrap">
                            <h3>registration Form</h3>
                            <div className="register-form">
                              <form>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="register_email">
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="register_email"
                                        name="register_email"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="register_password">
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="register_password"
                                        name="register_password"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="register_name">
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_name"
                                        name="register_name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="register_stuid">
                                        Student Id
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_stuid"
                                        name="register_stuid"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="register_year">
                                        Passing Year
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_year"
                                        name="register_year"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="register_deptno">
                                        Depertment No
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_deptno"
                                        name="register_deptno"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group file-input">
                                  <input
                                    type="file"
                                    name="register_file"
                                    id="customfile"
                                    className="d-none"
                                  />
                                  <label
                                    className="custom-file"
                                    htmlFor="customfile"
                                  >
                                    <i className="fa fa-upload" />
                                    Upload Your Photo
                                  </label>
                                </div>
                                <div className="gender form-group">
                                  <label className="g-name d-block">
                                    Gender
                                  </label>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      type="radio"
                                      id="register_gender_male"
                                      name="register_gender"
                                      defaultValue="mail"
                                      className="custom-control-input"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="register_gender_male"
                                    >
                                      Male
                                    </label>
                                  </div>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      type="radio"
                                      id="register_gender_female"
                                      name="register_gender"
                                      defaultValue="female"
                                      className="custom-control-input"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="register_gender_female"
                                    >
                                      Female
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="custom-control custom-checkbox float-lg-right">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customCheck1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="customCheck1"
                                    >
                                      {" "}
                                      I have read and agree to the{" "}
                                      <a href="">Alumni</a> Terms of Service
                                    </label>
                                  </div>
                                  <input
                                    type="submit"
                                    className="btn btn-reg"
                                    defaultValue="Registration"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* Regsiter Form Area End */}
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

export default Register;
