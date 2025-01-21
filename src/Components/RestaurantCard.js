const RestaurantCard = ({ resCard }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resCard;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " star"}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
