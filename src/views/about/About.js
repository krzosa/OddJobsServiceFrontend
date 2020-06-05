import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
      return (
        <div className="container content mb-5 mt-4">
            <div className="row">
                <div className="col-sm-8">
                    <h1>Co robimy?</h1>
                    <p>Jesteśmy portalem zrzeszającym użytkowników zarówno szukających pracy jak i tych którzy tę pracę oferują. Na naszym portalu znajdziesz setki ogłoszeń pracy od zweryfikowanych pracodawców. </p>
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
                        <div className="card-body">
                            <img className="card-img-top" src="https://i.ibb.co/7rVT1m2/854081161001-5712841741001-5712830683001-vs.jpg" alt="Card cap"/>
                            <h5 className="card-title text-center mt-1">Koszenie Trawników</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card">
                        <div className="card-body">
                            <img className="card-img-top" src="https://i.ibb.co/6ntSdQ9/unnamed-1.jpg" alt="Card cap"/>
                            <h5 className="card-title text-center mt-2">Tworzenie Stron</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card">
                        <div className="card-body">
                        <   img className="card-img-top" src="https://i.ibb.co/C65sFCh/cropped-serwis-naprawa-gsm.jpg" alt="Card cap"/>
                            <h5 className="card-title text-center mt-4">Naprawa Telefonów</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 id="dodaj"><Link to="addoffers">...lub dodaj własną</Link></h2>

                </div>
            </div>
        </div>
      );
    }
}

export default About;