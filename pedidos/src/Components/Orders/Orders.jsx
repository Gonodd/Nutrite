import styles from "./Orders.module.css";
import MenuBox from "../MenuBox/MenuBox";

const Orders = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.day}>Dia</h1>
            <div>
                <MenuBox />
                <MenuBox />
                <MenuBox />
                <MenuBox />
            </div>
        </div>
    )
}
export default Orders;