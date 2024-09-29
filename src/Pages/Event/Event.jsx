import { Helmet } from "react-helmet-async";
import useEvent from "../../Hooks/useEvent";
// import { useEffect, useState } from "react";
import EventItem from "../Shared/EventItem/EventItem";

const Event = () => {
  const [event] = useEvent([]);
  // const [event, setEvent] = useState([]);
  // useEffect(() => {
  //   fetch("event.json")
  //     .then((res) => res.json())
  //     .then((data) => setEvent(data));
  // }, []);
  return (
    <>
      <Helmet>
        <title>Alumni | Event</title>
      </Helmet>
      {/*==========================*/}
      {/*=         Banner         =*/}
      {/*==========================*/}
      <section id="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="page-title-content">
                <h1 className="h2">All Event Archive</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
                <a
                  href="#page-content-wrap"
                  className="btn btn-brand smooth-scroll"
                >
                  Let See
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=========================*/}
      {/*=          Event        =*/}
      {/*=========================*/}
      <section id="page-content-wrap">
        <div className="event-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="all-event-list">
                  {/* Single Event Start */}
                  {event.map((item) => (
                    <EventItem key={item._id} item={item}></EventItem>
                  ))}
                  {/* Single Event End */}
                </div>
              </div>
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
      </section>
    </>
  );
};

export default Event;
