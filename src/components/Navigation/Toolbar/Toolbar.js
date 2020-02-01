import React from "react"
import css from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import ToggleMenu from "../../Navigation/NavigationItems/NavigationItem/ToggleMenu"

const toolbar=(props)=>(
    <header className={css.Toolbar}>
        <ToggleMenu openMenu={props.openMenu} />
        <Logo height="80%" />
        <nav className={css.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
)

export default toolbar;