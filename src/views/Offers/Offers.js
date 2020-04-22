import React, { Component } from "react";
import Pagination from "./Pagination";
import ContactList from "./ContactList";

class Offers extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/united")
      .then((response) => response.json())
      .then((json) => this.setState({ contacts: json }));
  }

  render() {
    return (
      <div className="container">
        <form>
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
              />
            </div>

            {/* Odległość */}
            <select className="mt-1 col-3 ml-3 mr-5 col-sm-3 mr-sm-5 col-md-2 mr-md-0 col-xl-1 selectpicker">
              <optgroup label="Odległość">
                <option>2km</option>
                <option>5km</option>
                <option>10km</option>
              </optgroup>
            </select>

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
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Programista
                    </label>
                  </li>
                  <li>
                    <label className="dropdown-menu-item checkbox">
                      <input type="checkbox" />
                      <span className="glyphicon glyphicon-unchecked"></span>
                      Grafik
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
        <ContactList contacts={this.state.contacts} />
        <Pagination />
      </div>
    );
  }
}

export default Offers;
