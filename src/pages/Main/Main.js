import React, { Component } from 'react';
import './Main.css';

import Ingredients from './../../components/Ingredients/Ingredients';
import Modal from './../../common/Modal/Modal';
import { camelize } from './../../utility';

class Main extends Component {
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            patty: 0,
            salad: 0
        },
        showOrder: false
    }

    // for adding ingredients
    addHandler = (ingredient) => {
        let changedIngredient = ingredient.toLowerCase();
        let newIngredients = this.state.ingredients;
        newIngredients[changedIngredient] = newIngredients[changedIngredient] + 1;
        this.setState({
            ingredients: newIngredients
        })
    }
    // for removing ingredients
    removeHandler = (ingredient) => {
        let changedIngredient = ingredient.toLowerCase();
        let newIngredients = this.state.ingredients;
        if (this.state.ingredients[changedIngredient] !== 0) {
            newIngredients[changedIngredient] = newIngredients[changedIngredient] - 1;
            this.setState({
                ingredients: newIngredients
            })
        }
    }

    // event handlor for order now
    orderClickHandler = () => {
        this.setState({
            showOrder: true
        })
    }

    render() {
        let ingredientsName = Object.keys(this.state.ingredients);
        let ingredients = ingredientsName.map(ingredient => {
            return (
                <Ingredients
                    name={camelize(ingredient)}
                    add={this.addHandler}
                    remove={this.removeHandler}
                    key={ingredient}
                    value={this.state.ingredients[ingredient]} />
            )
        })
        let order = ingredientsName.map(ingredient => {
            return (
                <p key={ingredient}>{camelize(ingredient)} : {this.state.ingredients[ingredient]}</p>
            )
        })
        let orders = <div>{order}</div>

        return (
            <div>
                <div className='NavHeader'>
                    Build My Burger
                </div>
                <div className='BurgerBody'>
                    My burger will be shown here
                </div>
                <div className='IngredientsContainer'>
                    {ingredients}
                </div>
                <div className='Footer'>
                    <button onClick={this.orderClickHandler}>Order Now</button>
                </div>
                {
                    this.state.showOrder ?
                        <Modal
                            title='Your Order'
                            content={orders} /> :
                        null
                }
            </div>
        )
    }
}

export default Main;