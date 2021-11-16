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
          </div>

          <div className="columna-1-grupo2">
            <div className="item-descripcion">
              <h3>{this.props.name}</h3>
              <span>{this.props.description}</span>
            </div>

            <div className="item-acciones">
              <ul>
                <li><a href="/#">Eliminar</a></li>
                <li><a href="/#">Comprar ahora</a></li>
                <li><a href="/#">Guardar en favoritos</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="columna-2">

          <div className="columna-2-grupo1">
            <div className="item-cantidad">
              <button onClick={this.substract.bind(this)} type="button" name="button">
              -
              </button>

              <input type="text" name="" defaultValue={this.state.counter}/>

              <button onClick={this.add.bind(this)} type="button" name="button">
              +
              </button>
            </div>

            <div className="item-precio">
              <span>${this.props.price}</span>
            </div>
          </div>

        </div>

      </div>

      </>
    );
  }
}

export default Item;
