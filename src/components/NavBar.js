import React from 'react';
import Btns from './NavBar_Btns';
import CartWidget from './Cart_Widget';
import '../styles/main-styles.css';
import '../styles/nav-style.css';
import logo from '../assets/images/my-logo.svg';


class NavBar extends React.Component {
  render() {
    return (
      <>

        <nav>

          <div id="nav__logo">
            <a href="index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>


          <div id="nav__menu" class="myButtons">
            <div class="nav__menu-list">
              <Btns class="" url="#" content="sobre mí"/>
              <Btns class="" url="#" content="ilustración"/>
              <Btns class="" url="#" content="diseño grafico"/>
              <Btns class="" url="#" content="web coding"/>
              <Btns class="" url="#" content="contacto"/>

              <CartWidget class="nav-height-adjustment important-btn" url="#"/>
            
            </div>
          </div>

        </nav>

      </>
    )
  }
}

export default NavBar;