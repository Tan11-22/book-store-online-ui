import React from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import find from '../assets/find.png'
import user from '../assets/user.png'
const Navbar = () => {
  return (
    <div>
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-3 lg:px-8 bg-orrange-500" aria-label="Global">
          <div className='flex lg:flex-1 py-1'>
            <a href='#' className='flex lg:flex'>
              <img src={logo} alt='Logo' className='h-9 w-auto' />
              <p className='text-m font-bold leading-8 text-gray-900'>RESETBOOKSTORE</p>
            </a>

        </div>
       
        <div className="hidden lg:flex lg:gap-x-12 py-1">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='group'>
              <input type='text' placeholder='Tìm kiếm' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300
              px-2 py-1 focus:outline-none'/>
             
            </div>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 px-2">
                <img src={find} alt='Logo' className='h-7 w-auto' />
              </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 pr-2">
            <img src={cart} alt='Logo' className='h-7 w-auto' />
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 pr-2">
            <img src={user} alt='Logo' className='h-7 w-auto' />
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 py-1 hidden">
            <img src={logo} alt='Logo' className='h-7 w-auto' />
            </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
