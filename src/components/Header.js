import { LOGO_IMAGE } from "../utils/constants";
import {useState} from "react"
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    
    const [logName , setLogName] = useState("Login")

    const onlineStatus = useonlineStatus()
    return (
        
        <div className="flex justify-between bg-orange-400 p-8">
            <div className="logo-container">
                <Link to = "/"><img className="size-24" src={LOGO_IMAGE} /></Link>
            </div>
            <div className="nav-items p-4">
                <ul className="flex">
                    <li className="p-4 text-xl">Online status: {onlineStatus ? "✅":"❌"}</li>
                    <li className="p-4 text-xl"><Link to = "/">Home</Link></li>
                    <li className="p-4 text-xl"><Link to = "/about">About Us</Link></li>
                    <li className="p-4 text-xl"><Link to = "/contact">Contact Us</Link></li>
                    <li className="p-4 text-xl"><Link to = "/grocery">Grocery</Link></li>
                    <li className="p-4 text-xl">Cart</li>
                    <li className="p-4 text-xl"><button className="login" onClick={()=>{
                        logName === "Login"? setLogName("Logout"):setLogName("Login")
                    }}>{logName}</button></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;