import React, { useState } from "react";
import Board from "../Board";
import styles from "./Game.module.css";
import { calculateWinner } from "../../helper";

function Game() {
  const [square, setSquare] = useState([Array(9).fill("")]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(square[stepNumber]);
  const xO = xIsNext ? "X" : "O";

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
    setXisNext(!xIsNext);
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

  return (
    <div className={styles.game}>
      <Board squares={square[stepNumber]} onClick={handleClick} />
      <h3>{result()}</h3>
    </div>
  );
}

export default Game;
