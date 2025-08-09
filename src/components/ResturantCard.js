import {RES_IMAGE} from "../utils/constants"

const ResturantCard = (props) => {
    const { data } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = data.info
    return (
        <div className="w-[300px] h-[550px] p-[10px] m-[20px] border-3 border-orange-300 bg-orange-100 rounded-3xl">
            <img className="res-logo rounded-3xl" alt="res-logo" src={RES_IMAGE + cloudinaryImageId} />
            <h3 className="text-2xl font-bold text-orange-700">{name}</h3>
            <h4 className="cuisine my-[9px] font-medium" >{cuisines.join(", ")}</h4>
            <h4 className="eta my-[5px]">{data.info.sla.deliveryTime} minutes</h4>
            <h4 className="rating my-[5px]">{avgRating} stars</h4>
            <h4 className="cost my-[5px]">{costForTwo} </h4>
        </div>
    )
}

export default ResturantCard;