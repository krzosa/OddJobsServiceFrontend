import React, { Component } from "react";
import "./style.scss"
class HomePage extends Component{
    render(){
        return(
        <div class="space homepage content">
          <div className="container d-flex justify-content-center text-center text-light ">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="card mt-5 mr-5" style={{width: "18rem"}}>
                    <div className="card-body">
                      <h3 className="card-title font-weight-bold vertical">DAJ PRACĘ</h3>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6">
                <div className="card mt-5 ml-5" style={{width: "18rem"}}>
                    <div className="card-body">
                      <h3 className="card-title font-weight-bold text-center vertical text-light">ZNAJDŹ PRACĘ</h3>
                    </div>
                  </div>
              </div>
              
            </div>
          </div> 
        </div>
        );
    }
}



export default HomePage