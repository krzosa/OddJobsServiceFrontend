import React from "react";
import axios from "axios";

export function Frame(date) {
  let advertisementID = date.advertisementID;
  let title = date.title;
  let description = date.description;
  let dateTime = date.dateTime;
  let city = date.city;
  const timeYearMonthDay = dateTime[2] + "." + dateTime[1] + "." + dateTime[0];

  function deleteOffer() {
    console.log(advertisementID);
    
    const headers = {
      "Content-Type": "application/json",
    };

    
      axios.delete("http://149.156.146.249:60021/api/advertisements?id="+advertisementID,{
        headers: headers, 
      withCredentials: true,
    }
      ).then(res => console.log(res))
      
      window.location.reload(false);
  }

  return (
    <div className="card mt-3 mb-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p className="card-text">
          <h3>{description}</h3>
        </p>
        <p className="card-text">{city}</p>
        <p className="card-text">
          <small className="text-muted">{timeYearMonthDay}</small>
        </p>
        <button
        className="btn btn-primary"
        onClick={deleteOffer}>Usuń ogłoszenie</button>
      </div>
    </div>
  );
}
