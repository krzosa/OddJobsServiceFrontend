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

    offset: 0,
    elements: [],
    //perPage okresla ile ogloszen ma być na stronie 
    perPage: 2,
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
    this.setState({currentPage: 0,offset: 0});

    let pom = this.state.url + "?";

    //przekazanie pobranych parametrów i utworzenie nowego adresu URL do zapytania 
    pom += CreateUrl(
      this.state.city,
      this.state.housework,
      this.state.animalScare,
      this.state.gardencare
    );
    //nowe zapytanie wraz z adrgumentami np. miasto, kategoria
      this.receiveData(pom)
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

  //ustawianie aktualnej strony
  setElementsForCurrentPage() {
    let elements = this.state.contacts
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((post) => Frame(post) );
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
          <div className="row">
            {/* Stanowisko firma*/}
            <div className="col-sm-6 mt-1 col-md-4 col-xl-4">
              <input
                type="text"
                className="form-control"
                placeholder="Stanowisko, firma"
              />
            </div>

            {/* Miasto*/}
            <div className="col-sm-6 mt-1 col-md-4 col-xl-4">
              <input
                type="text"
                className="form-control"
                placeholder="Miasto"
                onChange={this.handleCity}
              />
            </div>


            {/* Szukaj */}
            <button
              className="mt-1 col ml-3 mr-3 mr-sm-3 col-sm-6 col-md-4 col-xl-2 ml-xl-5 btn btn-primary"
              type="submit"
            >
              Szukaj
            </button>
          </div>

          <div className="row">
            {/* Kategorie */}
            <div className="col-sm-6 mt-2 col-md-4 col-xl-3">
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
                      HouseWork
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="checkbox"
                        onChange={this.handleAnimalScare}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      AnimalScare
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input
                        type="checkbox"
                        onChange={this.handleGardenCare}
                      />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      GARDENCARE
                    </label>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <button className="btn btn-link dropdown-menu-item">
                      <span className="glyphicon glyphicon-globe"></span>
                      Globe
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Rodzaj umowy */}
            <div className="col-sm-6 mt-2 col-md-4 col-xl-3">
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
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Zlecenie
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>O
                      prace
                    </label>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <button className="btn btn-link dropdown-menu-item">
                      <span className="glyphicon glyphicon-globe"></span>
                      Dzieło
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wymiar pracy */}
            <div className="col-sm-12 mt-2 col-md-4 col-xl-3">
              <div className="col-sm-12 btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Wymiar pracy
                </button>
                <ul className="dropdown-menu col-11">
                  <li>Wymiar</li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      1/2 etatu
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      3/5 etatu
                    </label>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      4/5 etatu
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>

        {this.state.elements}
        {paginationElement}
      </div>
    );
  }
}

export default Offers;
