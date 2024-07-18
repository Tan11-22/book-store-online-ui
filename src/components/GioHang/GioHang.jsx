import React from 'react'

function GioHang() {
  return (
    <div>
      <div className='bg-zinc-300 h-full py-2'>
        <div className='grid grid-cols-3 gap-x-6 max-w-6xl mx-auto px-2'>
            <div className='bg-white p-6 px-0 col-span-2 rounded-lg'>
                <h1 className='text-lg font-bold pl-3'>Giỏ hàng:</h1>
                <table class="w-full mt-4 text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                            Chọn
                        </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Tên sách
                        </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Số lượng
                        </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Đơn giá
                        </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Tổng giá
                        </p>
                    </th>
                    <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                            Xoá
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="p-4">
                       
                    </td>
                    <td class="p-4 ">
                        <div class="flex items-center gap-3">
                        <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                            alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                        <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            John Michael
                            </p>
                            <p
                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            john@creative-tim.com
                            </p>
                        </div>
                        </div>
                    </td>
                    <td class="p-4 ">
                        <div class="flex flex-col">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            Manager
                        </p>
                        <p
                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            Organization
                        </p>
                        </div>
                    </td>
                    <td class="p-4">
                        <div class="w-max">
                        <div
                            class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span class="">online</span>
                        </div>
                        </div>
                    </td>
                    <td class="p-4 ">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        23/04/18
                        </p>
                    </td>
                    <td class="p-4">
                        <button
                        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            class="w-4 h-4">
                            <path
                                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                            </path>
                            </svg>
                        </span>
                        </button>
                    </td>
                    </tr>
                    <tr>
                    <td class="p-4">
                       
                       </td>
                    <td class="p-4">
                        <div class="flex items-center gap-3">
                        <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                            alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                        <div class="flex flex-col">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            John Michael
                            </p>
                            <p
                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            john@creative-tim.com
                            </p>
                        </div>
                        </div>
                    </td>
                    <td class="p-4 ">
                        <div class="flex flex-col">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            Manager
                        </p>
                        <p
                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            Organization
                        </p>
                        </div>
                    </td>
                    <td class="p-4">
                        <div class="w-max">
                        <div
                            class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span class="">online</span>
                        </div>
                        </div>
                    </td>
                    <td class="p-4">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        23/04/18
                        </p>
                    </td>
                    <td class="p-4">
                        <button
                        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            class="w-4 h-4">
                            <path
                                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                            </path>
                            </svg>
                        </span>
                        </button>
                    </td>
                    </tr>
                </tbody>
                </table>

            </div>
            <div className='bg-white p-6 px-0 rounded-lg'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default GioHang
