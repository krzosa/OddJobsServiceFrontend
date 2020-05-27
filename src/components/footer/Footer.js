import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer bg-primary">
        <div className="container">
          <div className="row text-white">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4 id="kan">Dla kandydatów</h4>
              <ul className="list-unstyled">
                <li>Pomoc</li>
                <li>Urzędy pracy</li>
                <li><a href="history" class="text-white">Historia ogłoszeń</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4 id="firm">Dla firm</h4>
              <ul className="list-unstyled">
                <li><a href="addoffers" class="text-white">Dodaj ogłoszenie</a></li>
                <li><a href="userpanel" class="text-white">Konto pracodawcy</a></li>
                <li>Pomoc dla firm</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4 id="grup">Grupa Pracuj</h4>
              <ul className="list-unstyled">
                <li><a href="about" class="text-white">O nas</a></li>
                <li><a href="https://www.pajacyk.pl/" class="text-white">Reklama</a></li>
                <li>Partnerzy</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6 mt-4">
              <h4 id="inform">Informacje</h4>
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
              <a
                href="https://twitter.com/"
                target="_blank"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="col-1">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ color: "white" }}
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div className="col-1">
              <a
                id = "inst"
                href="https://www.instagram.com/eryk.it/"
                target="_blank"
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
