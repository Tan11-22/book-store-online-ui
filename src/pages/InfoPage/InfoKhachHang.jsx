import React from 'react'
import Footer from '../../components/Footer/Footer'
import SlideBarInfo from '../../components/SlideBar/SlideBarInfo'
import Navbar from '../../components/navbar/Navbar'
import ThongTinKhachHang from '../../components/Account/ThongTinKhachHang'

function InfoKhachHang() {
  return (
    <div>
      <Navbar/>
      <div className='mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300 '>
        {/* <div className='w-[75rem] bg-white mx-auto rounded-lg min-h-96'> */}
          <div className='grid grid-cols-4 gap-x-4 max-w-7xl mx-auto px-2 '>
            <div className=' px-0 rounded-lg'>
              <SlideBarInfo/>
              </div>
              <div className='bg-white px-0 col-span-3 rounded-lg'>
                <ThongTinKhachHang/>
              </div>
            </div>
            {/* </div> */}
        </div>
        <Footer/>
    </div>
  )
}

export default InfoKhachHang
