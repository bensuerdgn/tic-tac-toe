import React from "react";
import styles from "./Square.module.css";

function Square({ value, onClick }) {
  console.log(value);
  const style = value === "X" ? `${styles.x} ` : `${styles.o}`;

  return (
    <button className={`${styles.square} ${style} `} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
