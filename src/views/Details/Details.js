import React, { Component } from "react";
import IMG from "./../Offers/images/allegro.jpg";

class Details extends Component {
  render() {
    return (
      <div className="container ">
        <div className="card mb-6 mt-3">
          <div className="row no-gutters border-bottom">
            <div className="col-md-2">
              <img src={IMG} className="card-img" alt="..." />
            </div>
            <div className="col-md-7 form-group text-center mt-4">
              <h5 className="card-title">
                Kierownik Schroniska dla osób bezdomnych z usługami opiekuńczymi
              </h5>
            </div>
            <div className="border-left">
              <div className="col-md form-group text-center mt-4 ">
                <i className="fas fa-money-bill-wave">80-90zł brutto/godz.</i>
              </div>
            </div>
          </div>

          <div className="row no-gutters text-center mt-3">
            <div className="col-md-3 ml-5">
              <i className="fas fa-map-marker-alt">Miejsce</i>
            </div>

            <div className="col-md-3 ml-5">
              <i className="fas fa-newspaper">Umowa o pracę</i>
            </div>

            <div className="col-md-3 ml-5">
              <i className="fas fa-chart-line">Praca fizyczna</i>
            </div>
          </div>

          <div className="row no-gutters text-center mt-3 mb-3">
            <div className="col-md-3 ml-5">
              <i className="fas fa-clock">Pełny etat</i>
            </div>

            <div className="col-md-3 ml-5">
              <i className="fas fa-calendar-alt">Ważna jeszcze 20dni</i>
            </div>
          </div>
        </div>

        <div className="border-top mt-3">
          <div className="card border-light  no-gutters mb-3 d-flex">
            <div className="card-header text-center  bg-primary text-white ">
              Ward Personnel Limited
              <br />
              (Nazwa firmy)
            </div>
            <div className="card-body">
              <h5 className="card-title">Opis stanowiska:</h5>
              <p className="card-text">
                <ul>
                  <li>Praca przy produkcji rozdzielnic</li>
                  <li>
                    Budowa i łączenie rozdzielnic i skrzynek elektrycznych,
                  </li>
                  <li>
                    Montaż pulpitów kontrolno-sterowniczych zgodnie z
                    dokumentacją techniczną, schematami elektrycznymi, oraz
                    rysunkami gabarytowymi
                  </li>
                  <li>Montaż materiałów pomocniczych zgodnie ze schematami,</li>
                </ul>
              </p>
              <h5 className="card-title">Wymagania</h5>
              <p className="card-text">
                <ul>
                  <li>Wykształcenie kierunkowe,</li>
                  <li>
                    Doświadczenie w pracy na stanowisku prefabrykacji szaf i
                    pulpitów sterowniczych oraz rozdzielnic elektrycznychjest
                    konieczne{" "}
                  </li>
                  <li>Umiejętność czytania schematów elektrycznych,</li>
                  <li>
                    Komunikatywna znajomość języka angielskiego jest wymagana,
                  </li>
                </ul>
              </p>
              <h5 className="card-title">Oferujemy</h5>
              <p className="card-text">
                <ul>
                  <li>
                    Oferujemy atrakcyjne zarobki w wysokości € 20.00 na godzinę{" "}
                  </li>
                  <li>Od 40 do 50 godzin tygodniowo </li>
                  <li>
                    Odbiór z lotniska i pomoc w zakwaterowaniu oraz we
                    wszystkich sprawach administracyjnych,{" "}
                  </li>
                  <li>
                    Ciekawą pracę w projektach dla międzynarodowych
                    kontrahentów,
                  </li>
                </ul>
              </p>
              Osoby zainteresowane prosimy o przesyłanie aplikacji klikając w
              przycisk aplikowania.
              <br />
              <br />
              <br />
              Prosimy o zawarcie w CV klauzuli: „Wyrażam zgodę na przetwarzanie
              danych osobowych zawartych w mojej ofercie pracy dla potrzeb
              niezbędnych do realizacji procesu rekrutacji prowadzonego przez
              __________ z siedzibą w ____________ zgodnie z ustawą z dnia 29
              sierpnia 1997 r. o ochronie danych osobowych (t.j. Dz. U. z 2016
              r., poz. 922)”. Jednocześnie wyrażam zgodę na przetwarzanie przez
              ogłoszeniodawcę moich danych osobowych na potrzeby przyszłych
              rekrutacji. Informujemy, że Administratorem danych jest
              ____________ z siedzibą w __________________ przy ul.
              _______________. Dane zbierane są dla potrzeb rekrutacji. Ma
              Pani/Pan prawo dostępu do treści swoich danych oraz ich
              poprawiania. Podanie danych w zakresie określonym przepisami
              ustawy z dnia 26 czerwca 1974 r. Kodeks pracy oraz aktów
              wykonawczych jest obowiązkowe. Podanie dodatkowych danych
              osobowych jest dobrowolne.
            </div>
          </div>
        </div>

        <div className="card border-light mb-5">
          <div className="card-body text-center  border-bottom">
            <button
              type="button"
              className="btn btn-danger btn-lg rounded-pill"
              style={{ width: "36%" }}
            >
              Aplikuj teraz
            </button>
          </div>
          <div className="border-bottom">
            <div className="row text-center ">
              <div className="col-4 border-right">
                <h5><i className="far fa-star" /> Zapisz</h5>
              </div>
              <div className="col-4 border-right">
                <h5><i className="fas fa-print" /> Drukuj</h5>
              </div>
              <div className="col-4">
                <h5><i className="fas fa-share-alt" /> Podziel się</h5>
              </div>
            </div>
          </div>
          <div className="mt-4 ml-3 mr-3">
            Klikając w przycisk „Aplikuj”, „Aplikuj teraz” lub w inny sposób
            wysyłając zgłoszenie rekrutacyjne do __________ z siedzibą w
            __________ przy ul. __________ (Pracodawca, Administrator danych),
            zgadzasz się na przetwarzanie przez Pracodawcę/Administratora danych
            Twoich danych osobowych zawartych w zgłoszeniu rekrutacyjnym w celu
            przeprowadzenia rekrutacji na stanowisko wskazane w ogłoszeniu.
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
