import { Link } from "react-router-dom";
import styles from "./DayNavBar.module.css";


const DayNavBar = () => {
    return (
        <div className={styles.container}>
            <button className={styles.buttonDay} >
                <Link className={styles.linkButton} to={"/orders/Lunes"} >Lun</Link>
            </button>
            <button className={styles.buttonDay}>
                <Link className={styles.linkButton} to={"/orders/Martes"}>Mar</Link>
            </button>
            <button className={styles.buttonDay}>
                <Link className={styles.linkButton} to={"/orders/Miercoles"}>Mie</Link>
            </button>
            <button className={styles.buttonDay}>
                <Link className={styles.linkButton} to={"/orders/Jueves"}>Jue</Link>
            </button>
            <button className={styles.buttonDay}>
                <Link className={styles.linkButton} to={"/orders/Viernes"}>Vie</Link>
            </button>
            <button className={styles.buttonFinish}><Link className={styles.linkButton} to={"/cart"}>Pedir</Link></button>
        </div>
    )
}
export default DayNavBar;