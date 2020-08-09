import React, { Component } from 'react';

import Backdrop from './../Backdrop/Backdrop';
import './Modal.css';


// For creating modal
class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            address: '',
        }
    }

    hideModal = (event) => {
        event.preventDefault();
        if (event.target.name === 'place') {
            if ((this.state.name) && (this.state.number) && (this.state.address)) {
                alert('Your order has been successfully placed...')

                this.props.backToBurger();
            }
            else {
                alert('Please fill details before placing order');
            }
        }
        else {
            alert('Your order has been cancelled!!!')
            this.props.backToBurger();
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Backdrop />
                <div className='modal'>
                    <h1>{this.props.title}</h1>
                    {this.props.content}

                    <h2>Please add your delivery details here.</h2>
                    <p><input type='text' onChange={this.handleChange} name='name' placeholder='Enter your name (minimum 4 letters)' style={{ width: '300px', padding: '10px', border: '1px solid lightgray' }} /></p>
                    <p><input type='text' onChange={this.handleChange} name='number' placeholder='Enter your number (10 digits)' style={{ width: '300px', padding: '10px', border: '1px solid lightgray' }} /></p>
                    <p><textarea onChange={this.handleChange} name='address' placeholder='Enter your address' style={{ width: '300px', height: '100px', padding: '10px' }}></textarea></p>
                    <button onClick={this.hideModal} name='place'>Place Order</button>
                    <span style={{ padding: '0 15px' }}></span>
                    <button onClick={this.hideModal} name='cancel'>Cancel Order</button>
                    <div style={{ height: '20px' }}></div>
                </div>
            </div >
        )
    }
}

export default Modal;