import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route, Navigate } from 'react-router-dom';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/order' element={<Order />} />
        <Route path='/manage' element={<Inventory />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
