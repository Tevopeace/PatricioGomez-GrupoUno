import './components/Body/BodyBackground.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import ItemDetail from './Components/ItemDetail/ItemDetail.jsx'
import ProductsCategory from './Components/ProductsCategory/Category.jsx';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
