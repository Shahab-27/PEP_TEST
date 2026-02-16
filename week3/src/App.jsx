import useSearch from "./Search";
import ProductList from "./ProductList";
import './App.css'
import Product from "./Product.jsx";
import Typing from "./Typing.jsx";
import TemperatureConverter from "./TemperatureConverter.jsx";
import FocusTracker from "./FocusTracker.jsx";
function App() {
  return (
    <>
    <Product/><hr />
    <Typing/>
    <hr />
    <TemperatureConverter/>
    <div>
      <br />
      <br />
      <hr />
    </div>
    <FocusTracker/>
    </>
  );
}

export default App;
