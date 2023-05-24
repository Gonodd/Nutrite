import { useLocation, useParams } from "react-router-dom";
import styles from "./MenuBox.module.css";
import { useState } from "react";

const MenuBox = (props) => {
  const { day, menu, description, pedido, setPedido } = props;



  return (

    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{menu.toUpperCase()}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.counterContainer}>
        <div className={styles.spanContainer}>
          <span>{pedido[day][menu]}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => {
              const suma = pedido[day][menu] + 1;
              setPedido({ ...pedido, [day]: { ...pedido[day], [menu]: suma } });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              const resta = pedido[day][menu] - 1;
              setPedido({ ...pedido, [day]: { ...pedido[day], [menu]: resta } });
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
