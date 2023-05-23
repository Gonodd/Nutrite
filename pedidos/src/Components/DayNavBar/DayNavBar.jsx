import styles from "./DayNavBar.module.css";


const DayNavBar = () => {
    return (
        <div className={styles.container}>
            <button className={styles.buttonDay}>Lun</button>
            <button className={styles.buttonDay}>Mar</button>
            <button className={styles.buttonDay}>Mie</button>
            <button className={styles.buttonDay}>Jue</button>
            <button className={styles.buttonDay}>Vie</button>
            <button className={styles.buttonFinish}>Pedir</button>
        </div>
    )
}
export default DayNavBar;