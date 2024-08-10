import React from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import ThongTinNhanVien from '../../components/Account/ThongTinNhanVien'

function InforNV() {
  return (
    <div className='bg-zinc-300 flex gap-x-2'>
        <div><SlideBar/></div>

        <div className='w-[calc(100vw-16rem)] h-[calc(100vh)] bg-white rounded-lg'>
            <ThongTinNhanVien/>
        </div>
    </div>
  )
}

export default InforNV
