import React from "react"
import ReactDOM from "react-dom/client"

import { HeaderLayout } from "./Components/Header"
import { Body } from "./Components/Body"

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderLayout/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)