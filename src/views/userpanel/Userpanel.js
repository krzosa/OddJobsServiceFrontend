import React, { Component } from "react";
import "./style.scss";
import user from "../../Auth/User";
import axios from "axios";
import { CreateData } from "./CreateData";
import { ShowInfo } from "./ShowInfo";

class Userpanel extends Component {
    render(){        
        return(
        <div className="container content userpanel" id="userpanel">
            <div className="row">
                <div className="col-sm-4">
                        <br></br><br></br><br></br>
                        <img className="w-75 h-40 rounded-circle" src={require('./avatar.jpg') } alt=""/>
                        <br></br><br></br>
                        <form>
                            <input type="file" id="file" name="file"/><br></br><br></br>
                        </form>

        <h4 className="text-left">{user.getFirstName() + " " + user.getLastName()}</h4>

                        <nav className="nav flex-column">
                            <a className="nav-link active" href="userpanel">Ogólne</a>
                            <a className="nav-link" href="history">Moje ogłoszenia</a>
                            <a className="nav-link" href="addoffers">Dodaj ogłoszenie</a>
                        </nav>
                </div>  
                <div className="col-sm-8">
                    <br></br><br></br><br></br>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="imie">Imię:</label>
                                <input type="text" className="form-control" id="imie" placeholder={user.getFirstName()} name="imie" readOnly/><br></br>
                                <label htmlFor="nazwisko">Nazwisko:</label>
                                <input type="text" className="form-control" id="nazwisko" placeholder={user.getLastName()} name="nazwisko" readOnly/><br></br>
                                <label htmlFor="imie">Konto:</label>
                                <input type="text" className="form-control" id="konto" placeholder={user.getUserName()} name="konto" readOnly/><br></br>
                                <label htmlFor="nazwisko">Hasło:</label>
                                <input type="password" className="form-control" id="haslo" placeholder={user.getPassword()} name="haslo"/><br></br>
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder={user.getEmail()} name="email"/><br></br>
                                <label htmlFor="tel">Tel:</label>
                                <input type="tel" className="form-control" id="tel" placeholder={user.getPhoneNumber()} name="tel"/><br></br>
                                <button type="button" className="btn btn-primary">Zapisz</button>
                                <button type="button" className="btn btn-light">Anuluj</button>
                                <br></br><br></br><br></br>
                            </div>
                            
                        </div>
                    </form>
                </div>    
            </div>
  state = {
    passwordChange: false,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }

  handleEmail = (e) => {
    user.setEmail(e.target.value);
  };

  handleFirstName = (e) => {
    user.setFirstName(e.target.value);
  };

  handleLastName = (e) => {
    user.setLastName(e.target.value);
  };

  handlePassword = (e) => {
    user.setPassword(e.target.value);
    this.setState({ passwordChange: true });
  };

  handlePhoneNumber = (e) => {
    user.setPhoneNumber(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    let data = CreateData(this.state.passwordChange);

    axios
      .patch("http://149.156.146.249:60021/api/users/", data, {
        headers: headers,
        withCredentials: true,
      })
      .then((res) => ShowInfo(res.data));
  };

  render() {
    return (
      <div className="container" id="userpanel">
        <div className="row">
          <div className="col-sm-4">
            <br></br>
            <br></br>
            <img
              className="w-75 h-40 rounded-circle"
              id="avatar"
              src={require("./avatar.jpg")}
              alt=""
            />
            <br></br>
            <br></br>
            <form>
              <input type="file" id="file" name="file" />
              <br></br>
              <br></br>
            </form>

            <h4 className="text-left">
              {user.getFirstName() + " " + user.getLastName()}
            </h4>

            <nav className="nav flex-column">
              <a className="nav-link" href="history">
                Moje ogłoszenia
              </a>
            </nav>
          </div>
          <div className="col-sm-8">
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="imie">Imię:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="imie"
                    onChange={this.handleFirstName}
                    placeholder={user.getFirstName()}
                    name="imie"
                  />
                  <p className="text-danger" id="errorFirstName"></p>
                  <br></br>
                  <label htmlFor="nazwisko">Nazwisko:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nazwisko"
                    onChange={this.handleLastName}
                    placeholder={user.getLastName()}
                    name="nazwisko"
                  />
                  <p className="text-danger" id="errorLastName"></p>

                  <br></br>
                  <label htmlFor="imie">Konto:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="konto"
                    placeholder={user.getUserName()}
                    name="konto"
                    readOnly
                  />
                  <br></br>
                  <label htmlFor="nazwisko">Hasło:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="haslo"
                    onChange={this.handlePassword}
                    placeholder="Podaj nowe hasło"
                    name="haslo"
                  />
                  <p className="text-danger" id="errorPassword"></p>

                  <br></br>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={this.handleEmail}
                    placeholder={user.getEmail()}
                    name="email"
                  />
                  <br></br>
                  <label htmlFor="tel">Tel:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    onChange={this.handlePhoneNumber}
                    placeholder={user.getPhoneNumber()}
                    name="tel"
                  />
                  <p className="text-danger" id="errorPhoneNumber"></p>

                  <br></br>
                  <button type="submit" className="btn btn-primary">
                    Zapisz
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Userpanel;
