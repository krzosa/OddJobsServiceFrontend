import React, { Component } from "react";
import axios from "axios";
import { CreateUrl } from "./CreateUrl";

import ReactPaginate from "react-paginate";
import { Frame } from "./Frame";
import "./styles.css";

class Offers extends Component {
  state = {
    contacts: [],
    url: "http://149.156.146.249:60021/api/advertisements",
    city: "",
    housework: false,
    animalScare: false,
    gardencare: false,
    halfTime: false,
    fullTime: false,
    employmentContract: false,
    mandatoryContract: false,

    offset: 0,
    elements: [],
    //perPage okresla ile ogloszen ma być na stronie
    perPage: 1,
    currentPage: 0,
  };

  //przyjmuje adres URL i uzupełnianie tablicy tym co zwraca zapytanie do backendu
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

  //wywyłanie zaraz po odpaleniu strony
  componentDidMount() {
    this.receiveData(this.state.url);
  }

  //Przycisk Szukaj
  handleSubmit = (e) => {
    e.preventDefault();

    //ustawienie na 1 stronie
    this.setState({ currentPage: 0, offset: 0 });

    let pom = this.state.url + "?";

    //przekazanie pobranych parametrów i utworzenie nowego adresu URL do zapytania
    pom += CreateUrl(
      this.state.city,
      this.state.housework,
      this.state.animalScare,
      this.state.gardencare,
      this.state.halfTime,
      this.state.fullTime,
      this.state.employmentContract,
      this.state.mandatoryContract
    );
    //nowe zapytanie wraz z adrgumentami np. miasto, kategoria
    this.receiveData(pom);
  };

  //Pobieranie Miasta
  handleCity = (e) => {
    this.setState({ city: e.target.value });
  };

  //houseWork
  handleHouseWork = (e) => {
    e.target.checked
      ? this.setState({ housework: true })
      : this.setState({ housework: false });
  };

  //animalscare
  handleAnimalScare = (e) => {
    e.target.checked
      ? this.setState({ animalScare: true })
      : this.setState({ animalScare: false });
  };

  //gardencare
  handleGardenCare = (e) => {
    e.target.checked
      ? this.setState({ gardencare: true })
      : this.setState({ gardencare: false });
  };

  //halfTime
  handleHalfTime = (e) => {
    e.target.checked
      ? this.setState({ halfTime: true })
      : this.setState({ halfTime: false });
  };

  //fullTime
  handleFullTime = (e) => {
    e.target.checked
      ? this.setState({ fullTime: true })
      : this.setState({ fullTime: false });
  };

  //employmentContract
  handleEmploymentContract = (e) => {
    e.target.checked
      ? this.setState({ employmentContract: true })
      : this.setState({ employmentContract: false });
  };

  //mandatoryContract
  handleMandatoryContract = (e) => {
    e.target.checked
      ? this.setState({ mandatoryContract: true })
      : this.setState({ mandatoryContract: false });
  };

  //ustawianie aktualnej strony
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
                  <li>IT</li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" onChange={this.handleHouseWork} />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Prace domowe
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="checkbox"
                        onChange={this.handleAnimalScare}
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
                  <li>Umowa</li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="checkbox"
                        onChange={this.handleMandatoryContract}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Zlecenie
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="checkbox"
                        onChange={this.handleEmploymentContract}
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
                  <li>Wymiar czasu</li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" onChange={this.handleHalfTime} />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      1/2 etatu
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" onChange={this.handleFullTime} />
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
