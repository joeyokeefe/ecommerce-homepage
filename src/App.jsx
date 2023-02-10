import Nav from "./components/Nav/Nav.jsx"
import Promo from "./components/Promo/Promo.jsx"
import ProductList from "./components/ProductList/ProductList.jsx";
import Footer from "./components/Footers/Footers.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
