import styles from "./DayNavBar.module.css";
import { Link } from "react-router-dom";

const DayNavBar = () => {
    return (
        <div className={styles.container}>
            <button className={styles.buttonDay}>Lunes</button>
            <button className={styles.buttonDay}>Martes</button>
            <button className={styles.buttonDay}>Miercoles</button>
            <button className={styles.buttonDay}>Jueves</button>
            <button className={styles.buttonDay}>Viernes</button>
            <button className={styles.buttonFinish}>Finalizar</button>
        </div>
    )
}
export default DayNavBar;