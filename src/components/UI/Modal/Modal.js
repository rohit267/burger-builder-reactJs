import React from "react";
import m from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"
const modal = (props) => (
    <React.Fragment>
        <Backdrop clicked={props.modalClosed} show={props.show} />
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }} className={m.Modal}>
            {props.children}
        </div>
    </React.Fragment>

);

export default modal;