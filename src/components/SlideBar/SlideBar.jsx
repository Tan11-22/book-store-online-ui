import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';


function SlideBar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    } 
    const role = localStorage.getItem('role')
    const checkRole = (role =='QUANLY')
  return (
    <div>
      <div class="relative flex flex-col bg-clip-border rounded-lg bg-orrange-500 text-black h-[calc(100vh)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div class="mb-2 px-4">
            <div className='flex lg:flex-1 py-1'>
                <a href='#' className='flex lg:flex'>
                <img src={logo} alt='Logo' className='h-9 w-auto' />
                <p className='text-m font-bold leading-8 text-gray-900'>RESETBOOKSTORE</p>
                </a>
            </div>
        </div>
        <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-black">
            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
             onClick={()=>navigate("/admin/don-mua")}>
            <div class="grid place-items-center mr-4">
                <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/purchase-order.png" alt="purchase-order"/>
            </div>Quản trị đơn mua
            </div>
            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                onClick={()=>navigate("/admin")}
            >
            <div class="grid place-items-center mr-4">
            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                </svg>

            </div>Quản trị sách
            </div>
            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                onClick={()=>navigate("/admin/don-nhap")}
            >
            <div class="grid place-items-center mr-4">
            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"/>
            <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"/>
            </svg>

            </div>Quản trị đơn nhập 
            </div>

            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                onClick={()=>navigate("/admin/phieu-nhap")}
            >
            <div class="grid place-items-center mr-4">
            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg>


            </div>Quản trị phiếu nhập
            </div>
          
           

            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                 onClick={()=>navigate("/admin/the-loai")}
            >
            <div class="grid place-items-center mr-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="category-icon"
            >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
            </svg>


            </div>Quản trị thể loại
            </div>

            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                 onClick={()=>navigate("/admin/tac-gia")}
            >
            <div class="grid place-items-center mr-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="author-with-pen-icon"
            >

                <circle cx="12" cy="7" r="4" />

                <path d="M16 21v-2a4 4 0 0 0-8 0v2" />

                <path d="M19 15l-5 5" />
                <path d="M14 20l5-5 2 2-5 5z" />

            </svg>


            </div> Quản trị tác giả
            </div>
            {
                checkRole ? 
                <>
            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                 onClick={()=>navigate("/admin/gia-sach")}
            >
            <div class="grid place-items-center mr-4">
                <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd"/>
                    <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                    </svg>

            </div>Quản trị giá
            </div>


            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                 onClick={()=>navigate("/admin/doanh-thu")}
            >
            <div class="grid place-items-center mr-4">
            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
            </svg>

             

            </div>Báo cáo thống kê
            </div>

            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
             onClick={()=>navigate("/admin/tai-khoan")}>
            <div class="grid place-items-center mr-4">
                <img width="24" height="24" src="https://img.icons8.com/ios/50/bank-card-back-side--v1.png" alt="bank-card-back-side--v1"/>
            </div>Quản trị tài khoản
            </div>

           

            </>
            :
            <></>
            }
            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
             onClick={()=>navigate("/admin/thong-tin")}>
            <div class="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                </svg>
            </div>Thông tin cá nhân
            </div>

            <div role="button" tabindex="0" class="flex items-center w-full p-2 rounded-lg text-start leading-tight 
            transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 
            active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => handleLogout()}>
            <div class="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clip-rule="evenodd"></path>
                </svg>
            </div>Đăng xuất
            </div>
           
        </nav>
        </div>
    </div>
  )
}

export default SlideBar
