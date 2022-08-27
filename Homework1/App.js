import React, { Component } from 'react';

let deactivateButton = 0;

function consoleCounter(counter){
  console.log(counter);
}

class B extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true
    };
  }
  
}

class A extends B {

  render() {
    return (
      <div>
        <button onClick = { this.IncrementButton } >+</button>
        <button onClick = { this.DeactivateButtons } >Deactivate buttons</button>
        <button onClick = { this.DecreaseButton } >-</button>
        { this.state.show ? <h2>{ this.state.counter }</h2> : '' }
      </div>
    );
  }

  IncrementButton = () => {
    if((this.state.counter < 10) && (deactivateButton === 0)){
    this.setState({ counter: this.state.counter + 1 });
    consoleCounter(this.state.counter+1);
    }
  }
  DecreaseButton = () => {
    if((this.state.counter > 0) && (deactivateButton === 0)){
    this.setState({ counter: this.state.counter - 1 });
    consoleCounter(this.state.counter-1);
    }
  }
  DeactivateButtons = () => {
    if(deactivateButton === 0){
      deactivateButton++;
    }
    else{
      deactivateButton--;
    }
  }

}

export default A;