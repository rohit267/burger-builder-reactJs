import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import csss from "./Sidedrawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
const sideDrawer=(props)=>{
    let attachedClasses =[csss.SideDrawer,csss.Close]
    if(props.open){
        attachedClasses=[csss.SideDrawer,csss.Open]
    }
    return(
        <React.Fragment>
            <Backdrop clicked={props.closed} show ={props.open}/>
            <div className={attachedClasses.join(" ")}>
                <Logo margin="32px" height="10%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
        
    )
}

export default sideDrawer

