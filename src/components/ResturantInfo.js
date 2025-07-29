import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResturantInfo = ()=>{
    useEffect(()=>{
        fetchMenu();
    },[])
    const [resInfo, setResInfo] = useState(null)

    const {id} = useParams()

    const fetchMenu = async()=>{
        let fetchData = await fetch( MENU_API + id)
        let json =await fetchData.json();
        setResInfo(json.data)
    }

    let itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
     

    return resInfo===null?<Shimmer/>:(
        <div className="resInfo">
            <div className="res-details">
                <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
                <h3>MENU</h3>
            </div>
            <div className="resMenu">
                <div>
                    {itemCards.map((item)=> <li key = {item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
                </div>
            </div>
        </div>
    )
} 


export default ResturantInfo;