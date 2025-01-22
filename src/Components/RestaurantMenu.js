import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenuInfo, setResMenuInfo] = useState(null);

  // useParams is hook given by react-router-dom to read the params
  const { resId } = useParams();

  // If the dependency array is empty [] => useEffect is called only during the initial rendering.
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4400802&lng=78.3489168&restaurantId=${resId}`
    );

    const menuData = await data.json();
    setResMenuInfo(menuData);
  };
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
