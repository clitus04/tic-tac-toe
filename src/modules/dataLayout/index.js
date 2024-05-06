import { useEffect, useState } from "react";
import "./index.scss";
import { useContextValue } from "../../context/stateProvider";

const DataLayout = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("X");
  const [state] = useContextValue();

  const handleTabClick = (player) => {
    setSelectedPlayer(player);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="data__layout">
      <div className="data__layout__tabpanel">
        <span
          className={`${selectedPlayer === "X" && "selected"}`}
          onClick={() => handleTabClick("X")}
        >
          X
        </span>
        <span
          className={`${selectedPlayer === "O" && "selected"}`}
          onClick={() => handleTabClick("O")}
        >
          O
        </span>
      </div>
      <div className="data__layout__tabview">
        <div className="wins__view">{`Wins : ${state[selectedPlayer]?.length}`}</div>
        <div className="timings__view">
          <ul>
            {state[selectedPlayer]?.length > 0 &&
              state[selectedPlayer].map((item, index) => (
                <li key={index}>{`${item} seconds`}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataLayout;
