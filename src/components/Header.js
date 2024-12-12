import { useEffect, useState } from "react";
import { HEADER_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [login, setLogout]= useState('Login');
    useEffect(()=>{console.log('In useEffect hook')},[login]) //It just for an practice
    console.log('Header component is rendered')
    
    return (
        <div className="header-container">
            <img src={HEADER_LOGO} className="logo" />
            <div className="nav-items">
                <ul className="inline-nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{login === 'Login' ? setLogout("Logout"): setLogout("Login")}}>{login}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;