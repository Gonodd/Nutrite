import styles from "./Login.module.css"
import logo from "../../Assets/logo.jpg"
import { Link } from "react-router-dom"



const Login = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt="" className={styles.imgLogo} />
            </div>
            <div className={styles.text}>
                <div>
                    <label>Numero de celular: </label>
                    <input placeholder="Sin 0 y sin 15"></input>
                </div>
                <div>
                    <label>Nombre del cliente </label>
                    <input placeholder="P/ etiqueta identificadora"></input>
                </div>
            </div>
            <button className={styles.button}>
                <Link to={"/orders/Lunes"} className={styles.linkButton}>Ingresar</Link>
            </button>
        </div>
    )
}
export default Login;



