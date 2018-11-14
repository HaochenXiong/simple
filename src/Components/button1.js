import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class ButtonOne extends Component {
    state = {}
     render() {
        return (
            <div class="ButtonOne">
            <Button bsSize="large" onClick={this.props.buttonPressed} >Increments</Button>
            </div>
        );
    }
}

export default ButtonOne;
