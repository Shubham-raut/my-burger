import React, { Component } from 'react';
import './OrderForm.css';
import axios from 'axios';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formElements: {
                name: {
                    type: 'text',
                    value: '',
                    placeholder: 'Enter your name here',
                },
                phone: {
                    type: 'number',
                    value: '',
                    placeholder: 'Enter your number here'
                },
                address: {
                    type: 'textarea',
                    value: '',
                    placeholder: 'Enter the delivery address here',
                    style: { height: '100px' }
                }
            }
        }
    }

    inputHandlor = (event) => {
        let formElements = this.state.formElements;
        formElements[event.target.id].value = event.target.value;
        this.setState({
            formElements: formElements
        })
    }

    placeOrderHandler = () => {
        if (Object.keys(this.state.formElements).every(element => (this.state.formElements[element].value) !== '')) {
            let order = {};
            Object.keys(this.state.formElements).map(element => {
                return (
                    order[element] = this.state.formElements[element].value
                )
            })
            order['order'] = this.props.order;
            axios
                .post('https://buildmyburger-f1671.firebaseio.com/orders.json', order)
                .then(response => { console.log(response) })
                .catch(error => { console.log(error) });
            this.props.placeOrder(true);
        }
        else {
            alert('Fill the details before placing order');
        }
    }

    render() {
        let formElements = Object.keys(this.state.formElements).map(element => {
            let inputElement = this.state.formElements[element];
            return (
                <input
                    type={inputElement.type}
                    value={inputElement.value}
                    placeholder={inputElement.placeholder}
                    key={element}
                    style={inputElement.style}
                    className='InputElement'
                    id={element}
                    onChange={this.inputHandlor} />
            )
        })
        return (
            <div className="OrderForm">
                <h3>Please add your delivery details here.</h3>
                {formElements}
                <div style={{ width: '60%', display: 'flex', justifyContent: "space-between" }}>
                    <button onClick={this.placeOrderHandler}>Place Order</button>
                    <button onClick={this.props.cancelOrder}>Cancel Order</button>
                </div>
            </div>
        );
    }
}

export default OrderForm;