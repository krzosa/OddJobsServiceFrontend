import React, { Component } from "react";
import IMG from "./images/allegro.jpg";

export const Frame = ({
  name,
  nativeName,
  region,
  translations,
  timezones,
}) => {
  return (
    <div className="container mt-2 ">
      <div className="row">
        <div className="card mb-3 col-12" style={{ width: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4 mt-2 mb-2">
              <img src={IMG} className="card-img" alt="aa" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">
                  <a href="/details">{name}</a>
                </h4>
                <h5 className="card-title">
                  <a href="#">{nativeName}</a>
                </h5>
                <p className="card-text">{region}</p>
                <p className="card-text">{translations}</p>
                <p className="card-text">
                  <small className="text-muted">{timezones}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
