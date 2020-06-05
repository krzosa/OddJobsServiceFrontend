import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Navbar.scss'
import auth from "../../Auth/Auth";
import axios from 'axios';
import Cookies from 'js-cookie';

class Navbar extends Component {

  // Note(Krzosa): show logout button if authenticated, needs a refresh to work
  logoutButton() {
    if (auth.isAuthenticated() == true) {
      return (
        <button className="btn btn-primary" onClick={() => {
          axios
            .get("http://149.156.146.249:60021/api/logout")
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
          auth.logout();
          Cookies.remove('userName');
          window.location.reload();
        }}>Logout</button>)
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid" id="navbarText">
          <div className="navbar-header col-2">
            <Link className="navbar-brand" to="">
              <img className="col-12 pl-0" src={require('./logo_biale.png')} alt="" />
            </Link>
          </div>
          <div className="navbar-nav">

            <Link className="nav-link ml-5" to="praca">Oferty pracy</Link>
            <Link className="nav-link ml-5" to="about">O nas</Link>
            <Link className="nav-link ml-5" to="userpanel">Moje konto</Link>
            <div className="ml-3">
              {this.logoutButton()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}




export default Navbar
