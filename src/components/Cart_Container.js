import React from 'react';
import Item from './Cart_Items';
import {items} from '../data/items_data';
import '../styles/main-styles.css';
import '../styles/cart-style.css';

var dataOK = true;
console.log(dataOK);

//Creamos lista de artículos
let itemList = items.map((item, i) => {
  return (
    <Item key={i} image={item.image} name={item.name} description={item.description} stock={item.stock} initial={item.initial}  price={item.price}/>
  )
});

let cargarData = () => {
  return new Promise ((resolve, reject) => {
    if (dataOK) {
        setTimeout(() => {
            resolve(itemList)
        }, 2000)
    } else {
        reject("No hay data.")
    }
  })
}

let fetchingData = async () => {
    try {
        const result = await cargarData();
        console.log(result);
    } catch(err) {
        console.log(err)
    }
}

fetchingData();


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
