import React from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import QuanTriPhieuNhap from '../../components/AdminComp/PhieuNhap/QuanTriPhieuNhap'

function PhieuNhap() {
  return (
    <div className='bg-zinc-300 flex gap-x-2'>
    <div><SlideBar/></div>

    <div className='w-[calc(100vw-16rem)] h-[calc(100vh)] bg-white rounded-lg'>
        <QuanTriPhieuNhap/>
    </div>
</div>
  )
}

export default PhieuNhap
