import React, { useEffect } from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import QuanTriDonNhap from '../../components/AdminComp/DonNhapSach/QuanTriDonNhap'
import { useNavigate } from 'react-router-dom'


function DonNhapSach() {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  useEffect(() => {
    if (role) {
      console.log(role)
      if (role !== 'NHANVIEN') {
        return navigate("/");
      } 
    } else {
     return navigate("/login");
    }
  })
  return (
    <div className='bg-zinc-300 flex gap-x-2'>
        <div><SlideBar/></div>

        <div className='w-[calc(100vw-16rem)] h-[calc(100vh)] bg-white rounded-lg'>
            <QuanTriDonNhap/>
        </div>
    </div>
  )
}

export default DonNhapSach
