import styles from "./Orders.module.css";
import MenuBox from "../MenuBox/MenuBox";
import { useParams } from "react-router-dom";
import week from "../../Data Base Fake/week.js";

const Orders = (props) => {
  const { pedido, setPedido } = props;
  const dayLocate = useParams();
  const day = dayLocate.id.toLocaleLowerCase();;
  const clasico = week[day].clasico;
  const sinHarina = week[day].sinHarina;
  const vegetariano = week[day].vegetariano;
  const dieta = week[day].dieta;



  return (
    <div className={styles.container}>
      <h1 className={styles.day}>{dayLocate.id}</h1>
      <div>
        <MenuBox day={day} menu={"clasico"} description={clasico} pedido={pedido} setPedido={setPedido} />
        <MenuBox day={day} menu={"sinHarina"} description={sinHarina} pedido={pedido} setPedido={setPedido} />
        <MenuBox day={day} menu={"vegetariano"} description={vegetariano} pedido={pedido} setPedido={setPedido} />
        <MenuBox day={day} menu={"dieta"} description={dieta} pedido={pedido} setPedido={setPedido} />
      </div>
    </div>
  );
};
export default Orders;
