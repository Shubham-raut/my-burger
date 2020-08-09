import React, { Component } from 'react';

import Backdrop from './../Backdrop/Backdrop';


// For creating modal
class Modal extends Component {
    hideModal = () => {
        this.props.backToBurger();
    }

    render() {
        return (
            <div>
                <Backdrop />
                <div className='modal' style={{ height: '300px', textAlign: 'center', position: 'fixed', backgroundColor: '#fff', zIndex: 500, left: '20%', top: '10%', boxSizing: 'border-box', width: '60%' }}>
                    <h1>{this.props.title}</h1>
                    {this.props.content}
                    <p>Thanks for ordering :)</p>
                    <button onClick={this.hideModal} >Back to burger</button>
                </div>
            </div >
        )
    }
}

export default Modal;