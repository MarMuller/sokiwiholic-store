import React from 'react';
import ItemDetails from './Item_Details';
import {items} from '../data/items_data';
import '../styles/main-styles.css';
import '../styles/item-details-style.css';


//
var dataOK = true;
let itemSelected = items[1];
// console.log(itemSelected);


const cargarData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(itemSelected)
  }, 2000);
});


class ItemDetailsComp extends React.Component {

  cargarData;

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
