import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Navbar.scss'
import auth from "../../Auth/Auth";
import axios from 'axios';
import Cookies from 'js-cookie';

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

                    <Link className="nav-link ml-5" to="praca">Oferty pracy</Link>
                    <Link className="nav-link ml-5" to="about">O nas</Link>
                    <Link className="nav-link ml-5" to="rejestracja">Rejestracja</Link>
                    <Link className="nav-link ml-5" to="login">Logowanie</Link>
                    <Link className="nav-link ml-5" to="history">Historia</Link>
                    <Link className="nav-link ml-5" to="userpanel">Moje konto</Link>
                    <Link className="nav-link ml-5" to="addoffers">Dodaj ogłoszenie</Link>
                    <Link className="nav-link ml-5" to="homepage">Homepage2</Link>
                    <div className="ml-3">
                    <button onClick={() => {
                       axios
                       .get("http://149.156.146.249:60021/api/logout")
                       .then(resp => console.log(resp))
                       .catch(err => console.log(err));
                      auth.logout();
                      Cookies.remove('userName');
                      location.reload();
                    }}>Logout</button>
                    </div>
                </div>
              </div>
            </nav>
        );
    }
}




export default Navbar