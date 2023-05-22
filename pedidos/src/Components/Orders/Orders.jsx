import styles from "./Orders.module.css";
import MenuBox from "../MenuBox/MenuBox";

const Orders = () => {
    return (
        <div className={styles.container}>
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