import styles from "./MenuBox.module.css";

const MenuBox = (props) => {
    const menu = props;
    const propiedad = Object.keys(menu)[0];
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>{propiedad.toUpperCase()}</h1>
                <p className={styles.description}>{menu[propiedad]}</p>
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