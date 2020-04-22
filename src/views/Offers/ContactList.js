import React, { Component } from "react";
import  Frame  from "./Frame";

export default class ContactList extends Component {
  contactToContactItem = (contact) => {
    const name = contact.name;
    const nativeName = contact.nativeName;
    const region = contact.region;
    const translations = contact.translations.br;
    const timezones = contact.timezones[0];
    return <Frame key={name} name={name} nativeName={nativeName} region={region} translations={translations} timezones={timezones} />;
  };

  render() {
    return (
      <div>
        {console.log(this.props.contacts[0])}
        {this.props.contacts.map(this.contactToContactItem)}
      </div>
    );
  }
}
