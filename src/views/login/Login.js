import React from "react";
import axios from "axios";

import { AlertFile } from "./AlertFile";
import { FunctionLogin } from "./FunctionLogin";

class Login extends React.Component {
  state = {
    name: "",
    password: "",
    errorChecked: "",
  };

  //Pobieranie nazwy użytkownika
  hangleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  //Pobieranie hasła
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  //Wywołanie funkcji po kliknięciu "Zaloguj"
  handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT fefege...",
    };

    var data = {
      username: this.state.name,
      password: this.state.password,
    };

    if (FunctionLogin(this.state.name, this.state.password)) {
      axios
        .post("http://149.156.146.249:60021/api/login", data, {
          headers: headers,
        })
        .then((res) => AlertFile(res))
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className="container content">
        <div className="form-check my-5">
          <div className="col-12 text-center my-5">
            <button className="btn btn-info btn-lg mx-2" type="submit">
              Zaloguj się
            </button>

            <button className="btn btn-info btn-lg mx-2" type="submit" disabled>
              Rejestracja
            </button>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                onChange={this.hangleChangeName}
                id="username"
                className="text-center col-8 col-md-6 col-lg-4"
              />
              <p className="text-danger" id="userNameId"></p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="password"
                onChange={this.handleChangePassword}
                id="password"
                className="text-center col-8 col-md-6 col-lg-4"
              />
              <p className="text-danger" id="passwordId"></p>
            </div>

            <div className="col-12 text-center my-5">
              <button
                type="submit"
                className="btn btn-info btn-lg mx-2 col-8 col-md-7 col-lg-4"
              >
                Zaloguj
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
