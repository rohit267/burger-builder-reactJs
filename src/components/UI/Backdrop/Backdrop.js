import React from "react"
import classMe from "./Backdrop.module.css"
const backdrop=(props)=>(
    props.show ? <div onClick={props.clicked} className={classMe.Backdrop}></div>: null
);

export default backdrop;