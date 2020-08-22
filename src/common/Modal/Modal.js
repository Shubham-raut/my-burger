import React, { Component } from 'react';

import Backdrop from './../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {

    render() {
        return (
            <div>
                <Backdrop />
                <div className='modal'>
                    <h1>{this.props.title}</h1>
                    {this.props.content}
                </div>
            </div >
        )
    }
}

export default Modal;