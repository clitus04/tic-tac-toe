import { useEffect, useState } from "react";
import "./index.scss";
import { useContextValue } from "../../context/stateProvider";
import { actions } from "../../context/actions";
import { checkFilled, checkWin } from "../../utility";

const GameLayout = () => {
  const [{ data }, dispatch] = useContextValue();
  const [isXCurrent, setIsXCurrent] = useState(true);

  const handleClick = (row, column, value) => {
    if (value === "") {
      const payload = { row, column, value: isXCurrent ? "X" : "O" };
      dispatch({ type: actions.ADDPLAYERVALUE, payload });
      setIsXCurrent(!isXCurrent);
    } else {
      alert("Invalid Cell!!");
    }
  };

  const gameOver = (msg) => {
    setTimeout(() => {
      alert(msg);
      dispatch({ type: actions.GAMEOVER });
    }, 100);
  };

  useEffect(() => {
    const winnedPlayer = checkWin(data);
    if (winnedPlayer) {
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
