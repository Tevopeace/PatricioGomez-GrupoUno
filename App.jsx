import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Products from './Components/Products/Products.jsx';
import ItemDetail from './Components/ItemDetail/ItemDetail.jsx';
import ProductsCategory from './Components/ProductsCategory/Category.jsx';
import Cart from './Components/Cart/Cart'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/category/:categoryId' element={<ProductsCategory />} />
          <Route path='/products/:productId' element={<ItemDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;