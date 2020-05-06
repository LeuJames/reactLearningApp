import React, { Component } from 'react';

class SomeClassComponent extends Component {
    render () {
        return (
        <div>
            This is our first class component. 
            <h1>My name is {this.props.firstName} {this.props.lastName}</h1>
        </div>
        );
    }
}

export default SomeClassComponent;
