import React, { Component } from 'react';
import './App.css';
import ButtonOne from './Components/button1';
import ButtonTwo from './Components/button2';



class App extends Component {
  constructor(props) {
    super(props);
    this.buttonInClicked = this.buttonInClicked.bind(this);
    this.buttonDeClicked = this.buttonDeClicked.bind(this);
    this.state = {
      count: 0
    };
  }

  buttonInClicked = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  buttonDeClicked = () => {
    this.setState({
      count: this.state.count - 1
    });
}
  
  
  render() {
    return (
      <div>
        <ButtonOne buttonPressed={this.buttonInClicked} />
        <ButtonTwo buttonPressed={this.buttonDeClicked} />
        <p class="Text">{this.state.count}</p>
      </div>
    );
  }
}

export default App;
