import React from 'react';

class Counter extends React.Component {
  constructor(stock, initial) {
    super();
    this.state = {counter: 1}
  }
  substract() {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter -1
      });
    }
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
