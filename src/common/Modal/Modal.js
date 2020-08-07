import React, { Component } from 'react';

import Backdrop from './../Backdrop/Backdrop';


// For creating modal
class Modal extends Component {
    render() {
        return (
            <div>
                <Backdrop />
                <div style={{ height: '200px', textAlign: 'center', position: 'fixed', backgroundColor: '#fff', zIndex: 500, left: '15%', top: '10%', boxSizing: 'border-box', width: '70%' }}>
                    <h1>{this.props.title}</h1>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Modal;