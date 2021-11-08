import React from 'react';
import Item from './Cart_Items';
import '../styles/main-styles.css';
import '../styles/cart-style.css';

let items=[
{key:"1", image:"", name:"Zapatos rojos", description:"Lorem ipsum dolor", stock:"2", initial:"1", price:"1000"},
{key:"2", image:"", name:"Vestido azul", description:"Lorem ipsum dolor", stock:"5", initial:"1", price:"1500"},
{key:"3", image:"", name:"Anteojos de sol", description:"Lorem ipsum dolor", stock:"1", initial:"1", price:"300"},
{key:"4", image:"", name:"Stickers", description:"Lorem ipsum dolor", stock:"20", initial:"1", price:"25"}
];

let itemList=[];

for (var item of items) {
  itemList.push(
    <Item key={item.key} image={item.image} name={item.name} description={item.description} stock={item.stock} initial={item.initial} price={item.price}/>
  )
}


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
