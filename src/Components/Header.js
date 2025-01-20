import appLogo from "../assets/appLogo.png"

export const HeaderLayout = () => {
    return (
        <div  className="header">
            <img src={appLogo} className="logo"/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
