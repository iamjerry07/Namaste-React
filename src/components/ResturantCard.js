import {RES_IMAGE} from "../utils/constants"

const ResturantCard = (props) => {
    const { data } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = data.info
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={RES_IMAGE + cloudinaryImageId} />
            <h3 className="card-name">{name}</h3>
            <h4 className="cuisine">{cuisines.join(", ")}</h4>
            <h4 className="eta">{data.info.sla.deliveryTime} minutes</h4>
            <h4 className="rating">{avgRating} stars</h4>
            <h4 className="cost">{costForTwo} </h4>
        </div>
    )
}

export default ResturantCard;