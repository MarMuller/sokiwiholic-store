import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0}
  }
  substract() {
    this.setState({
      counter: this.state.counter -1
    });
  }
  add() {
    this.setState({
      counter: this.state.counter +1
    });
  }
  render() {
    return (
      <div class="item-cantidad">
        <button onClick={this.substract.bind(this)} type="button" name="button">
        -
        </button>
        <input type="text" name="" value={this.state.counter}/>
        <button onClick={this.add.bind(this)} type="button" name="button">
        +
        </button>
      </div>
    );
  }
}

export default Counter;
