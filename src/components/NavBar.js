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


          <div id="nav__menu" className="myButtons">
            <div className="nav__menu-list">
              <Btns className="" url="/#" content="sobre mí"/>
              <Btns className="" url="/#" content="ilustración"/>
              <Btns className="" url="/#" content="diseño grafico"/>
              <Btns className="" url="/#" content="web coding"/>
              <Btns className="" url="/#" content="contacto"/>

              <CartWidget className="nav-height-adjustment important-btn" url="/#"/>

            </div>
          </div>

        </nav>

      </>
    )
  }
}

export default NavBar;
