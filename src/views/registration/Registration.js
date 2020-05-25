import React, { Component } from "react";
import axios from "axios";

import { FunctionRegistration } from "./FunctionRegistration";
import { AlertFile } from "./AlertFile";

import auth from '../../Auth/Auth';
import Userpanel from '../userpanel/Userpanel';


class Registration extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    checked: false
  };

  hangleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleChangePasswordRepeat = (e) => {
    this.setState({ passwordRepeat: e.target.value });
  };

  handleChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handleChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleChangePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleCheckboxChange = (e) => {
    e.target.checked
      ? this.setState({ checked: true })
      : this.setState({ checked: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      FunctionRegistration(
        this.state.firstName,
        this.state.lastName,
        this.state.userName,
        this.state.phoneNumber,
        this.state.email,
        this.state.password,
        this.state.passwordRepeat,
        this.state.checked
      )
    ) {
      axios
        .post("http://149.156.146.249:60021/api/users/", {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.userName,
          phoneNumber: this.state.phoneNumber,
        })
        .then((res) =>
          AlertFile(
            res.data,
            this.state.email,
            this.state.password,
            this.state.passwordRepeat,
            this.state.checked
          )
        )
        .catch((err) => console.log(err));
    }
  };

  render() {
    if(auth.isAuthenticated() == false){
    return (
      <div className="container " id="registration">
        <div className="form-check">
          <div className="col-12 text-center my-5">
            <button className="btn btn-info btn-lg mx-2" type="submit" id="log">
              {" "}
              Zaloguj się{" "}
            </button>

            <button className="btn btn-info btn-lg mx-2" type="submit" id="reg" disabled>
              {" "}
              Rejestracja{" "}
            </button>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz Imię"
                id="firstName"
                onChange={this.handleChangeFirstName}
              />
              <p className="text-danger" id="errorFirstName"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz Nazwisko"
                id="lastName"
                onChange={this.handleChangeLastName}
              />
              <p className="text-danger" id="errorLastName"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz Nazwę Użytkownika"
                id="userName"
                onChange={this.handleChangeUserName}
              />
              <p className="text-danger" id="errorUserName"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz numer telefonu"
                id="phoneNumber"
                onChange={this.handleChangePhoneNumber}
              />
              <p className="text-danger" id="errorPhoneNumber"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="email"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz Email"
                id="email"
                onChange={this.hangleChangeEmail}
              />
              <p className="text-danger" id="errorEmail"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="password"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz hasło"
                id="password"
                onChange={this.handleChangePassword}
              />
              <p className="text-danger" id="errorPassword"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="password"
                className="text-center col-8 col-md-6 col-lg-4 "
                placeholder="Powtórz hasło"
                id="passwordRepeat"
                onChange={this.handleChangePasswordRepeat}
              />
              <p className="text-danger" id="errorPasswordRepeat"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                className="mr-1"
                type="checkbox"
                onChange={this.handleCheckboxChange}
              />
              Oświadczam że znam i akceptuję postanowienia Regulaminu.
              <p className="text-danger" id="errorChecked"></p>
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-info col-8 col-md-6 col-lg-4 mb-5 "
                id="zareg"
              >
                Zarejestruj się
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  else{
    return <Userpanel />
  }
  }
}

export default Registration;
