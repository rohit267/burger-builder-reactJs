import React from "react"
import Myclass from "./BuildControl.module.css";
const buildControl=(props)=>(
    <div className={Myclass.BuildControl}>
        <div className={Myclass.Label}>{props.label}</div>
        <button disabled={props.disabled} className={Myclass.Less} onClick={props.removed}>Less</button>
        <button  className={Myclass.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;