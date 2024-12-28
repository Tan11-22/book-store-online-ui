import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SlideBar from '../../components/SlideBar/SlideBar'
import QTTheLoai from '../../components/AdminComp/QTTheLoai'

function QTTheLoaiPage() {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  useEffect(() => {
    if (role) {
      console.log(role)
      if (role == 'KHACHHANG') {
        return navigate("/");
      } 
    } else {
     return navigate("/login");
    }
  },[])
  return (
    <div>
      <div className='bg-zinc-300 flex gap-x-2'>
        <div><SlideBar/></div>

        <div className='w-[calc(100vw-16rem)] h-[calc(100vh)] bg-white rounded-lg'>
            <QTTheLoai/>
        </div>
    </div>
    </div>
  )
}

export default QTTheLoaiPage
