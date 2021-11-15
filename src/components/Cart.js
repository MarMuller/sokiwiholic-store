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

var itemList = items.map(function(item, i) {
  return (
    <Item key={i} image={item.image} name={item.name} description={item.description} stock={item.stock} initial={item.initial}  price={item.price}/>
  )
});

//

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

miPromesa(0, console.log("Order received. Starting miPromesa..."))
    .then(()=>miPromesa(3000, console.log("Artículo 1")))
    .then(()=>miPromesa(2000, console.log("Artículo 2")))
    .then(()=>miPromesa(1000, console.log("Artículo 3")))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("Listo."));

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
