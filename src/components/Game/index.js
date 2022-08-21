import React, { useState } from "react";
import Board from "../Board";
import styles from "./Game.module.css";
import { calculateWinner } from "../../helper";

function Game() {
  const [square, setSquare] = useState([Array(9).fill("")]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isNext, setIsNext] = useState(true);

  const winner = calculateWinner(square[stepNumber]);
  const xO = isNext ? "X" : "O";

  const handleClick = (i) => {
    const previous = square.slice(0, stepNumber + 1);
    const current = previous[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xO;
    setSquare([...previous, squares]);
    setStepNumber(previous.length);
    setIsNext(!isNext);
    console.log(stepNumber, square.length);
  };

  const result = () => {
    if (!winner && stepNumber >= 9) {
      return "Game Draw";
    }
    if (winner) {
      return "Winner: " + winner;
    } else {
      return "Next Player: " + xO;
    }
  };

  const restart = () => {
    setSquare([Array(9).fill("")]);
    setStepNumber(0);
    setIsNext(true);
    calculateWinner(square[stepNumber]);
  };
  return (
    <div className={styles.game}>
      <Board squares={square[stepNumber]} onClick={handleClick} />
      <h3>{result()}</h3>
      <button className={styles.button} onClick={() => restart()}>
        Restart
      </button>
    </div>
  );
}

export default Game;
