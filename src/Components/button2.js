import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class ButtonTwo extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="ButtonTwo">
             <Button bsSize="large" onClick={this.props.buttonPressed} >Decrements</Button>
            </div>
            );
    }
}
 
export default ButtonTwo;