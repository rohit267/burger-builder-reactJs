import React from "react"
import css from "./Logo.module.css"
import burgerLogo from "../../assets/Images/burger-logo.png"
const logo=(props)=>(
    <div className={css.Logo} style={{height: props.height,margin: props.margin}}>
        <img alt="logo" src={burgerLogo}/>
    </div>
)

export default logo