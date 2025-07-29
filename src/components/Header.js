import { LOGO_IMAGE } from "../utils/constants";
import {useState} from "react"
import { Link } from "react-router-dom";

const Header = () => {
    
    const [logName , setLogName] = useState("Login")
    return (
        
        <div className="header">
            <div className="logo-container">
                <Link to = "/"><img className="logo" src={LOGO_IMAGE} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
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