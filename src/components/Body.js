import ResturantCard from "./ResturantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    let [restaurants,setResturants] = useState(restaurantsList)
    return (
        <div className="body">
            <div className="top-rated-button">
                <button className="top-rated" 
                onClick={()=>{  
                    let filterRes = restaurants.filter(restaurants=>restaurants.info.avgRating>4.4)
                    setResturants(filterRes)
                    console.log(filterRes)
                    }}>
                    Top Rated
                </button>
                </div>
            <div className="res-container">
                {
                    restaurants.map(restaurants => <ResturantCard key={restaurants.info.id} data={restaurants} />)
                }
            </div>
        </div>
    )
}

export default Body;