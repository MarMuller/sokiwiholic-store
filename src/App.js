import './styles/App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailsContainer from './components/Item_Details_Container';


function App() {
  return (
    <>

    <NavBar/>

    <div id="content_container">

      <ItemDetailsContainer/>

      <Cart/>

    </div>

    </>
  );
}

export default App;
