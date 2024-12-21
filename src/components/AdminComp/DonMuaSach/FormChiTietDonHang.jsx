import React, { useEffect, useState } from 'react'
import { formatCurrency } from '../../../context/utility'
import { capNhatDMS, capNhatGiaoDMS, layCTDMS } from '../../../context/QuanTriSach'
import Alert from '../../Alert/Alert'

function FormChiTietDonHang({data, open, onClose}) {

    const [dataSach, setDataSach] = useState([])
   
    const handleClose = () => {
        onClose()
    }
    useEffect (
            () => {
                const fetchData = async () => {
                    const data1 ={'idDon':parseInt(data.idDonMuaSach)}
                    try {
                      const result = await layCTDMS(data1);
                      if (result.code === 200) {
                        setDataSach(result.data)
                      }
                      
                    } catch (error) {
                      console.log(error)
                    }
                  };
                if(data) fetchData(); 
            }
            ,[data])
    const totalAmount = dataSach
            .reduce((total, book) => total + parseInt(book.donGia*book.soLuong), 0)
    
    if (!open) return null
  return (
    <div>
            <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-30 absolute top-0 right-0 bottom-0 left-0 bg-opacity-50" >
                      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg min-w-[800px] ">
                          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-black max-h-[80vh]  overflow-y-auto">
                              <div className="w-full flex justify-start text-gray-600 mb-3">
                                  <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                  </svg>
                                  <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Thông tin đơn hàng</h1>
                              </div>
      
                              <ul class="grid gap-y-4 mb-2">
                                  <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                          </g></svg>
                                      <span class="font-normal text-base text-gray-900 ">
                                      <strong>Đơn mua sách: </strong> #{data.idDonMuaSach}
                                      </span>
                                  </li>
                                  <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                          </g></svg>
                                      <span class="font-normal text-base text-gray-900 ">
                                      <strong>Khách hàng: </strong> {data.hoTen} 
                                      </span>
                                  </li>
                                  <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                          </g></svg>
                                      <span class="font-normal text-base text-gray-900 ">
                                      <strong>Số điện thoại: </strong> {data.sdt} <strong>Email: </strong>{data.email}
                                      </span>
                                  </li>
                                  <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                          </g></svg>
                                      <span class="font-normal text-base text-gray-900 ">
                                      <strong>Ngày mua: </strong> {data.ngayMua} 
                                      </span>
                                  </li>
                                  <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                          </g></svg>
                                      <span class="font-normal text-base text-gray-900 ">
                                      <strong>Địa chỉ giao hàng: </strong> {data.diaChiGiao} 
                                      </span>
                                  </li>
                                  <li class="flex items-center gap-3">
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                        </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                          </g></svg>
                                      <span class="font-normal text-base text-gray-900 ">
                                      <strong>Phí vận chuyển: </strong> {data.phiVanChuyen} 
                                      </span>
                                  </li>
                              </ul>
      
      
      
      
      
      
                             
                    <div className="p-2 px-0 ">
                      <table className="w-full text-left table-auto min-w-max">
                      <thead>
                          <tr>
                          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                              <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                              Sách
                              </p>
                          </th>
                          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                              <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                              Đơn giá
                              </p>
                          </th>
                          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                              <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                              Số lượng
                              </p>
                          </th>
                          <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                              <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                              Thành tiền
                              </p>
                          </th>
                          </tr>
                      </thead>
                      <tbody>
                      {
                              dataSach.map(
                                  (val, key) => {
                                    return (
                                      <tr key ={key}>
                          <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                              <div className="flex items-center gap-3">
                              <img src={`http://localhost:8080/api/quan-ly-sach-service/hinh-anh/get?name=${val.tenAnh?val.tenAnh:"default.png"}`}
                                  className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1" />
                                  <div>
                                  <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                     Mã sách: {val.ISBN}
                                  </p>
                                  <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                      {val.tenSach}
                                  </p>
                                  </div>
                              
                              </div>
                          </td>
                          <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                          <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                  {formatCurrency(val.donGia)}
                              </p>
                          </td>
                          <td className="p-2 border-b border-blue-gray-50 text-center align-middle">
                          <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                  {val.soLuong}
                              </p>
                          </td>
                          <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                              <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                              {formatCurrency(val.donGia*val.soLuong)}
                              </p>
                          </td>
                                      </tr>
                                    )
                                  }
                                )
                          }
      
      
                      </tbody>
                      </table>
                  </div>
                  <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ml-5">
                          - Tổng giá trị đơn mua sách: {formatCurrency(totalAmount+data.phiVanChuyen)} (đã bao gồm phí vận chuyển).
                          </p>

                              {/* <div className="flex items-center justify-start w-full">                   
                                  <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                                  onClick={()=>handleXacNhanDuyet()}
                                  >Xác nhận hoàn thành đơn</button>
                              </div> */}
                              <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" 
                               onClick={()=>handleClose()} 
                               role="button">
                                  <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <line x1="18" y1="6" x2="6" y2="18" />
                                      <line x1="6" y1="6" x2="18" y2="18" />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>


    </div>
  )
}

export default FormChiTietDonHang