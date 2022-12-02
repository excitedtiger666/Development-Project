import { useState, useEffect } from "react";
import "../App.css";
function Dashboard(props) {
  return (
    <div className="dashboard">
      <div>{props.name}</div>
      <div>Score: {props.score}</div>
      <img src={props.image} className="dashboard-image" alt="" />
    </div>
  );
}

export default Dashboard;
