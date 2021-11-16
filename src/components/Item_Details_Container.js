import React from 'react';
import ItemDetails from './Item_Details';
import {items} from '../data/items_data';
import '../styles/main-styles.css';
import '../styles/item-details-style.css';


let itemSelected = items[0];


class ItemDetailsComp extends React.Component {
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

export default ItemDetailsComp;
