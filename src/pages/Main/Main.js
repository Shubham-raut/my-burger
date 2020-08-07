import React, { Component } from 'react';
import './Main.css';

import Ingredients from './../../components/Ingredients/Ingredients';

class Main extends Component {
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            patty: 0,
            salad: 0
        }
    }

    addCheeseHandler = () => {
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                cheese: this.state.ingredients.cheese + 1
            }
        })
    }

    addMeatHandler = () => {
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                meat: this.state.ingredients.meat + 1
            }
        })
    }

    addpattyHandler = () => {
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                patty: this.state.ingredients.patty + 1
            }
        })
    }

    addSaladHandler = () => {
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                salad: this.state.ingredients.salad + 1
            }
        })
    }

    removeCheeseHandler = () => {
        this.state.ingredients.cheese !== 0 &&
            this.setState({
                ingredients: {
                    ...this.state.ingredients,
                    cheese: this.state.ingredients.cheese - 1
                }
            })
    }

    removeMeatHandler = () => {
        this.state.ingredients.meat !== 0 &&
            this.setState({
                ingredients: {
                    ...this.state.ingredients,
                    meat: this.state.ingredients.meat - 1
                }
            })
    }

    removepattyHandler = () => {
        this.state.ingredients.patty !== 0 &&
            this.setState({
                ingredients: {
                    ...this.state.ingredients,
                    patty: this.state.ingredients.patty - 1
                }
            })
    }

    removeSaladHandler = () => {
        this.state.ingredients.salad !== 0 &&
            this.setState({
                ingredients: {
                    ...this.state.ingredients,
                    salad: this.state.ingredients.salad - 1
                }
            })
    }

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
                    <Ingredients name='Cheese' value={this.state.ingredients.cheese} add={this.addCheeseHandler} remove={this.removeCheeseHandler} />
                    <Ingredients name='Meat' value={this.state.ingredients.meat} add={this.addMeatHandler} remove={this.removeMeatHandler} />
                    <Ingredients name='Patty' value={this.state.ingredients.patty} add={this.addpattyHandler} remove={this.removepattyHandler} />
                    <Ingredients name='Salad' value={this.state.ingredients.salad} add={this.addSaladHandler} remove={this.removeSaladHandler} />
                </div>
                <div className='Footer'>
                    <button>Order Now</button>
                </div>
            </div>
        )
    }
}

export default Main;