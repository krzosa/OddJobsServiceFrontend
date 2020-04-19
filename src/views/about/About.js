import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
      return (
        <div className="container content mb-5 mt-4">
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
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="" alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card">
                        <img className="card-img-top" src="" alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card">
                        <img className="card-img-top" src="" alt="Card cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
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