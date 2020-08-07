import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Ingredients;