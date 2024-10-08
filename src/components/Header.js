import { HEADER_LOGO} from "../utils/constants";
const Header = () => {
    return (
        <div className="header-container">
            <img src={HEADER_LOGO} className="logo" />
            <div className="nav-items">
                <ul className="inline-nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;