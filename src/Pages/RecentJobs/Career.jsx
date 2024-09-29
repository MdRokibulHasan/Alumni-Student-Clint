import { Helmet } from "react-helmet-async";
import useJob from "../../Hooks/useJob";
import CareerItem from "./CareerItem";

const Career = () => {
  const [job] = useJob([]);
  return (
    <>
      <Helmet>
        <title>Alumni | Jobs</title>
      </Helmet>
      <section id="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="page-title-content">
                <h1 className="h2">Career</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
                <a
                  href="#page-content-wrap"
                  className="btn btn-brand smooth-scroll"
                >
                  Lets See
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========================*/}
      {/*=         Career        =*/}
      {/*=========================*/}
      <section id="page-content-wrap">
        <div className="career-page-wrapper">
          <div className="career-page-topbg">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <img
                    src="assets/images/careerbg.png"
                    className="img-fluid"
                    alt="career"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="career-page-content-wrap section-padding">
            <div className="container">
              <div className="job-opportunity-wrapper">
                <div className="row">
                  {/*== Single Job opportunity Start ==*/}

                  {job.map((item) => (
                    <CareerItem key={item.id} item={item}></CareerItem>
                  ))}
                </div>
                {/* Pagination Start */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pagination-wrap text-center">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <i className="fa fa-angle-left" />
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              50
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <i className="fa fa-angle-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Pagination End */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
