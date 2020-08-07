import React, { Component } from 'react';
import './Main.css';

import Ingredients from './../../components/Ingredients/Ingredients';

class Main extends Component {
    render() {
        return (
            <div>
                <div className='NavHeader'>
                    Build My Burger
                </div>
                <div className='BurgerBody'>
                    My burger will be shown here
                </div>
                <div className='IngredientsContainer'>
                    <Ingredients name='Cheese' />
                    <Ingredients name='Meat' />
                    <Ingredients name='Patty' />
                    <Ingredients name='Salad' />
                </div>
                <div className='Footer'>
                    <button>Order Now</button>
                </div>
            </div>
        )
    }
}

export default Main;