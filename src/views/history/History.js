import React, { Component } from "react";
import {Frame} from './Frame';
import Cookies from 'js-cookie';
import ReactPaginate from "react-paginate";
import axios from 'axios';


class History extends Component {
  state = {
    contacts: [],
    url: "http://149.156.146.249:60021/api/advertisements?createdBy=",

    offset: 0,
    elements: [],
    perPage: 5,
    currentPage: 0,
  };

  receiveData(url) {
    axios
      .get(url + Cookies.get('userName'))
      .then((json) =>
        this.setState(
          {
            contacts: json.data,
            pageCount: Math.ceil(json.data.length / this.state.perPage),
          },
          () => this.setElementsForCurrentPage()
        )
      )
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.receiveData(this.state.url);
  }

  setElementsForCurrentPage() {
    let elements = this.state.contacts
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((post) => Frame(post));
    this.setState({ elements: elements });
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  };



  render() {
    let paginationElement;
    if (this.state.pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          forcePage={this.state.currentPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      );
    }

    return (
      <div className="container" id="history">
        {this.state.elements}
        {paginationElement}
      </div>
    );
  }
}

export default History;
