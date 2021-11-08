import React from 'react';
import Counter from './Cart_Counter';

function Item(props) {
  return (
    <>

    <div class="carrito__item">

      <div class="columna-1">

        <div class="columna-1-grupo1">
          <div class="item-img">
            <img src={props.image} alt=""/>
          </div>
        </div>

        <div class="columna-1-grupo2">
          <div class="item-descripcion">
            <h3>{props.name}</h3>
            <span>{props.description}</span>
          </div>

          <div class="item-acciones">
            <ul>
              <li><a href="#">Eliminar</a></li>
              <li><a href="#">Comprar ahora</a></li>
              <li><a href="#">Guardar en favoritos</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div class="columna-2">

        <div class="columna-2-grupo1">
          <Counter/>

          <div class="item-precio">
            <span>${props.price}</span>
          </div>
        </div>

      </div>

    </div>

    </>
  );
}

export default Item;
