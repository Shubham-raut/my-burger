import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.remove}>-</button>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default Ingredients;