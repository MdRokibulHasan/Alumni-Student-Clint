import { useState } from "react";

const CareerItem = ({ item }) => {
  const { title, img, text } = item;
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 100; // Limit for the text length

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-lg-4 col-sm-6 ">
      <div
        className="single-job-opportunity d-flex flex-column"
        style={{ height: "400px" }}
      >
        <div className="job-opportunity-text flex-grow-1">
          <div className="job-oppor-logo">
            <div className="display-table">
              <div className="display-table-cell text-center">
                <img src={img} alt="Job" />
              </div>
            </div>
          </div>
          <h3 className="text-center">
            <a href="">{title}</a>
          </h3>
          <p
            className="text-left"
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {isExpanded ? text : `${text.substring(0, limit)}... `}
            <a href="" onClick={toggleExpand}>
              {isExpanded ? "See Less" : "See More"}
            </a>
          </p>
        </div>
        <div className="mt-auto text-center">
          <a href="" className="btn btn-job position-sticky bottom-0">
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerItem;
