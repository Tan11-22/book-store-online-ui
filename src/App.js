import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ChiTietSach from './components/ChiTietSach/ChiTietSach';
import CardSach from './components/CardSach/CardSach';
import GioHang from './components/GioHang/GioHang';
import Home from './pages/Home/Home';
function App() {
  return (
    <div >
      <Navbar/>   
      <Home/>
       <ChiTietSach/>
      <GioHang/>
    </div>
  );
}

export default App;
