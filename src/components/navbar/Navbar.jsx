import React, {useEffect, useState} from 'react'
import logo from '../assets/logo.png'
import logout from '../assets/logout.png'
import find from '../assets/find.png'
import user from '../assets/user.png'
import { getSLSachGH } from '../../context/SachService'
import { useNavigate } from 'react-router-dom';

const Navbar = ({refresh}) => {
  const navigate = useNavigate()
  const [slSach, setSlSach] = useState(0)
  const username = localStorage.getItem('username')
  const [search, setSearch] = useState('')

  const navigateToComponent = (event) => {
    event.preventDefault();
    navigate(`/tim-kiem?page=1&search=${search}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/tim-kiem?page=1&search=${search}`);
    }
  }
  const handleLogout = (event) => {
    event.preventDefault();
      localStorage.removeItem('username')
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      navigate("/login")
  } 

  useEffect(
    () => {      
        const fetchData = async () => {
            try {
              const result = await getSLSachGH(username);
              setSlSach(result.data)
            } catch (error) {
              console.log(error)
            }
          }
          if(username === null || username ===''){
            setSlSach(0)
          } else {
            fetchData(); 
          }
          console.log("check", username)
          
    }, 
    [username, refresh]
)
  const handleOpenGioHang = (event) => {
    event.preventDefault();
    navigate("/gio-hang");
  }
  const handleGoHome = (event) => {
    event.preventDefault();
    navigate("/trang-chu");
  }

  const handleGoBC = (event) => {
    event.preventDefault();
    navigate("/top-sach-ban-chay");
  }
  const handleGoInfoPage = (event) => {
    event.preventDefault();
    const username = localStorage.getItem('username')
    if (username === null || username==='') 
      {
        navigate("/login")
        return
      }
    navigate("/thong-tin");
  }
  return (
    <div>
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-3 lg:px-8 bg-orrange-500" aria-label="Global">
          <div className='flex lg:flex-1 py-1'>
            <a href='#' className='flex lg:flex' onClick={(event)=>handleGoHome(event)}>
              <img src={logo} alt='Logo' className='h-9 w-auto' />
              <p className='text-m font-bold leading-8 text-gray-900'>RESETBOOKSTORE</p>
            </a>

        </div>
       
        <div className="hidden lg:flex lg:gap-x-12 py-1">
            <a href="#" onClick={(event)=>handleGoHome(event)} className="text-sm font-semibold leading-6 text-gray-900">Trang chủ</a>
            <a href="#" onClick={(event)=>handleGoBC(event)} className="text-sm font-semibold leading-6 text-gray-900">Bán chạy</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='group'>
              <input type='text' placeholder='Tìm kiếm' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border 
              border-gray-300
              px-2 py-1 focus:outline-none'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              onKeyDown={(e)=>handleKeyDown(e)}/>
             
            </div>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 px-2"
            onClick={(event)=> navigateToComponent(event)}>
                <img src={find} alt='Logo' className='h-7 w-auto' />
              </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 pr-2 relative flex"
            onClick={(event)=>handleOpenGioHang(event)}>
              {/* <svg class="flex-1 w-7 h-7 fill-current" viewbox="0 0 24 24" >
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                </svg> */}
                <svg className='flex-1 w-7 h-7 fill-current' width="256px" height="256px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <span className="absolute right-0 top-0 rounded-full bg-white w-4 h-4 top right p-0 m-0 text-or font-mono text-sm  leading-tight text-center">
                  {slSach}
              </span>
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 pr-2"
            onClick={(event)=> handleGoInfoPage(event)}>
              <img src={user} alt='Logo' className='h-7 w-auto' />
            </a>
            {username && 
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1"
              onClick={(event)=>handleLogout(event)}
              >
              <img src={logout} alt='Logo' className='h-7 w-auto' />
              </a>
            }
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
