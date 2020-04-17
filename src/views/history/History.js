import React, { Component } from "react";
import Frame from './Frame';
import Pagination from "./Pagination";

class History extends Component {
  render() {
    return (
      <div className="container">
         <Frame />
        <Pagination />
      </div>
    );
  }
}

export default History;
