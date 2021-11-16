import React from 'react';

class Item extends React.Component {

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

      <div className="carrito__item">

        <div className="columna-1">

          <div className="columna-1-grupo1">
            <div className="item-img">
              <img src={this.props.image} alt=""/>
            </div>
            <h3>{this.props.name}</h3>
          </div>

          <div className="columna-1-grupo2">
            <div className="item-precio">
              <span>${this.props.price}</span>
            </div>
          </div>

          <div className="columna-1-grupo3">
            <div className="item-cantidad">
              <button onClick={this.substract.bind(this)} type="button" name="button">
              -
              </button>

              <input type="text" name="" value={this.state.counter} onChange={(event)=>this.inputChangedHandler(event)} />

              <button onClick={this.add.bind(this)} type="button" name="button">
              +
              </button>
            </div>
          </div>

        </div>

      </div>

      </>
    );
  }
}

export default Item;
