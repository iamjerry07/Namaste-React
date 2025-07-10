import { LOGO_IMAGE } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMAGE}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;