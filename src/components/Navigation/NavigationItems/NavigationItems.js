import React from "react";
import clas from "./NaviItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems=()=>(
    <ul className={clas.NavigationItems}>
        <NavigationItem link="/">Bulder Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default navigationItems