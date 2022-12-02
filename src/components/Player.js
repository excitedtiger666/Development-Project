import { useState, useEffect } from "react";
import "../App.css";
function Player(props) {
  return (
    <div className="player">
      <div className="player-image">
        <img src={props.image} alt="" />
      </div>
      <div className="info">
        <div className="stats">
          <div className="name"> {props.name} </div>
          <div className="position">{props.position}</div>
          <div className="team"> {props.team} </div>
          <div className="score"> Score: {props.score}</div>
        </div>
        <div className="dash-buttons">
        <button
          onClick={() => {
            props.addToDash(props.name, props.score, props.image);
          }}
        >
          Add to Dash
        </button>
        <button onClick={() => props.removeFromDash(props.name)}>
          Remove from Dash
        </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
