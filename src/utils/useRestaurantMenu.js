import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

// This is a CustomHook
const useRestaurantsMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState(null);

  // If the dependency array is empty [] => useEffect is called only during the initial rendering.
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(MENU_URL + resId);

    const menuData = await data.json();
    setResMenuInfo(menuData);
  };

  return resMenuInfo;
};

export default useRestaurantsMenu;
