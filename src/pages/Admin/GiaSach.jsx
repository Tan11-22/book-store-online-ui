import React, { useEffect } from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import QuanTriGia from '../../components/AdminComp/Gia/QuanTriGia'
import { useNavigate } from 'react-router-dom'

function GiaSach() {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  useEffect(() => {
      if (role) {
        console.log(role)
        if (role == 'KHACHHANG') {
          return navigate("/");
        } 
        else if (role == 'NHANVIEN') {
          return navigate("/admin")
        }
      } else {
       return navigate("/login");
      }
    },[])
  return (
    <div className='bg-zinc-300 flex gap-x-2'>
        <div><SlideBar/></div>

        <div className='w-[calc(100vw-16rem)] h-[calc(100vh)] bg-white rounded-lg'>
            <QuanTriGia/>
        </div>
    </div>
  )
}

export default GiaSach
