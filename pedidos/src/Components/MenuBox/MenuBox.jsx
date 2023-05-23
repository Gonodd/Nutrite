import styles from "./MenuBox.module.css";
import { useState } from "react";

const MenuBox = (props) => {
  const menu = props;
  const propiedad = Object.keys(menu)[0];

  const [cantidad, setCantidad] = useState({
    num: 0,
  });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{propiedad.toUpperCase()}</h1>
        <p className={styles.description}>{menu[propiedad]}</p>
      </div>
      <div className={styles.counterContainer}>
        <div className={styles.spanContainer}>
          <span>{cantidad.num}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => {
              setCantidad({
                num: cantidad.num + 1,
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setCantidad({
                num: cantidad.num - 1,
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuBox;
