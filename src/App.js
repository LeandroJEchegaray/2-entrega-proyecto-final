
import './App.css';
import ListItems from './components/Item/ListItems'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailContainer from './components/Item/DetailContainer';
import Home from '../src/routes/Home';
import Cart from './routes/Cart';



function App() {
  return (
    
    <div className="App">
    
    <BrowserRouter>
    < NavBar />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Games' element={<ListItems/>}/>
      <Route path='/Detail/:id' element={<DetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
    
    
    
    </div>

  );
}

export default App;
