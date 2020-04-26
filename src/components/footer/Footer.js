import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer bg-primary">
        <div className="container">
          <div className="row text-white">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4>Dla kandydatów</h4>
              <ul className="list-unstyled">
                <li>Pomoc</li>
                <li>Urzędy pracy</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4>Dla firm</h4>
              <ul className="list-unstyled">
                <li>Dodaj ogłoszenie</li>
                <li>Konto pracodawcy</li>
                <li>Pomoc dla firm</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4>Grupa Pracuj</h4>
              <ul className="list-unstyled">
                <li>O nas</li>
                <li>Reklama</li>
                <li>Partnerzy</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4>Informacje</h4>
              <ul className="list-unstyled">
                <li>Regulamin</li>
                <li>Polityka prywatności</li>
                <li>Polityka plików cookies</li>
              </ul>
            </div>
            {/* Footer Date */}
            <div className="col-12 col-sm-5">
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy; {new Date().getDay()}.{new Date().getMonth()}.
                  {new Date().getFullYear()} Current date
                </p>
              </div>
            </div>
            <div className="col-1">
              <i className="fab fa-twitter" />
            </div>
            <div className="col-1">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="col-1">
              <a
                href="https://www.instagram.com/eryk.it/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
