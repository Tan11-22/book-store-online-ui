import React, {useEffect, useState} from 'react'
import GioHang from '../../components/GioHang/GioHang'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


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
  const [refresh, setRefresh] = useState(false)

    const handleRefreshGH = () => {
        setRefresh(!refresh)
    }
  return (
    <div>
       <Navbar refresh={refresh}/>
       <GioHang refresh={handleRefreshGH}/>
       <Footer/>
    </div>
  )
}

export default ChiTietGioHang
