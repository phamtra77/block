import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Username" />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Email" />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Password" />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"><Link className="Link" to="/login">LOGIN</Link></button>
    </div>
    )
}
