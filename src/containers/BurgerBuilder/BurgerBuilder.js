import React, {Component} from "react";
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"


const PRICES={
    salad: 20,
    cheese: 50,
    meat: 80,
    bacon: 20
}
class BurgerBuilder extends Component{
    state = {
        ing: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 40,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler =()=>{
        this.setState({
            purchasing: true
        })
    }

    updatePurchaseState(ings){
        
        const sum=Object.keys(ings)
        .map(igKey=>{
            return ings[igKey];
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0);
        console.log(sum);
        this.setState({
            purchasable: sum > 0
        });
        //console.log(ings);
    }

    addIngHandler=(type)=>{
        const oldCount=this.state.ing[type];
        const updatedCount=oldCount+1;
        const updatedIng={
            ...this.state.ing
        };
        updatedIng[type]=updatedCount;
        const princeAddition=PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+princeAddition;
        this.setState({totalPrice: newPrice,ing: updatedIng})
        this.updatePurchaseState(updatedIng);
    }

    purchaseCancelHandler=()=>{
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler=()=>{
        alert("You Continued the purchase..")
    }

    removeIngHandler=(type)=>{
        const oldCount=this.state.ing[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIng={
            ...this.state.ing
        };
        updatedIng[type]=updatedCount;
        const princeDeduct=PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-princeDeduct;
        this.setState({totalPrice: newPrice,ing: updatedIng})
        this.updatePurchaseState(updatedIng);
    }
    render(){
        const disabledInfo={
            ...this.state.ing
        }
        for( let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
            <React.Fragment>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ing={this.state.ing}
                        purchseContinue={this.purchaseContinueHandler}
                        purchseCancel={this.purchaseCancelHandler}
                    />
                </Modal>
                <Burger ing={this.state.ing}/>
                <BuildControls 
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice} 
                    disabled={disabledInfo} 
                    ingRemoved={this.removeIngHandler} 
                    ingAdded={this.addIngHandler}
                    ordered={this.purchaseHandler}
                />
            </React.Fragment>
        )
    }
}
export default BurgerBuilder;