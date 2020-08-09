import React, { Component } from 'react';
import './Main.css';

import Ingredients from './../../components/Ingredients/Ingredients';
import Modal from './../../common/Modal/Modal';
import { camelize } from './../../utility';
import Axios from 'axios';

class Main extends Component {
    state = {
        ingredients: null,
        showOrder: false,
        orderStatus: ''
    }

    componentDidMount() {
        Axios.get('https://buildmyburger-f1671.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                })
            })
            .catch(error => { console.log(error) });
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
        const val = Object.values(this.state.ingredients);
        val.some(a => a > 0) ?
            this.setState({ showOrder: true }) :
            alert('Please add some ingredients before ordering!!!');
    }
    atBurger = () => {
        this.setState({ showOrder: false })
    }

    render() {
        let orders = null;
        let ingredients = null;

        if (this.state.ingredients !== null) {
            let ingredientsName = Object.keys(this.state.ingredients);
            ingredients = ingredientsName.map(ingredient => {
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
            orders = <div>{order}</div>
        }

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
                            content={orders}
                            backToBurger={this.atBurger} /> :
                        null
                }

            </div>
        )
    }
}

export default Main;