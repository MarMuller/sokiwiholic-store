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

// let itemList=[];
//
// for (var item of items) {
//   itemList.push(
//     <Item image={item.image} name={item.name} description={item.description} stock={item.stock} initial={item.initial} price={item.price}/>
//   )
// }


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
