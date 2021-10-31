import React from 'react';
import './styles/reset-styles.css';
import './styles/nav-style.css';
import logo from './images/my-logo.svg';

// function Header(props) {
//   return (
//     <>
//
//     <h2>{props.nombre} {props.apellido}</h2>
//
//     </>
//   );
// }

class Header extends React.Component {
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
              <a class="" href="index.html#block__sobremi">sobre mí</a>
              <a class="" href="illustration.html">ilustración</a>
              <a class="" href="graphic-design.html">diseño grafico</a>
              <a class="" href="web-coding.html">web coding</a>
              <a class="" href="index.html#block__contacto">contacto</a>
            </div>
          </div>

        </nav>

      </>
    )
  }
}

export default Header;
