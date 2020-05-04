import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    checked: false,
    data: "",
    errorFirstName: "",
    errorLastName: "",
    errorUserName: "",
    errorPhoneNumber: "",
    errorEmail: "",
    errorPassword: "",
    errorPasswordRepeat: "",
    errorChecked: "",
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
      this.state.checked == true &&
      this.state.email != "" &&
      this.state.password == this.state.passwordRepeat
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
        .then((res) => this.setState(this.showInfo(res.data)))
        .catch((err) => console.log(err));

      //czyszczenie komunikatow
      this.setState({ errorChecked: "" });
      this.setState({ errorEmail: "" });
      this.setState({ errorPasswordRepeat: "" });
    } else if (!this.state.checked)
      this.setState({ errorChecked: "Zaznacz Checkbox" });
    else if (this.state.email == "")
      this.setState({ errorEmail: "Wpisz email" });
    else if (this.state.password != this.state.passwordRepeat)
      this.setState({ errorPasswordRepeat: "Niezgodne hasła" });
  };

  showInfo(data) {
    //walidacja imienia
    if (data.includes("firstName is too short"))
      this.setState({ errorFirstName: "Imie jest za krótkie" });
    else if (data.includes("firstName is too long"))
      this.setState({ errorFirstName: "Imie jest za długie" });
    else if (data.includes("firstName contains illegal character"))
      this.setState({ errorFirstName: "Nieprawidłowe znaki" });
    else this.setState({ errorFirstName: "" });

    //walidacja nazwiska
    if (data.includes("lastName is too short"))
      this.setState({ errorLastName: "Nazwisko jest za krótkie" });
    else if (data.includes("lastName is too long"))
      this.setState({ errorLastName: "Nazwisko jest za długie" });
    else if (data.includes("lastName contains illegal character"))
      this.setState({ errorLastName: "Nieprawidłowe znaki" });
    else this.setState({ errorLastName: "" });

    //walidacja uzytkownika
    if (data.includes("username is too short"))
      this.setState({ errorUserName: "Nazwa użytkownika jest za krótka" });
    else if (data.includes("username is too long"))
      this.setState({ errorUserName: "Nazwa użytkownika jest za długa" });
    else this.setState({ errorUserName: "" });

    //walidacja telefonu
    if (data.includes("phone number too short"))
      this.setState({ errorPhoneNumber: "Numer telefonu jest za krótki" });
    else if (data.includes("phone number too long"))
      this.setState({ errorPhoneNumber: "Numer telefonu jest za długi" });
    else this.setState({ errorPhoneNumber: "" });

    //walidacja hasła
    if (data.includes("password is too short"))
      this.setState({ errorPassword: "Hasło jest za krótkie" });
    else if (data.includes("password is too long"))
      this.setState({ errorPassword: "Hasło jest za długie" });
    else this.setState({ errorPassword: "" });
  }

  render() {
    return (
      <div className="container ">
        <div className="form-check">
          <div className="col-12 text-center my-5">
            <button className="btn btn-info btn-lg mx-2" type="submit">
              {" "}
              Zaloguj się{" "}
            </button>

            <button className="btn btn-info btn-lg mx-2" type="submit" disabled>
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
                onChange={this.handleChangeFirstName}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorFirstName}
              </p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz Nazwisko"
                onChange={this.handleChangeLastName}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorLastName}
              </p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz Nazwę Użytkownika"
                onChange={this.handleChangeUserName}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorUserName}
              </p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="text"
                className="text-center col-8 col-md-6 col-lg-4"
                placeholder="Wpisz numer telefonu"
                onChange={this.handleChangePhoneNumber}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorPhoneNumber}
              </p>
            </div>

            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="email"
                className="text-center col-8 col-md-6 col-lg-4"
                id="email"
                placeholder="podpowiedzEmail"
                placeholder="Wpisz Email"
                onChange={this.hangleChangeEmail}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorEmail}
              </p>
            </div>
            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="password"
                className="text-center col-8 col-md-6 col-lg-4"
                id="pass"
                placeholder="Wpisz hasło"
                onChange={this.handleChangePassword}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorPassword}
              </p>
            </div>
            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                type="password"
                className="text-center col-8 col-md-6 col-lg-4 "
                id="pass2"
                placeholder="Powtórz hasło"
                onChange={this.handleChangePasswordRepeat}
              />
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorPasswordRepeat}
              </p>
            </div>
            <div className="form-group col-12 my-3 text-center mb-4">
              <input
                className="mr-1"
                type="checkbox"
                onChange={this.handleCheckboxChange}
              />
              Oświadczam że znam i akceptuję postanowienia Regulaminu.
              <p
                className="form-group col-12 mt-0 mb-0 text-center"
                onChange={this.showInfo}
              >
                {this.state.errorChecked}
              </p>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-info col-8 col-md-6 col-lg-4 mb-5 "
              >
                Zarejestruj się
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;