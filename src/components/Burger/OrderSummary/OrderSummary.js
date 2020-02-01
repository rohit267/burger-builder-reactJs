import React from "react";
import Button from "../../UI/Button/Button"

const orderSummary=(props)=>{
    const ingSum=Object.keys(props.ing)
    .map(igKey=>{
        return <li key={igKey}><span style={{textTransform: 'capatalize'}}>{igKey}</span>: {props.ing[igKey]}</li>
    });
    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingSum}
            </ul>
    <p>Total Price: <strong>{props.price}</strong></p>
            <p>Continue to Checkout..</p>
            <Button clicked={props.purchseCancel} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchseContinue} btnType="Success">CONTINUE</Button>

        </React.Fragment>
    );
};

export default orderSummary;