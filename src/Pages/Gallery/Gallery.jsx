import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Alumni | Gallery</title>
        </Helmet>
        <div id="main_content" className="main-content">
          {/* /.container-full */}
          {/* /.site-header */}
          {/*==========================*/}
          {/*=         Banner         =*/}
          {/*==========================*/}
          <section id="page-title-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto text-center">
                  <div className="page-title-content">
                    <h1 className="h2">Gallary</h1>
                    <p>
                      Alumni Needs enables you to harness the power of your
                      alumni network. Whatever may be the need
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
          {/*=         Gallery       =*/}
          {/*=========================*/}
          <section id="page-content-wrap">
            <div className="gallery-page-wrap section-padding">
              {/* Gallery Menu Start */}
              <div className="gallery-menu text-center">
                <a href="#" className="active">
                  All
                </a>
                <a href="#">Seminar</a>
                <a href="#">Event</a>
                <a href="#">Picnic</a>
              </div>
              {/* Gallery Menu End */}
              {/*= Gallery Page Content Wrap Start =*/}
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="full-album-content">
                      {/* Single Album Start */}
                      <div className="single-album-wraper">
                        <div className="album-heading">
                          <h2>
                            <a href="single-album.html">
                              Our last Meetup in 2018
                            </a>
                          </h2>
                          <p>
                            Etiam vitae tortor. Curabitur nisi. In hac habitasse
                            platea dictumst. Praesent ac massa at ligula laoreet
                            iaculis. Praesent ac massa at ligula laoreet
                            iaculis. sollicitudin, ipsum eu pulvinar rutrum,
                            tellus ipsum laoreet sapien, quis venenatis ante
                            odio sit amet eros. Nullam quis ante. Curabitur
                            vestibulum.
                          </p>
                          <a href="single-album.html" className="btn btn-brand">
                            View Album
                          </a>
                        </div>
                        <div className="album-gallery-item">
                          <div className="row gallery-gird">
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 recent event">
                              <div className="single-gallery-item gallery-bg-1">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-1.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old event pic">
                              <div className="single-gallery-item video gallery-bg-2">
                                <a
                                  href="https://player.vimeo.com/video/140182080?title=0&portrait=0&byline=0&autoplay=1&loop=1"
                                  className="btn btn-video-play video-popup"
                                >
                                  <i className="fa fa-play" />
                                </a>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 recent pic">
                              <div className="single-gallery-item gallery-bg-3">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-3.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old">
                              <div className="single-gallery-item gallery-bg-4">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-4.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic event">
                              <div className="single-gallery-item gallery-bg-5">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-5.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old recent">
                              <div className="single-gallery-item gallery-bg-6">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-6.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic">
                              <div className="single-gallery-item video gallery-bg-7">
                                <a
                                  href="https://player.vimeo.com/video/181545195?title=0&portrait=0&byline=0&autoplay=1&loop=1"
                                  className="btn btn-video-play video-popup"
                                >
                                  <i className="fa fa-play" />
                                </a>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic recent old">
                              <div className="single-gallery-item gallery-bg-8">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-8.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                          </div>
                        </div>
                      </div>
                      {/* Single Album End */}
                      {/* Single Album Start */}
                      <div className="single-album-wraper">
                        <div className="album-heading">
                          <h2>
                            <a href="single-album.html">
                              Our last Meetup in 2018
                            </a>
                          </h2>
                          <p>
                            Etiam vitae tortor. Curabitur nisi. In hac habitasse
                            platea dictumst. Praesent ac massa at ligula laoreet
                            iaculis. Praesent ac massa at ligula laoreet
                            iaculis. sollicitudin, ipsum eu pulvinar rutrum,
                            tellus ipsum laoreet sapien, quis venenatis ante
                            odio sit amet eros. Nullam quis ante. Curabitur
                            vestibulum.
                          </p>
                          <a href="single-album.html" className="btn btn-brand">
                            View Album
                          </a>
                        </div>
                        <div className="album-gallery-item">
                          <div className="row gallery-gird">
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 recent event">
                              <div className="single-gallery-item gallery-bg-1">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-1.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old event pic">
                              <div className="single-gallery-item video gallery-bg-2">
                                <a
                                  href="https://player.vimeo.com/video/140182080?title=0&portrait=0&byline=0&autoplay=1&loop=1"
                                  className="btn btn-video-play video-popup"
                                >
                                  <i className="fa fa-play" />
                                </a>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 recent pic">
                              <div className="single-gallery-item gallery-bg-3">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-3.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old">
                              <div className="single-gallery-item gallery-bg-4">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-4.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic event">
                              <div className="single-gallery-item gallery-bg-5">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-5.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old recent">
                              <div className="single-gallery-item gallery-bg-6">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-6.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic">
                              <div className="single-gallery-item video gallery-bg-7">
                                <a
                                  href="https://player.vimeo.com/video/181545195?title=0&portrait=0&byline=0&autoplay=1&loop=1"
                                  className="btn btn-video-play video-popup"
                                >
                                  <i className="fa fa-play" />
                                </a>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic recent old">
                              <div className="single-gallery-item gallery-bg-8">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-8.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                          </div>
                        </div>
                      </div>
                      {/* Single Album End */}
                      {/* Single Album Start */}
                      <div className="single-album-wraper">
                        <div className="album-heading">
                          <h2>
                            <a href="single-album.html">
                              Our last Meetup in 2018
                            </a>
                          </h2>
                          <p>
                            Etiam vitae tortor. Curabitur nisi. In hac habitasse
                            platea dictumst. Praesent ac massa at ligula laoreet
                            iaculis. Praesent ac massa at ligula laoreet
                            iaculis. sollicitudin, ipsum eu pulvinar rutrum,
                            tellus ipsum laoreet sapien, quis venenatis ante
                            odio sit amet eros. Nullam quis ante. Curabitur
                            vestibulum.
                          </p>
                          <a href="single-album.html" className="btn btn-brand">
                            View Album
                          </a>
                        </div>
                        <div className="album-gallery-item">
                          <div className="row gallery-gird">
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 recent event">
                              <div className="single-gallery-item gallery-bg-1">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-1.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old event pic">
                              <div className="single-gallery-item video gallery-bg-2">
                                <a
                                  href="https://player.vimeo.com/video/140182080?title=0&portrait=0&byline=0&autoplay=1&loop=1"
                                  className="btn btn-video-play video-popup"
                                >
                                  <i className="fa fa-play" />
                                </a>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 recent pic">
                              <div className="single-gallery-item gallery-bg-3">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-3.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old">
                              <div className="single-gallery-item gallery-bg-4">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-4.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic event">
                              <div className="single-gallery-item gallery-bg-5">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-5.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 old recent">
                              <div className="single-gallery-item gallery-bg-6">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-6.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic">
                              <div className="single-gallery-item video gallery-bg-7">
                                <a
                                  href="https://player.vimeo.com/video/181545195?title=0&portrait=0&byline=0&autoplay=1&loop=1"
                                  className="btn btn-video-play video-popup"
                                >
                                  <i className="fa fa-play" />
                                </a>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                            {/* Single Gallery Start */}
                            <div className="col-lg-3  col-sm-6 pic recent old">
                              <div className="single-gallery-item gallery-bg-8">
                                <div className="gallery-hvr-wrap">
                                  <div className="gallery-hvr-text">
                                    <h4>University Cumpus</h4>
                                    <p className="gallery-event-date">
                                      28 Oct, 2018
                                    </p>
                                  </div>
                                  <a
                                    href="assets/images/gallery/gellary-img-8.jpg"
                                    className="btn-zoom image-popup"
                                  >
                                    <img
                                      src="assets/images/zoom-icon.png"
                                      alt="a"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* Single Gallery End */}
                          </div>
                        </div>
                      </div>
                      {/* Single Album End */}
                    </div>
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
              </div>
              {/*= Gallery Page Content Wrap End =*/}
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Gallery;
