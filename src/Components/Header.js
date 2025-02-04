import appLogo from "../assets/appLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderLayout = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();


  // If the dependency array parameter is not given then => useEffect is called after every Component rendering.
  // If the dependency array is empty [] => useEffect is called only during the initial rendering.
  // If the dependency array is given [searchText] => useEffect is caled only when the state of the dependencies changes.
  return (
    <div className="header">
      <img src={appLogo} className="logo" />
      <div className="nav-items">
        <ul>
          <li>
             Online Status:{onlineStatus?"🟢":"🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            {/* If you click on the link on UI it will refresh the entire page. Go to inspect for better understanding */}
            <a href="/aboutUs">About Us</a>
          </li>
          <li>
            {/* The Link in react-router-dom is a React component.
             It is used to create navigable links in a React application,
             allowing users to move between different routes without reloading the page.
             */}
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              //Whole HeaderLayout component renders when clicked on but,
              //But React used Diff/ Reconsiliation alogo/ React Fiber algo to find the differences b/w old & new VirtualDOM and
              //renders only that component/element
              // VirtualDOM => It is the object represntation of a JSX.
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLayout;
