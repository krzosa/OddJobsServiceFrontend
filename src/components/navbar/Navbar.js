import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Navbar.scss'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-primary">
              <div className="container-fluid" id="navbarText">
                <div className="navbar-header col-2">
                <Link className="navbar-brand" to="">
                <img className="col-12 pl-0" src={require('./logo_biale.png') } alt=""/>
                </Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link pl-5" to="praca">Oferty pracy</Link>
                    <Link className="nav-link pl-5" to="about">O nas</Link>
                    <Link className="nav-link pl-5" to="rejestracja">Rejestracja</Link>
                    <Link className="nav-link pl-5" to="login">Logowanie</Link>
                    <Link className="nav-link pl-5" to="history">Historia</Link>
                    <Link className="nav-link pl-5" to="userpanel">Moje konto</Link>
                    <Link className="nav-link pl-5" to="addoffers">Dodaj ogłoszenie</Link>
                </div>
              </div>
            </nav>
        );
    }
}




export default Navbar