import React from "react"
import csss from "./DrawerToggle.module.css"
const toggleDiv=(props)=>(
    <div className={csss.DrawerToggle} onClick={props.openMenu} >
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default toggleDiv