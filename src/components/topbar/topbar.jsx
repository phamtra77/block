
import "./topbar.css";
import {Link} from "react-router-dom";

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i id="topIcons" class="fab fa-facebook-square"></i>
            <i id="topIcons" class="fab fa-instagram"></i>
            <i id="topIcons" class="fab fa-youtube"></i>
            <i id="topIcons" class="fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="Link" >HOME</Link></li>
                    <li className="topListItem"><Link to="/about" className="Link" >ABOUT</Link></li>
                    <li className="topListItem"><Link to="/contact" className="Link" >CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="Link" >WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                ):(
                    <ul className="topList">
                        <li class="topListItem">
                        <Link className="Link" to="/login">LOGIN</Link>
                        </li>
                        <li class="topListItem">
                        <Link className="Link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i id="topSearchIcon" class="fas fa-search"></i>
            </div>
        </div>
    )
}
