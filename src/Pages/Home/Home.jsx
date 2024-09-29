import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Alumni | Home</title>
      </Helmet>
      <section id="home-v1" className="home-page-one" data-style="default">
        <a href="#" className="scroll-top">
          <i className="fa fa-angle-up"></i>
        </a>

        <div id="main_content" className="main-content">
          {/* <!--==========================-->
        <!--=         Banner         =-->
        <!--==========================--> */}
          <section id="slider-area">
            <div className="slider-active-wrap owl-carousel text-center text-md-start">
              <div className="single-slide-wrap slide-bg-1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="slider-content">
                        <h2>We Are Proud</h2>
                        <h3>
                          Students of{" "}
                          <span>
                            Jahangirnagar University School and College
                          </span>
                        </h3>
                        <p>
                          We are really lucky to study in this university, the
                          technical structure of this university helps a student
                          to achieve his goals.
                        </p>
                        <div className="slider-btn">
                          <a
                            href="#about-area"
                            className="btn btn-brand smooth-scroll"
                          >
                            our mission
                          </a>
                          <a href="about.html" className="btn btn-brand-rev">
                            our story
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-slide-wrap slide-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="slider-content">
                        <h2>We Are Not Proud</h2>
                        <h3>
                          Students of{" "}
                          <span>
                            Jahangirnagar University School and College
                          </span>
                        </h3>
                        <p>
                          Alumni Needs enables you to harness the power of your
                          alumni network. Whatever may be the need (academic,
                          relocation, career, projects, mentorship, etc. you can
                          ask the community and get responses in three.
                        </p>
                        <div className="slider-btn">
                          <a href="#" className="btn btn-brand">
                            our mission
                          </a>
                          <a href="#" className="btn btn-brand-rev">
                            our story
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-slide-wrap slide-bg-3">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="slider-content">
                        <h2>Why Proud for u</h2>
                        <h3>
                          Students of{" "}
                          <span>
                            Jahangirnagar University School and College
                          </span>
                        </h3>
                        <p>
                          Alumni Needs enables you to harness the power of your
                          alumni network. Whatever may be the need (academic,
                          relocation, career, projects, mentorship, etc. you can
                          ask the community and get responses in three.
                        </p>
                        <div className="slider-btn">
                          <a href="#" className="btn btn-brand">
                            our mission
                          </a>
                          <a href="#" className="btn btn-brand-rev">
                            our story
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!--=================================-->
        <!--=         Upcoming Event        =-->
        <!--=================================--> */}
          <section id="upcoming-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="upcoming-event-wrap">
                    <div className="up-event-titile">
                      <h3>Upcoming event</h3>
                    </div>
                    <div className="upcoming-event-content owl-carousel">
                      {/* <!-- No 1 Event --> */}
                      <div className="single-upcoming-event">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="up-event-thumb">
                              <img
                                src="assets/images/event/event-img-1.jpg"
                                className="img-fluid"
                                alt="Upcoming Event"
                              />
                              <h4 className="up-event-date">
                                It’s 27 February 2023
                              </h4>
                            </div>
                          </div>

                          <div className="col-lg-7">
                            <div className="display-table">
                              <div className="display-table-cell">
                                <div className="up-event-text">
                                  <div className="event-countdown">
                                    <div
                                      className="event-countdown-counter"
                                      data-date="2024/9/10"
                                    ></div>
                                    <p>Remaining</p>
                                  </div>
                                  <h3>
                                    <a href="single-event.html">
                                      We are going to arrange a get together!
                                    </a>
                                  </h3>
                                  <p>
                                    Hello everyone on behalf of our university
                                    we so many batch students want to organize a
                                    get together on upcoming date who are
                                    interested can contact us.
                                  </p>
                                  <a
                                    href="single-event.html"
                                    className="btn btn-brand btn-brand-dark"
                                  >
                                    join with us
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- partial --> */}

                      {/* <!-- No 2 Event --> */}
                      <div className="single-upcoming-event">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="up-event-thumb">
                              <img
                                src="assets/images/event/event-img-2.jpg"
                                className="img-fluid"
                                alt="Upcoming Event"
                              />
                              <h4 className="up-event-date">
                                It’s 27 February 2023
                              </h4>
                            </div>
                          </div>

                          <div className="col-lg-7">
                            <div className="display-table">
                              <div className="display-table-cell">
                                <div className="up-event-text">
                                  <div className="event-countdown">
                                    <div
                                      className="event-countdown-counter"
                                      data-date="2018/9/10"
                                    ></div>
                                    <p>Remaining</p>
                                  </div>
                                  <h3>
                                    <a href="single-event.html">
                                      We are going to arrange a get together!
                                    </a>
                                  </h3>
                                  <p>
                                    Hello everybody Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim and minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut
                                    aliquipv ex ea.
                                  </p>
                                  <a
                                    href="single-event.html"
                                    className="btn btn-brand btn-brand-dark"
                                  >
                                    join with us
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- partial --> */}

                      {/* <!-- No 3 Event --> */}
                      <div className="single-upcoming-event">
                        <div className="row">
                          <div className="col-lg-5">
                            <div className="up-event-thumb">
                              <img
                                src="assets/images/event/event-img-3.jpg"
                                className="img-fluid"
                                alt="Upcoming Event"
                              />
                              <h4 className="up-event-date">
                                It’s 27 February 2023
                              </h4>
                            </div>
                          </div>

                          <div className="col-lg-7">
                            <div className="display-table">
                              <div className="display-table-cell">
                                <div className="up-event-text">
                                  <div className="event-countdown">
                                    <div
                                      className="event-countdown-counter"
                                      data-date="2025/9/10"
                                    ></div>
                                    <p>Remaining</p>
                                  </div>
                                  <h3>
                                    <a href="single-event.html">
                                      We are going to arrange a get together!
                                    </a>
                                  </h3>
                                  <p>
                                    Hello everybody Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim and minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut
                                    aliquipv ex ea.
                                  </p>
                                  <a
                                    href="single-event.html"
                                    className="btn btn-brand btn-brand-dark"
                                  >
                                    join with us
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- partial --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!--=========================-->
        <!--=         About         =-->
        <!--=========================--> */}
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
                        There are many company Lorem ipsm dolor sitg amet,
                        csetur adipicing elit, sed do eiusmod tempor dncint ut
                        labore et dolore magna alis enim ad minim veniam, quis
                        csetur adipicing elit, sed do eiusmod tempor dncint ut
                        labore et dolore magna alis enim ad minim veniam, quis
                        nostrud exercitation ullamco.
                      </p>
                      <p>
                        There are many company Lorem ipsm dolor sitg amet,
                        csetur adipicing elit, sed do eiusmod tempor dncint ut
                        labore et dolore magna alis enim ad minim veniam, quis
                        nostrud exercitation ullamco.
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

          {/* <!--=================================-->
        <!--=         Responsibility        =-->
        <!--=================================--> */}
          <section id="responsibility-area" className="section-padding">
            <div className="container">
              {/* <!--== Section Title Start ==--> */}
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="section-title">
                    <h2>Our Responsibility</h2>
                  </div>
                </div>
              </div>
              {/* <!--== Section Title End ==--> */}

              {/* <!--== Responsibility Content Wrapper ==--> */}
              <div className="row text-center text-sm-left">
                {/* <!--== Single Responsibility Start ==--> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="single-responsibility">
                    <img
                      src="assets/images/responsibility/01.png"
                      alt="Responsibility"
                    />
                    <h4>Scholarship</h4>
                    <p>
                      De create building thinking about your requirment and
                      latest treand on our marketplace area
                    </p>
                  </div>
                </div>
                {/* <!--== Single Responsibility End ==-->

                    <!--== Single Responsibility Start ==--> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="single-responsibility">
                    <img
                      src="assets/images/responsibility/02.png"
                      alt="Responsibility"
                    />
                    <h4>Help Current Students</h4>
                    <p>
                      De create building thinking about your requirment and
                      latest treand on our marketplace area
                    </p>
                  </div>
                </div>
                {/* <!--== Single Responsibility End ==-->

                    <!--== Single Responsibility Start ==--> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="single-responsibility">
                    <img
                      src="assets/images/responsibility/03.png"
                      alt="Responsibility"
                    />
                    <h4>Help Our University</h4>
                    <p>
                      De create building thinking about your requirment and
                      latest treand on our marketplace area
                    </p>
                  </div>
                </div>
                {/* <!--== Single Responsibility End ==-->

                    <!--== Single Responsibility Start ==--> */}
                <div className="col-lg-3 col-sm-6">
                  <div className="single-responsibility">
                    <img
                      src="assets/images/responsibility/04.png"
                      alt="Responsibility"
                    />
                    <h4>Build Our Community</h4>
                    <p>
                      De create building thinking about your requirment and
                      latest treand on our marketplace area
                    </p>
                  </div>
                </div>
                {/* <!--== Single Responsibility End ==--> */}
              </div>
              {/* <!--== Responsibility Content Wrapper ==--> */}
            </div>
          </section>

          {/* <!--======================-->
        <!--=         Job        =-->
        <!--======================--> */}
          <section id="job-opportunity" className="section-padding">
            <div className="container">
              {/* <!--== Section Title Start ==--> */}
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="section-title">
                    <h2>Recent Jobs</h2>
                  </div>
                </div>
              </div>
              {/* <!--== Section Title End ==--> */}

              {/* <!--== Job opportunity Wrapper ==--> */}
              <div className="job-opportunity-wrapper">
                <div className="row">
                  {/* <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img
                                src="assets/images/job/compnay-logo-1.png"
                                alt="Job"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="#">
                            Urgently Need Five Data Center Specialist
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="#">[...]</a>
                        </p>
                      </div>
                      <a href="#" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==--> */}

                  {/* <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img
                                src="assets/images/job/compnay-logo-2.png"
                                alt="Job"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="#">
                            Product Owner (m/f) for our Charter Business
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="#">[...]</a>
                        </p>
                      </div>
                      <a href="#" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                        <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img
                                src="assets/images/job/compnay-logo-1.png"
                                alt="Job"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="#">
                            Backend Developer (Java) (m/f) wanted for leading
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="#">[...]</a>
                        </p>
                      </div>
                      <a href="#" className="btn btn-job btn-expired disabled">
                        Expired
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                        <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img
                                src="assets/images/job/compnay-logo-2.png"
                                alt="Job"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="#">
                            API Architect and Lead - Python, SQLAlchemy, GraphQL
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="#">[...]</a>
                        </p>
                      </div>
                      <a href="#" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                        <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img
                                src="assets/images/job/compnay-logo-3.png"
                                alt="Job"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="#">
                            Remotely - Javascript Developer Node.js
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="#">[...]</a>
                        </p>
                      </div>
                      <a href="#" className="btn btn-job btn-expired disabled">
                        Expired
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==-->

                        <!--== Single Job opportunity Start ==--> */}
                  <div className="col-lg-4 col-sm-6 text-center">
                    <div className="single-job-opportunity">
                      <div className="job-opportunity-text">
                        <div className="job-oppor-logo">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <img
                                src="assets/images/job/compnay-logo-4.png"
                                alt="Job"
                              />
                            </div>
                          </div>
                        </div>
                        <h3>
                          <a href="#">
                            Five Years Experience Data Center Specialist Needed
                          </a>
                        </h3>
                        <p>
                          Claritas est etiam procsus dymicus, qui sequitur
                          mutationem Claritas est etiam procsus est etiam
                          procsus dymicus.<a href="#">[...]</a>
                        </p>
                      </div>
                      <a href="#" className="btn btn-job">
                        Apply now
                      </a>
                    </div>
                  </div>
                  {/* <!--== Single Job opportunity End ==--> */}
                </div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <a
                      href="career.html"
                      className="btn btn-brand btn-loadmore"
                    >
                      All job list
                    </a>
                  </div>
                </div>
              </div>
              {/* <!--== Job opportunity Wrapper ==--> */}
            </div>
          </section>

          {/* <!--==========================-->
        <!--=         Gallery        =-->
        <!--==========================--> */}
          <section id="gallery-area" className="section-padding">
            <div className="container">
              {/* <!--== Section Title Start ==--> */}
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="section-title">
                    <h2>Our gallery</h2>
                  </div>
                </div>
              </div>
              {/* <!--== Section Title End ==--> */}

              {/* <!--== Gallery Container Warpper ==--> */}
              <div className="gallery-content-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <!-- Gallery Menu Start --> */}
                    <div className="gallery-menu text-center">
                      <span className="active" data-filter="*">
                        All
                      </span>
                      <span data-filter=".old">Old Memories</span>
                      <span data-filter=".event">Event</span>
                      <span data-filter=".pic">Our Picnic</span>
                      <span
                        className="d-none d-sm-inline-block"
                        data-filter=".recent"
                      >
                        Recent
                      </span>
                    </div>
                    {/* <!-- Gallery Menu End --> */}

                    {/* <!-- Gallery Item content Start --> */}
                    <div className="row gallery-gird">
                      {/* <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 recent event">
                        <div className="single-gallery-item gallery-bg-1">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>University Cumpus</h4>
                              <p className="gallery-event-date">28 Oct, 2018</p>
                            </div>
                            <a
                              href="assets/images/gallery/gellary-img-1.jpg"
                              className="btn-zoom image-popup"
                            >
                              <img src="assets/images/zoom-icon.png" alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 old event pic">
                        <div className="single-gallery-item video gallery-bg-2">
                          <a
                            href="https://player.vimeo.com/video/140182080?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1"
                            className="btn btn-video-play video-popup"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 recent pic">
                        <div className="single-gallery-item gallery-bg-3">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>University Cumpus</h4>
                              <p className="gallery-event-date">28 Oct, 2018</p>
                            </div>
                            <a
                              href="assets/images/gallery/gellary-img-3.jpg"
                              className="btn-zoom image-popup"
                            >
                              <img src="assets/images/zoom-icon.png" alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 old">
                        <div className="single-gallery-item gallery-bg-4">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>University Cumpus</h4>
                              <p className="gallery-event-date">28 Oct, 2018</p>
                            </div>
                            <a
                              href="assets/images/gallery/gellary-img-4.jpg"
                              className="btn-zoom image-popup"
                            >
                              <img src="assets/images/zoom-icon.png" alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 pic event">
                        <div className="single-gallery-item gallery-bg-5">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>University Cumpus</h4>
                              <p className="gallery-event-date">28 Oct, 2018</p>
                            </div>
                            <a
                              href="assets/images/gallery/gellary-img-5.jpg"
                              className="btn-zoom image-popup"
                            >
                              <img src="assets/images/zoom-icon.png" alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 old recent">
                        <div className="single-gallery-item gallery-bg-6">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>University Cumpus</h4>
                              <p className="gallery-event-date">28 Oct, 2018</p>
                            </div>
                            <a
                              href="assets/images/gallery/gellary-img-6.jpg"
                              className="btn-zoom image-popup"
                            >
                              <img src="assets/images/zoom-icon.png" alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 pic">
                        <div className="single-gallery-item video gallery-bg-7">
                          <a
                            href="https://player.vimeo.com/video/181545195?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;loop=1"
                            className="btn btn-video-play video-popup"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End -->

                                <!-- Single Gallery Start --> */}
                      <div className="col-lg-3  col-sm-6 pic recent old">
                        <div className="single-gallery-item gallery-bg-8">
                          <div className="gallery-hvr-wrap">
                            <div className="gallery-hvr-text">
                              <h4>University Cumpus</h4>
                              <p className="gallery-event-date">28 Oct, 2018</p>
                            </div>
                            <a
                              href="assets/images/gallery/gellary-img-8.jpg"
                              className="btn-zoom image-popup"
                            >
                              <img src="assets/images/zoom-icon.png" alt="a" />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Single Gallery End --> */}
                    </div>
                    {/* <!-- Gallery Item content End --> */}
                  </div>
                </div>
              </div>
              {/* <!--== Gallery Container Warpper==--> */}
            </div>
          </section>
          {/* <!--=======================--> */}
          {/* <!--=         Blog        =--> */}
          {/* <!--=======================--> */}
          <section id="blog-area" className="section-padding">
            <div className="container">
              {/* <!--== Section Title Start ==--> */}
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="section-title">
                    <h2>Recent News</h2>
                  </div>
                </div>
              </div>
              {/* <!--== Section Title End ==--> */}

              {/* <!--== Blog Content Wrapper ==--> */}
              <div className="row">
                {/* <!--== Single Blog Post start ==--> */}
                <div className="col-lg-4 col-md-6">
                  <article className="single-blog-post">
                    <figure className="blog-thumb">
                      <div className="blog-thumbnail">
                        <img
                          src="assets/images/blog/blog-1.jpg"
                          alt="Blog"
                          className="img-fluid"
                        />
                      </div>
                      <figcaption className="blog-meta clearfix">
                        <a href="single-blog.html" className="author">
                          <div className="author-pic">
                            <img
                              src="assets/images/blog/author.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="author-info">
                            <h5>Daney williams</h5>
                            <p>2 hours Ago</p>
                          </div>
                        </a>
                        {/* <div className="like-comm pull-right">
                          <a href="#">
                            <i className="fa fa-comment-o"></i>77
                          </a>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>12
                          </a>
                        </div> */}
                      </figcaption>
                    </figure>

                    <div className="blog-content">
                      <h3>
                        <a href="single-blog.html">
                          Recently we create a maassive project that
                        </a>
                      </h3>
                      <p>
                        This is a big project of our company, we are happy to
                        completed this type projec which are get world famous
                        award
                      </p>
                      <a href="single-blog.html" className="btn btn-brand">
                        More
                      </a>
                    </div>
                  </article>
                </div>
                {/* <!--== Single Blog Post End ==--> */}

                {/* <!--== Single Blog Post start ==--> */}
                <div className="col-lg-4 col-md-6">
                  <article className="single-blog-post">
                    <figure className="blog-thumb">
                      <div className="blog-thumbnail">
                        <img
                          src="assets/images/blog/blog-2.jpg"
                          alt="Blog"
                          className="img-fluid"
                        />
                      </div>
                      <figcaption className="blog-meta clearfix">
                        <a href="single-blog.html" className="author">
                          <div className="author-pic">
                            <img
                              src="assets/images/blog/author.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="author-info">
                            <h5>Myra Hindley</h5>
                            <p>1 Day Ago</p>
                          </div>
                        </a>
                        {/* <div className="like-comm pull-right">
                          <a href="#">
                            <i className="fa fa-comment-o"></i>77
                          </a>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>12
                          </a>
                        </div> */}
                      </figcaption>
                    </figure>

                    <div className="blog-content">
                      <h3>
                        <a href="single-blog.html">
                          Myra Hindley and her lover, Ian Brady, plotted and
                        </a>
                      </h3>
                      <p>
                        This is a big project of our company, we are happy to
                        completed this type projec which are get world famous
                        award
                      </p>
                      <a href="single-blog.html" className="btn btn-brand">
                        More
                      </a>
                    </div>
                  </article>
                </div>
                {/* <!--== Single Blog Post End ==--> */}

                {/* <!--== Single Blog Post start ==--> */}
                <div className="col-lg-4 col-md-6">
                  <article className="single-blog-post">
                    <figure className="blog-thumb">
                      <div className="blog-thumbnail">
                        <img
                          src="assets/images/blog/blog-3.jpg"
                          alt="Blog"
                          className="img-fluid"
                        />
                      </div>
                      <figcaption className="blog-meta clearfix">
                        <a href="single-blog.html" className="author">
                          <div className="author-pic">
                            <img
                              src="assets/images/blog/author.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="author-info">
                            <h5>Aileen Wuornos</h5>
                            <p>3 mins Ago</p>
                          </div>
                        </a>
                        {/* <div className="like-comm pull-right">
                          <a href="#">
                            <i className="fa fa-comment-o"></i>77
                          </a>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>12
                          </a>
                        </div> */}
                      </figcaption>
                    </figure>

                    <div className="blog-content">
                      <h3>
                        <a href="single-blog.html">
                          Nurse with a private practice, racked up dozens of
                          victims
                        </a>
                      </h3>
                      <p>
                        This is a big project of our company, we are happy to
                        completed this type projec which are get world famous
                        award
                      </p>
                      <a href="single-blog.html" className="btn btn-brand">
                        More
                      </a>
                    </div>
                  </article>
                </div>
                {/* <!--== Single Blog Post End ==--> */}
              </div>
              {/* <!--== Blog Content Wrapper ==--> */}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
