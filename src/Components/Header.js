import appLogo from "../assets/appLogo.png";
import { useState } from "react";

const HeaderLayout = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <img src={appLogo} className="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
