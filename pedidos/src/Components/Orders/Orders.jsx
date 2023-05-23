import styles from "./Orders.module.css";
import MenuBox from "../MenuBox/MenuBox";
import { useParams } from "react-router-dom";
import week from "../../Data Base Fake/week.js";

const Orders = () => {
    const day = useParams();
    const dayLowerCase = day.id.toLocaleLowerCase();
    return (
        <div className={styles.container}>
            <h1 className={styles.day}>{day.id}</h1>
            <div>
                <MenuBox clasico={week[dayLowerCase].clasico} />
                <MenuBox sinHarina={week[dayLowerCase].sinHarina} />
                <MenuBox vegetariano={week[dayLowerCase].vegetariano} />
                <MenuBox dieta={week[dayLowerCase].dieta} />
            </div>
        </div>
    )
}
export default Orders;