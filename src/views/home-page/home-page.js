import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./home-page.scss"

class Homepage extends Component {
    render() {
        return (
            <div className="page" id="homepage">
                <div className="menu">
                    <Link className="btn btn-light" to="/login">Moje konto</Link>
                    <Link className="btn btn-secondary" to="/addoffers">Zamieść ogłoszenie</Link>
                    <Link className="btn btn-primary" to="/praca">Znajdź pracę</Link>
                </div>
                <div className="img"></div>

            </div>
        );
    }
}

export default Homepage