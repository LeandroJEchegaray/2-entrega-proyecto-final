
import './App.css';
import ListItems from './components/Item/ListItems'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailContainer from './components/Item/DetailContainer';
import Home from '../src/routes/Home';
import Cart from './routes/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import Footer from './components/Footer'
import {CartProvider} from './context/CartContext';


function App() {
  return (
    
    <div className="App">
    
    <BrowserRouter>
    <CartProvider>

    < NavBar />

    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<ListItems/>}/>
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
