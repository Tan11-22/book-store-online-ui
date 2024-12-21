import React, { useEffect } from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import QuanTriSach from '../../components/AdminComp/QuanTriSach'
import { useNavigate } from 'react-router-dom'

function Admin() {

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
    <div className='bg-zinc-300 flex gap-x-2'>
        <div><SlideBar/></div>

        <div className='w-[calc(100vw-16rem)] h-[calc(100vh)] bg-white rounded-lg'>
            <QuanTriSach/>
        </div>
    </div>
  )
}

export default Admin
