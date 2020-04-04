import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
      return (
        <div className="container">
            <h1>tutaj jakies img? nie mam pomyslu</h1>
            <div className="row">
                <div className="col-sm-8">
                    <h1>Co robimy?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                           n proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-sm-4">
                    <h1>Kontakt</h1>
                    <p>Oddjobs<br></br>30-012 Kraków<br></br>ul. Kupa 10<br></br>T: 123456789<br></br>
                     E: contact@oddjobs.pl</p>
                </div>
            </div>
            <h2>Zobacz najciekawsze oferty</h2>
            <div className="row">
                <div className="col">Oferta 1
                    <p>wefsdfwef<br></br>sdfwefwefsdfwe<br></br>fdsfsfsd</p>
                </div>
                <div className="col">Oferta 2
                    <p>wefsdfwef<br></br>sdfwefwefsdfwe<br></br>fdsfsfsd</p>
                </div>
                <div className="col">Oferta 3
                    <p>wefsdfwef<br></br>sdfwefwefsdfwe<br></br>fdsfsfsd</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2><Link to="rejestracja">...lub dodaj własną</Link></h2>
                </div>
            </div>
        </div>
      );
    }
}

export default About;