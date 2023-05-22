import styles from "./MenuBox.module.css";

const MenuBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Clase</h1>
                <p className={styles.description}>Descripcion del menu</p>
            </div>
            <div className={styles.counterContainer}>
                <div className={styles.spanContainer}>
                    <span>0</span>
                </div>
                <div className={styles.buttonsContainer}>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}
export default MenuBox; 