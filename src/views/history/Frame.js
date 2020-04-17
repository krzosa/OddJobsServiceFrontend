import React, { Component } from "react";
import IMG from './images/allegro.jpg' 

class Frame extends Component {
  render() {
    var data = require("./Data/data.json");
    //console.log(data["info"][0]["jobName"]);
    return (
      <div className="container mt-2 ">
        {data.info.map((item) => (
          <div className="row">
            <div className="card mb-3 col-12" style={{ width: "540px" }}>
              <div className="row no-gutters">
                <div className="col-md-4 mt-2 mb-2">
                  <img src={item.img} className="card-img" alt={item.jobName} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="/details">{item.jobName}</a>
                    </h4>
                    <h5 className="card-title">
                      <a href="#">{item.companyName}</a>
                    </h5>
                    <p className="card-text">{item.city}</p>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        {item.offerDate}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Frame;
