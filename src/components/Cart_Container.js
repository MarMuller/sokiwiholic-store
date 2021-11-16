import React from 'react';
import Item from './Cart_Items';
import {items} from '../data/items_data';
import '../styles/main-styles.css';
import '../styles/cart-style.css';

//Creamos lista de artículos
let itemList = items.map(function(item, i) {
  return (
    <Item key={i} image={item.image} name={item.name} description={item.description} stock={item.stock} initial={item.initial}  price={item.price}/>
  )
});

//Cart-Promesa
let cart_promise = require ("./Cart_Promise");

cart_promise.cargarData(items)
  .then((response) => {
    setTimeout(() => {
      console.log(response)
    }, 2000);
  })
  .catch((err) => console.log(err));


//Cart
class Cart extends React.Component {
  render() {
    return (
      <>

        <div id="componente__carrito">
          {itemList}
        </div>

      </>
    )
  }
}

export default Cart;
