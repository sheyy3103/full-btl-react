import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Page/Home/Home';
import Shop from './components/Page/Shop/Shop';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Cart from './components/Page/Cart/Cart';
import Detail from './components/Page/Detail/Detail';
import Login from './components/Page/Users/Login/Login';
import Register from './components/Page/Users/Register/Register';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<DefaultLayout children={<Home />} />} />
        <Route path="shop" element={<DefaultLayout children={<Shop />} />} />
        <Route path="cart" element={<DefaultLayout children={<Cart />} />} />
        <Route path="detail/:id" element={<DefaultLayout children={<Detail />} />} />
        <Route path="login" element={<DefaultLayout children={<Login />} />} />
        <Route path="register" element={<DefaultLayout children={<Register />} />} />
      </Routes>
    </div>
  );
}

export default App;
