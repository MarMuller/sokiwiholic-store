import React from 'react';
import Item from './Cart_Items';
import '../styles/main-styles.css';
import '../styles/cart-style.css';

let items=[
{image:"", name:"Zapatos rojos", description:"Lorem ipsum dolor", stock:"2", initial:"1", price:"1000"},
{image:"", name:"Vestido azul", description:"Lorem ipsum dolor", stock:"5", initial:"1", price:"1500"},
{image:"", name:"Anteojos de sol", description:"Lorem ipsum dolor", stock:"1", initial:"1", price:"300"},
{image:"", name:"Stickers", description:"Lorem ipsum dolor", stock:"20", initial:"1", price:"25"}
];

let itemList = items.map(function(item, i) {
  return (
    <Item key={i} image={item.image} name={item.name} description={item.description} stock={item.stock} initial={item.initial}  price={item.price}/>
  )
});

//miPromesa

let listaOK = true;

let miPromesa = (time, task) => {
    return new Promise((resolve, reject) => {
        if (listaOK) {
            setTimeout( () => {
                resolve(task)
            }, time)
        } else {
            reject("No hay articulos.")
        }
    })
}

miPromesa( 2000, console.log("Creando lista de artículos..."))
    .then( () => miPromesa( 2000, console.log(items) ) )
    .catch( (err) => console.log(err))
    .finally( () => console.log("Lista armada."));

//

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
