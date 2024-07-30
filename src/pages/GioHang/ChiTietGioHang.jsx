import React, {useEffect} from 'react'
import GioHang from '../../components/GioHang/GioHang'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom';


function ChiTietGioHang() {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  useEffect(() => {
    if (role) {
      console.log(role)
      if (role !== 'KHACHHANG') {
        return navigate("/admin");
      } 
    } else {
     return navigate("/login");
    }
  }
    
    ,[]
  )
  
  return (
    <div>
       <Navbar/>
       <GioHang/>
    </div>
  )
}

export default ChiTietGioHang
