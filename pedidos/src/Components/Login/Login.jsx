import styles from "./Login.module.css"
import logo from "../../Assets/logo.jpg"
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
            <button className={styles.button}>Ingresar</button>
        </div>

    )
}
export default Login;



