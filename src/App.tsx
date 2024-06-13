import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Register from './Components/Register';
import SignIn from './Components/Signin';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Product from './Components/Product';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/landing' element={<Landing />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/product' element={<Product />} />
          <Route path='/profile/*' element={<Profile />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
