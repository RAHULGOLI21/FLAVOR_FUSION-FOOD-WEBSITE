import useRestaurantsMenu from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  // useParams is hook given by react-router-dom to read the params
  const { resId } = useParams();


  // To have a code modularity we have created a customHook "useRestaurantsMenu" to fetch the Restaurant's Menu.
  const resMenuInfo = useRestaurantsMenu(resId);
  
  if (resMenuInfo === null) return <ShimmerUI />;
  const { name, cuisines, costForTwoMessage } =
    resMenuInfo?.data?.cards[2]?.card?.card?.info;
  // console.log("menuTe ",  resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards[0].card?.info)

  // const menuItems = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards[0]?.card?.info?.variantsV2?.variantGroups[0]?.variations;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <div>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Mojito</li>
      </div>
    </div>
  );
};

export default RestaurantMenu;
