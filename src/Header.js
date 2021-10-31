import React from 'react';

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
      <h2>{this.props.nombre} {this.props.apellido}</h2>
      </>
    )
  }
}

export default Header;
