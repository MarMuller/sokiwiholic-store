import React from 'react';

function Btns(props) {
  return (
    <>

    <a class={props.class} href={props.url}>{props.content}</a>

    </>
  );
}

// class Btns extends React.Component {
//   render() {
//     return (
//       <>
//       <a class="" href="index.html#block__sobremi">sobre mí</a>
//       </>
//     )
//   }
// }

export default Btns;
