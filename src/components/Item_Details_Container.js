import React from 'react';
import ItemDetails from './Item_Details';
import '../styles/main-styles.css';
import '../styles/item-details-style.css';

let itemSelected = {image:"", name:"Zapatos rojos", description:"Lorem ipsum dolor", stock:"2", initial:"1", price:"1000"};


class ItemDetailsContainer extends React.Component {
  render() {
    return (
      <>

        <div id="componente__item-detalle">

          <ItemDetails image={itemSelected.image} name={itemSelected.name} description={itemSelected.description} stock={itemSelected.stock} initial={itemSelected.initial}  price={itemSelected.price}/>

        </div>

      </>
    )
  }
}

export default ItemDetailsContainer;
