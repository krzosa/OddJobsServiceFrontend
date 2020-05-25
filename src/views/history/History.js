import React, { Component } from "react";
import Frame from './Frame';
import Pagination from "./Pagination";

class History extends Component {
  render() {
    return (
      <div className="container" id="history">
         <Frame />
        <Pagination />
      </div>
    );
  }
}

export default History;
