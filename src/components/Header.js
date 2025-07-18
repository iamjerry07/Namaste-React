import { LOGO_IMAGE } from "../utils/constants";
import {useState} from "react"

const Header = () => {
    
    const [logName , setLogName] = useState("Login")
    return (
        
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMAGE} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{
                        logName === "Login"? setLogName("Logout"):setLogName("Login")
                    }}>{logName}</button></li>
                </ul>
                {/* {console.log(logName)} */}
            </div>
        </div>
    )
}


export default Header;