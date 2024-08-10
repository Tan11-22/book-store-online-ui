import React from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import QuanTriDonNhap from '../../components/AdminComp/DonNhapSach/QuanTriDonNhap'


function DonNhapSach() {
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
