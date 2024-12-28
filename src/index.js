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
import DonNhapSach from './pages/Admin/DonNhapSach';
import InfoKhachHang from './pages/InfoPage/InfoKhachHang';
import DonMuaSach from './pages/InfoPage/DonMuaSach';
import GiaSach from './pages/Admin/GiaSach';
import PhieuNhap from './pages/Admin/PhieuNhap';
import ReturnPay from './components/Payment/ReturnPay';
import DoanhThu from './pages/Admin/DoanhThu';
import InforNV from './pages/Admin/InforNV';
import PageSachBanChay from './pages/Home/PageSachBanChay';
import LoginGoogle from './components/Login/LoginGoogle';
import { GoogleOAuthProvider } from '@react-oauth/google';
import BinhLuan from './components/BinhLuan/BinhLuan';
import SearchPage1 from './pages/SearchPage/SearchPage1';
import QTTacGiaPage from './pages/Admin/QTTacGiaPage';
import QTTheLoaiPage from './pages/Admin/QTTheLoaiPage';
import QTTaiKhoan from './pages/Admin/QTTaiKhoan';
import QTDonMuaSach from './pages/Admin/QTDonMuaSach';

export default function BookStore() {
  return (
    // <GoogleOAuthProvider clientId="297319601965-77pm74id8oauprunnq5l20o75nqioojv.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>} />
          <Route path="trang-chu" element={<Home/>} /> 

          <Route path="login" element={<Login/>} /> 
          <Route path="oauth2/callback/google" element={<LoginGoogle/>} /> 
          <Route path="test" element={<BinhLuan/>} /> 
          <Route path="tim-kiem" element={<SearchPage1/>} /> 
          {/* <Route path="tim-kiem" element={<SearchPage/>} />  */}
          <Route path="sach/:isbn" element={<SachOverview/>} /> 
          <Route path="gio-hang" element={<ChiTietGioHang/>} /> 
 
          <Route path="top-sach-ban-chay" element={<PageSachBanChay/>} /> 
          <Route path="thong-tin" element={<InfoKhachHang/>}/>
          <Route path="don-mua-sach" element={<DonMuaSach/>}/>
          <Route path="pay-return" element={<ReturnPay/>}/>

          <Route path="admin" element={<Admin/>} /> 
          <Route path="admin/don-nhap" element={<DonNhapSach/>} /> 
          <Route path="admin/don-mua" element={<QTDonMuaSach/>} /> 
          <Route path="admin/gia-sach" element={<GiaSach/>} /> 
          <Route path="admin/phieu-nhap" element={<PhieuNhap/>} /> 
          <Route path="admin/doanh-thu" element={<DoanhThu/>} /> 
          <Route path="admin/thong-tin" element={<InforNV/>} /> 
          <Route path="admin/tac-gia" element={<QTTacGiaPage/>} /> 
          <Route path="admin/the-loai" element={<QTTheLoaiPage/>} /> 
          <Route path="admin/tai-khoan" element={<QTTaiKhoan/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    // </GoogleOAuthProvider>
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
