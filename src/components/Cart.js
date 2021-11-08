import React from 'react';
import Item from './Cart_Items';
import '../styles/main-styles.css';
import '../styles/cart-style.css';


class Cart extends React.Component {
  render() {
    return (
      <>

        <div id="componente__carrito">
          <Item image="" name="Zapatos rojos" description="Lorem ipsum dolor" stock="1" initial="1" price="1000"/>
          <Item image="" name="Vestido azul" description="Lorem ipsum dolor" stock="2" initial="2" price="1500"/>
          <Item image="" name="Anteojos de sol" description="Lorem ipsum dolor" stock="1" initial="3" price="300"/>
          <Item image="" name="Stickers" description="Lorem ipsum dolor" stock="20" initial="4" price="25"/>
        </div>

      </>
    )
  }
}

export default Cart;
