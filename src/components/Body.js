import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [search, setSearch] = useState("");
  console.log("rendering");
  useEffect(() => {
    swiggyData();
  }, []);

  const swiggyData = async () => {
    let swiggyData = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.507241&lng=77.06404859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await swiggyData.json();
    console.log(json);
    setResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex mt-[15px]">
        <div className="seach-container">
          <input
            type="text"
            value={search}
            className="search-bar border-1 ml-[30px] mr-[15px] "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button className="border-1 bg-amber-400 px-[10px] py-[5px] rounded-md mr-[20px]"
            onClick={() => {
              let filteredData = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredResturant(filteredData);
            }}
          >
            Submit
          </button>
        </div>
        <div className="top-rated-container">
          <button
            className="top-rated border-1 bg-amber-400 px-[10px] py-[5px] rounded-md mr-[20px]"
            onClick={() => {
              let filterRes = restaurants.filter(
                (restaurants) => restaurants.info.avgRating > 4.4
              );
              setFilteredResturant(filterRes);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/resturants/" + restaurants.info.id}
          >
            <ResturantCard data={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
