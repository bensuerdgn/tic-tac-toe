import React from "react";
import Square from "../Square";
import styles from "./Board.module.css";

function Board({ squares, onClick }) {
  return (
    <div className={styles.board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
