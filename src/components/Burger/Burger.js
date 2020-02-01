import React from "react";
import Myclass from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger=(props)=>{
    let tarnsIng=Object.keys(props.ing).map(igKey=>{
        return [...Array(props.ing[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(tarnsIng.length===0){
        tarnsIng=<p>Please Add Some Layers</p>
    }
    return(
        <div className={Myclass.Burger}>
            <BurgerIngredient type='bread-top'/>
            {tarnsIng}
            <BurgerIngredient type='bread-bottom'/>

        </div>
    );
}

export default burger;