import React from "react";
import IMG from "./images/allegro.jpg";
import { Link } from "react-router-dom";

export function Frame(date) {
  let advertisementID = date.advertisementID;
  let title = date.title;
  let description = date.description;
  let dateTime = date.dateTime;
  let city = date.city;
  const timeYearMonthDay = dateTime[0] + "." + dateTime[1] + "." + dateTime[2];
  const hoursMinutesSeconds =
    dateTime[3] + ":" + dateTime[4] + ":" + dateTime[5];

  return (
    <div className="container mt-2 " id="offers-frame">
      <div className="row">
        <div className="card mb-3 col-12" style={{ width: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4 mt-2 mb-2">
              <img src={IMG} className="card-img" alt="aa" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">
                  <Link to={"details/" + advertisementID} target='_blank'>{title}</Link>
                </h4>
                <h5 className="card-title">
                  <a href="#">{}</a>
                </h5>
                <p className="card-text">{city}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {timeYearMonthDay + "  " + hoursMinutesSeconds}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame;
