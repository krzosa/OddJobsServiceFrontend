import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Navbar.scss'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-primary">
              <div className="container-fluid" id="navbarText">
                <div className="navbar-header">
                <Link className="navbar-brand" to="">OddJobs</Link>
                </div>
                  <ul className="navbar-nav navbar-default">
                      <li>
                          <Link className="nav-link nav-center" to="praca">Oferty pracy</Link>
                      </li>
                  </ul>
                  <span className="navbar-nav">
                      <Link className="nav-link nav-right" to="about">O nas</Link>
                      <Link className="nav-link nav-right" to="rejestracja">Moje konto</Link>
                      <Link className="nav-link nav-right" to="rejestracja">Dodaj ogłoszenie</Link>
                  </span>
              </div>
            </nav>
        );
    }
}


export default Navbar