import React, { Component } from "react";
import axios from "axios";
import { CreateUrl } from "./CreateUrl";

import ReactPaginate from "react-paginate";
import { Frame } from "./Frame";
import "./styles.css";

// perPage                      okresla ile ogloszen ma być na stronie
// ReceiveData                  przyjmuje adres URL i uzupełnianie tablicy tym co zwraca zapytanie do backendu
// componentDidMount            wywyłanie zaraz po odpaleniu strony
// handleSubmit                 Przycisk Szukaj
// CreateUrl                    przekazanie pobranych parametrów i utworzenie nowego adresu URL do zapytania
// handleCity                   Pobieranie Miasta
// handleAdvertisementCategory  ustawienie kategorii
// handleWorkingHours           ustawianie wymiaru pracy
// handleContractType           ustawienie rodzaju umowy
// setElementsForCurrentPage    ustawianie aktualnej strony

class Offers extends Component {
  state = {
    contacts: [],
    url: "http://149.156.146.249:60021/api/advertisements",
    city: "",
    advertisementCategory: "",
    workingHours: "",
    contractType: "",

    offset: 0,
    elements: [],
    perPage: 1,
    currentPage: 0,
  };

  receiveData(url) {
    axios
      .get(url)
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

  handleSubmit = (e) => {
    e.preventDefault();
    let pom = this.state.url + "?";
    this.setState({ currentPage: 0, offset: 0 });

    pom += CreateUrl(
      this.state.city,
      this.state.advertisementCategory,
      this.state.workingHours,
      this.state.contractType
    );

    this.receiveData(pom);
  };

  handleCity = (e) => {
    this.setState({ city: e.target.value });
  };

  handleAdvertisementCategory = (e) => {
    this.setState({ advertisementCategory: e.target.value });
  };

  handleWorkingHours = (e) => {
    this.setState({ workingHours: e.target.value });
  };

  handleContractType = (e) => {
    this.setState({ contractType: e.target.value });
  };

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
      <div className="container" id="offers">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-5">
            {/* Miasto*/}
            <div className="ml-3 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Miasto"
                onChange={this.handleCity}
              />
            </div>

            {/* Kategorie */}
            <div className="mt-2">
              <div className="col-sm-12 btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Kategorie
                </button>
                <ul className="dropdown-menu col-11">
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="advertisementCategory"
                        value=""
                        onChange={this.handleAdvertisementCategory}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Wszystkie
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="advertisementCategory"
                        value="HOUSEWORK"
                        onChange={this.handleAdvertisementCategory}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Prace domowe
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="advertisementCategory"
                        value="ANIMALSCARE"
                        onChange={this.handleAdvertisementCategory}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Opieka nad zwierzętami
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Rodzaj umowy */}
            <div className="mt-2">
              <div className="col-sm-12 btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Rodzaj umowy
                </button>
                <ul className="dropdown-menu col-11">
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="contractType"
                        value=""
                        onChange={this.handleContractType}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Wszystkie
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="contractType"
                        value="MANDATORY_CONTRACT"
                        onChange={this.handleContractType}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Zlecenie
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="contractType"
                        value="EMPLOYMENT_CONTRACT"
                        onChange={this.handleContractType}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>O
                      Prace
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wymiar pracy */}
            <div className="mt-2">
              <div className="col-sm-12 btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Wymiar pracy
                </button>
                <ul className="dropdown-menu col-11">
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="workingHours"
                        onChange={this.handleWorkingHours}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Wszystkie
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="workingHours"
                        value="HALF_TIME"
                        onChange={this.handleWorkingHours}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      1/2 etatu
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="radio"
                        name="workingHours"
                        value="FULL_TIME"
                        onChange={this.handleWorkingHours}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      pełen etat
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Szukaj */}
            <button
              className="mt-2 ml-5 col-md-2 btn btn-primary"
              type="submit"
            >
              Szukaj
            </button>
          </div>
        </form>

        {this.state.elements}
        {paginationElement}
      </div>
    );
  }
}

export default Offers;
