import React from "react";
import styles from "./Square.module.css";

function Square() {
  return <button className={`${styles.square} ${styles.o}`}>X</button>;
}

export default Square;
