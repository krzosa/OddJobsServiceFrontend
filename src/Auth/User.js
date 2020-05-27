class User {
  constructor() {
    this.userId = 0;
    this.firstName = "";
    this.lastName = "";
    this.userName = "";
    this.email = "";
    this.phoneNumber = "";
    this.password = "";
  }

  setFirstName = (firstName) => {
    this.firstName = firstName;
  };

  setLastName = (lastName) => {
    this.lastName = lastName;
  };

  setUserName = (userName) => {
    this.userName = userName;
  };

  setEmail = (email) => {
    this.email = email;
  };

  setPhoneNumber = (phoneNumber) => {
    this.phoneNumber = phoneNumber;
  };

  setUserId = (userId) => {
    this.userId = userId;
  };

  setPassword = (password) => {
    this.password = password;
  };

  getUserId() {
    return this.userId;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getUserName() {
    return this.userName;
  }

  getEmail() {
    return this.email;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  getPassword() {
    return this.password;
  }
}

export default new User();
