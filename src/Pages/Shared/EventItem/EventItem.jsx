const EventItem = ({ item }) => {
  const { title, img, date, text } = item;
  return (
    <div>
      <div className="single-upcoming-event">
        <div className="row">
          <div className="col-lg-5">
            <div className="up-event-thumb">
              <img src={img} className="img-fluid" alt="Upcoming Event" />
              <h4 className="up-event-date">It’s {date} February 2023</h4>
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
                    />
                    <p>Remaining</p>
                  </div>
                  <h3>
                    <a href="single-event.html">{title}</a>
                  </h3>
                  <p>{text}</p>
                  <div className="card-footer">
                    <a
                      href="single-event.html"
                      className="btn btn-brand btn-brand-dark"
                    >
                      Join with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
