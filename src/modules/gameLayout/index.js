import { useEffect, useState } from "react";
import "./index.scss";
import { useContextValue } from "../../context/stateProvider";
import { actions } from "../../context/actions";
import { checkFilled, checkWin } from "../../utility";

const GameLayout = () => {
  const [{ data }, dispatch] = useContextValue();
  const [isXCurrent, setIsXCurrent] = useState(true);
  const [startTime, setStartTime] = useState(null);

  const handleClick = (row, column, value) => {
    if (!startTime) {
      setStartTime(new Date().getTime());
    }
    if (value === "") {
      const payload = { row, column, value: isXCurrent ? "X" : "O" };
      dispatch({ type: actions.ADDPLAYERVALUE, payload });
      setIsXCurrent(!isXCurrent);
    } else {
      alert("Invalid Cell!!");
    }
  };

  const gameOver = (msg) => {
    setStartTime(null);
    setTimeout(() => {
      alert(msg);
      dispatch({ type: actions.GAMEOVER });
    }, 100);
  };

  const updateGameData = (player) => {
    const endTime = new Date().getTime();
    const payload = { player, time: (endTime - startTime) / 1000 };
    dispatch({ type: actions.UPDATEPLAYERDATA, payload });
  };

  useEffect(() => {
    const winnedPlayer = checkWin(data);
    if (winnedPlayer) {
      updateGameData(winnedPlayer);
      gameOver(`${winnedPlayer} Winned!!`);
      setIsXCurrent(true);
    }
    if (checkFilled(data)) {
      gameOver("Game Over!!!");
      setIsXCurrent(true);
    }
  }, [data]);

  return (
    <div className="game__layout">
      <div className="game__layout__header">Tic Tac Toe</div>
      <div className="game__layout__body">
        {data.map((rowValue, rowIndex) => (
          <div className="game__row" key={rowIndex}>
            {rowValue.map((columnValue, columnIndex) => (
              <div
                className="game__cell"
                key={columnIndex}
                onClick={() => handleClick(rowIndex, columnIndex, columnValue)}
              >
                {columnValue}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLayout;
