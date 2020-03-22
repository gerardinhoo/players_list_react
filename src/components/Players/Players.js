import React from 'react';
import "./Players.css";

const Players = (props) => {
  return (
    <div className="container mt-4">
      <h3>{props.name}</h3>
      <div className="card">
        <img src={props.image} alt="profile" style={{ width: "250px" }} />
        <div className="card-body">
          <h5>Profession: {props.profession}</h5>
          <h5>Position:{props.position}</h5>
          <h5>Nationality:{props.nationality}</h5>
        </div>
      </div>
    </div>
  )
}


export default Players;