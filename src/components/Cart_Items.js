import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    }
  }

  substract() {
    if (this.state.counter > 1) {
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

      <div class="carrito__item">

        <div class="columna-1">

          <div class="columna-1-grupo1">
            <div class="item-img">
              <img src={this.props.image} alt=""/>
            </div>
          </div>

          <div class="columna-1-grupo2">
            <div class="item-descripcion">
              <h3>{this.props.name}</h3>
              <span>{this.props.description}</span>
            </div>

            <div class="item-acciones">
              <ul>
                <li><a href="/#">Eliminar</a></li>
                <li><a href="/#">Comprar ahora</a></li>
                <li><a href="/#">Guardar en favoritos</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div class="columna-2">

          <div class="columna-2-grupo1">
            <div class="item-cantidad">
              <button onClick={this.substract.bind(this)} type="button" name="button">
              -
              </button>

              <input type="text" name="" value={this.state.counter}/>

              <button onClick={this.add.bind(this)} type="button" name="button">
              +
              </button>
            </div>

            <div class="item-precio">
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
