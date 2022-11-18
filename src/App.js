
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailContainer from './components/Item/DetailContainer';
import Home from '../src/routes/Home';
import Cart from './routes/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import Footer from './components/Footer'
import {CartProvider} from './context/CartContext';
import ItemListContainerSun from './components/ItemListContainerSun';
import ItemListContainerGlasses from './components/ItemListContainerGlasses';
import ItemListContainerAll from './components/ItemListContainerAll'
function App() {
  return (
    
    <div className="App">
    
    <BrowserRouter>
    <CartProvider>

    < NavBar />

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Products' element={<ItemListContainerAll/>}/>
    <Route path='/Products/Sun' element={<ItemListContainerSun/>}/>
    <Route path='/Products/Glasses' element={<ItemListContainerGlasses/>}/>
      <Route path='/Detail/:id' element={<DetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>

    </CartProvider>
  </BrowserRouter>
  <Footer/>
    
    
    
    </div>

  );
}

export default App;
