import styles from "./DayNavBar.module.css";
import { Link } from "react-router-dom";

const DayNavBar = () => {
    return (
        <div className={styles.container}>
            <button>Lunes</button>
            <button>Martes</button>
            <button>Miercoles</button>
            <button>Jueves</button>
            <button>Viernes</button>
        </div>
    )
}
export default DayNavBar;