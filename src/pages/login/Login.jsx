import "./login.css"
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div className="login">
            <pan className="loginTitle">Login</pan>
            <form action="" className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Email" />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link className="Link" to="/register">REGISTER</Link></button>
        </div>
    )
}

