import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resCard }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resCard;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={RESTAURANT_IMAGE_URL+ cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " star"}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
