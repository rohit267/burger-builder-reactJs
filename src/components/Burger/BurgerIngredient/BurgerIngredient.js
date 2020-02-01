import React, { Component } from 'react';
import Myclass from './BurgerIngredient.module.css';
import PropType from 'prop-types';

class BurgerIng extends Component {
    render() {
        let ing = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ing = <div className={Myclass.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ing = (
                    <div className={Myclass.BreadTop}>
                        <div className={Myclass.Seeds1}>
                        </div>
                        <div className={Myclass.Seeds2}>
                        </div>
                    </div>
                );
                break;
            case ('meat'):
                ing = <div className={Myclass.Meat}></div>;
                break;
            case ('cheese'):
                ing = <div className={Myclass.Cheese}></div>;
                break;
            case ('salad'):
                ing = <div className={Myclass.Salad}></div>;
                break;
            case ('bacon'):
                ing = <div className={Myclass.Bacon}></div>;
                break;
            default:
                ing = null;

            

        }
        return ing;

    }
}
BurgerIng.propTypes = {
    type: PropType.string.isRequired
}

export default BurgerIng;