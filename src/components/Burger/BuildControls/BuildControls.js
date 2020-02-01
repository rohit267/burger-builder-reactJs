import React from 'react';
import myClass from "./BuildControls.module.css"
import BuildControl from './BuildControl/BuildControl'
const controls=[
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'}
];

const buildControls =(props)=>(
    <div className={myClass.BuildControls}>
        <p>Current Price: Rs. <strong>{props.price}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl
                removed={()=>props.ingRemoved(ctrl.type)}
                added={()=>props.ingAdded(ctrl.type)}
                key={ctrl.label} 
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]} 
                 />
        ))}
        <button 
        onClick={props.ordered}
        disabled={!props.purchasable} 
        className={myClass.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;