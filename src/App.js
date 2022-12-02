import "./App.css";
import { useState, useEffect, useRef } from "react";
import PlayerData from "./data/players.json";
import Player from "./components/Player";
import Dashboard from "./components/Dashboard";

function App() {
  const playerData = PlayerData;
  const [playerList, setPlayerList] = useState(playerData);
  const [filterTeam, setFilterTeam] = useState([]);
  const [filterPosition, setFilterPosition] = useState([]);
  const [sort, setSort] = useState("Random");
  const [dashboard, setDashboard] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);
  const ref = useRef([]);

  useEffect(() => {
    if (filterPosition === "All") {
      setPlayerList(playerData);
    } else {
      const filterPosList = playerData.filter(
        (player) => player.position === filterPosition
      );
      setPlayerList(filterPosList);
    }
  }, [filterPosition]);

  useEffect(() => {
    if (sort === "Reset") {
      setPlayerList(playerData);
      setDashboard([]);
      setCounter(0);
      setTotal(0);
      for (let i = 0; i < ref.current.length; i++) {
        ref.current[i].checked = false;
      }
    } else {
      const sortedList = [...playerList].sort(compareScore);
      setPlayerList(sortedList);
    }
  }, [sort]);

  useEffect(() => {
    let score = 0;
    dashboard.forEach((item) => {
      score = score + item.score;
    });
    setTotal(score);
  }, [dashboard]);

  const addToDash = (p, s, img) => {
    if (counter === 5) {
      return;
    } else if (!dashboard.some((item) => p === item.name)) {
      setDashboard([...dashboard, { name: p, score: s, image: img }]);
      setCounter(counter + 1);
    }
  };

  const removeFromDash = (p) => {
    const removedPlayer = dashboard.filter((player) => player.name !== p);
    if (dashboard.some((item) => p === item.name)) {
      setDashboard(removedPlayer);
      setCounter(counter - 1);
    }
  };

  const compareScore = (a, b) => {
    if (sort === "Highest") {
      return b.score - a.score;
    } else if (sort === "Lowest") {
      return a.score - b.score;
    }
  };

  const onClickTeam = (team) => {
    var checkBox = document.getElementById(team);
    if (checkBox.checked === true) {
      setFilterTeam([...filterTeam, team]);
    } else {
      let y = filterTeam.filter((teams) => teams !== team);
      setFilterTeam(y);
    }
  };

  const onClickPosition = (position) => {
    var checkBox = document.getElementById(position);
    if (checkBox.checked === true) {
      setFilterPosition([...filterPosition, position]);
    } else {
      let y = filterPosition.filter((positions) => positions !== position);
      setFilterPosition(y);
    }
  };

  useEffect(() => {
    let updatedPlayerList1 = [];
    let updatedPlayerList2 = [];

    filterPosition.map((position) => {
      let x = playerData.filter((player) => player.position === position);
      x.map((player) => updatedPlayerList1.push(player));
    });
    filterTeam.map((team) => {
      let x = playerData.filter((player) => player.team === team);
      x.map((player) => updatedPlayerList2.push(player));
    });

    if (filterPosition.length + filterTeam.length === 0) {
      setPlayerList(playerData);
    } else if (filterTeam.length === 0) {
      setPlayerList(updatedPlayerList1);
    } else if (filterPosition.length === 0) {
      setPlayerList(updatedPlayerList2);
    } else {
      let updatedPlayerList3 = updatedPlayerList1.filter(function (n) {
        return updatedPlayerList2.indexOf(n) > -1;
      });
      setPlayerList(updatedPlayerList3);
    }
  }, [filterTeam, filterPosition]);

  return (
    <div className="App">
      <div className="header">NBA Fantasy Team Dash</div>
      <div className="top-container">
        <div className="picker-container">
          <div className="filter-team">
            Show Players On:
            <form>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[0] = element;
                }}
                id="Los Angeles Lakers"
                onClick={() => onClickTeam("Los Angeles Lakers")}
              />{" "}
              <span>Lakers</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[1] = element;
                }}
                id="Boston Celtics"
                onClick={() => onClickTeam("Boston Celtics")}
              />{" "}
              <span>Celtics</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[2] = element;
                }}
                id="Brooklyn Nets"
                onClick={() => onClickTeam("Brooklyn Nets")}
              />{" "}
              <span>Nets</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[3] = element;
                }}
                id="Golden State Warriors"
                onClick={() => onClickTeam("Golden State Warriors")}
              />{" "}
              <span>Warriors</span>
              <input
                type="checkbox"
                id="Dallas Mavericks"
                ref={(element) => {
                  ref.current[4] = element;
                }}
                onClick={() => onClickTeam("Dallas Mavericks")}
              />{" "}
              <span>Mavericks</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[5] = element;
                }}
                id="Milwaukee Bucks"
                onClick={() => onClickTeam("Milwaukee Bucks")}
              />{" "}
              <span>Bucks</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[6] = element;
                }}
                id="Memphis Grizzlies"
                onClick={() => onClickTeam("Memphis Grizzlies")}
              />{" "}
              <span>Grizzlies</span>
            </form>
          </div>
          <div className="filter-position">
            Position:
            <form>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[7] = element;
                }}
                id="Point Guard"
                onClick={() => onClickPosition("Point Guard")}
              />{" "}
              <span>Point Guard</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[8] = element;
                }}
                id="Shooting Guard"
                onClick={() => onClickPosition("Shooting Guard")}
              />{" "}
              <span>Shooting Guard</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[9] = element;
                }}
                id="Small Forward"
                onClick={() => onClickPosition("Small Forward")}
              />{" "}
              <span>Small Forward</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[10] = element;
                }}
                id="Power Forward"
                onClick={() => onClickPosition("Power Forward")}
              />{" "}
              <span>Power Forward</span>
              <input
                type="checkbox"
                ref={(element) => {
                  ref.current[11] = element;
                }}
                id="Center"
                onClick={() => onClickPosition("Center")}
              />{" "}
              <span>Center</span>
            </form>
            <div className="score-by">Sort score by:</div>
            <button onClick={() => setSort("Highest")}>Highest</button>
            <button onClick={() => setSort("Lowest")}>Lowest</button>
            <button onClick={() => setSort("Reset")}>Reset</button>
          </div>
        </div>
      </div>
      <div className="player-container">
        {playerList.map((player) => (
          <Player
            name={player.name}
            position={player.position}
            team={player.team}
            image={player.image}
            score={player.score}
            addToDash={addToDash}
            removeFromDash={removeFromDash}
          />
        ))}
      </div>
      <div className="dashboard-container">
        {dashboard.map((player) => (
          <Dashboard
            name={player.name}
            score={player.score}
            image={player.image}
          />
        ))}
        <div className="counter-container">
          Total Score: {total}
          <div className>{counter} out of 5</div>
        </div>
      </div>
      <div className="dummy-div"></div>
    </div>
  );
}

export default App;
