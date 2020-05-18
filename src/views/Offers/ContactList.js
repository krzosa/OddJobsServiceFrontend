import React, { Component } from "react";
import  Frame  from "./Frame";

export default class ContactList extends Component {
  contactToContactItem = (contact) => {
    const advertisementID = contact.advertisementID;
    const city = contact.city;
    const title = contact.title;
    const description = contact.description;
    const dateTime = contact.dateTime;
    return <Frame key={advertisementID} title={title} description={description} dateTime={dateTime} city={city} advertisementID={advertisementID} />;
  };

  render() {
    return (
      <div>
        {this.props.contacts.map(this.contactToContactItem)}
      </div>
    );
  }
}
