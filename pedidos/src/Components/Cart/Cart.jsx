import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
    const { pedido } = props;
    let count = 0;

    const print = (day) => {
        let intCount = 0;
        let orderDay = "Se registraron los siguientes pedido para el dia " + day + ": ";
        if (pedido[day].clasico !== 0) {
            orderDay += "Clasico:" + pedido[day].clasico + " | "
            count += pedido[day].clasico;
            intCount += 1;
        };
        if (pedido[day].sinHarina !== 0) {
            orderDay += "Sin Harina:" + pedido[day].sinHarina + " | ";
            count += pedido[day].sinHarina;
            intCount += 1;
        };
        if (pedido[day].vegetariano !== 0) {
            orderDay += "Vegetariano:" + pedido[day].vegetariano + " | ";
            count += pedido[day].vegetariano;
            intCount += 1;
        };
        if (pedido[day].dieta !== 0) {
            orderDay += "Dieta:" + pedido[day].dieta + " | "
            count += pedido[day].dieta;
            intCount += 1;
        };
        if (intCount === 0) orderDay = "No se registran pedidos para el " + day + ".";
        return orderDay;

    }
    return (
        <div className={styles.container}>
            <div className={styles.elementsContainer}>
                <div className={styles.buttonContainer}>
                    <button><Link className={styles.linkButton} to={"/orders/Lunes"}>Volver</Link></button>
                    <button>Cancelar</button>
                </div>
                <div className={styles.dayContainer}>
                    <div className={styles.day}>{print("lunes")}</div>
                    <div className={styles.day}>{print("martes")}</div>
                    <div className={styles.day}>{print("miercoles")}</div>
                    <div className={styles.day}>{print("jueves")}</div>
                    <div className={styles.day}>{print("viernes")}</div>
                </div>
                <div className={styles.total}>
                    <label htmlFor="">Tolal de viandas pedidas:</label>
                    <span>{count}</span>
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    )

}
export default Cart;