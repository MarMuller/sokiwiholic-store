import './styles/App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart_Container';
import ItemDetailsComp from './components/Item_Details_Container';


function App() {
  return (
    <>

    <NavBar/>

    <div id="content_container">

      <ItemDetailsComp/>

      <Cart/>

    </div>

    </>
  );
}

export default App;
