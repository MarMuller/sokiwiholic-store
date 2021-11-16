import React from 'react';

class ItemDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    }
  }

  substract() {
    if (this.state.counter > this.props.initial ) {
      this.setState({
        counter: this.state.counter -1
      });
    }
  }

  add() {
    if (this.state.counter < this.props.stock ) {
      this.setState({
        counter: this.state.counter +1
      });
    }
  }

  render() {
    return (
      <>

      <div className="item__details">

        <img src={this.props.image} alt=""/>
        <h3>{this.props.name}</h3>
        <span>{this.props.description}</span>

        <div className="item-cantidad">
          <button onClick={this.substract.bind(this)} type="button" name="button">
          -
          </button>

          <input type="text" name="" defaultValue={this.state.counter}/>

          <button onClick={this.add.bind(this)} type="button" name="button">
          +
          </button>
        </div>

        <span>${this.props.price}</span>

      </div>

      </>
    );
  }
}

export default ItemDetails;
