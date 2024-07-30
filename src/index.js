import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SachOverview from './pages/SachOverView/SachOverview';
import ChiTietGioHang from './pages/GioHang/ChiTietGioHang';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import SearchPage from './pages/SearchPage/SearchPage';



export default function BookStore() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>} />
          <Route path="trang-chu" element={<Home/>} /> 

          <Route path="login" element={<Login/>} /> 
          <Route path="sach/:isbn" element={<SachOverview/>} /> 
          <Route path="gio-hang" element={<ChiTietGioHang/>} /> 
          <Route path="tim-kiem" element={<SearchPage/>} /> 


          <Route path="admin" element={<Admin/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BookStore/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
