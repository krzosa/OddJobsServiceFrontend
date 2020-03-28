import React, { Component } from "react";
import Work from './images/work.jpg';

class Frame extends Component {
  render() {
    return (
      <div className="container mt-2 ">
        <div className="row">
          <div className="card mb-3 col-12" style={{ width: "540px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 mt-2 mb-2">
                <img src={Work} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Nazwa pracy</a>
                  </h4>
                  <h5 className="card-title">
                    <a href="#">Nazwa firmy</a>
                  </h5>
                  <p className="card-text">Miasto</p>

                  <p className="card-text">Opis</p>
                  <p className="card-text">
                    <small className="text-muted">Data publikacji</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Frame;
