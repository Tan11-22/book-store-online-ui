import React from 'react'
import Chip from './Chip'
import ChipImage from './ChipImage'

function ModalsChiTietSach({open, onClose, data}) {
    const handleClose = () => {
        onClose()
      }
    if (!open || data == undefined) return null
    return (
      <div>
        <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-opacity-50" >
                  <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg min-w-[800px] ">
                      <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-black max-h-[80vh]  overflow-y-auto">
                          <div className="w-full flex justify-start text-gray-600 mb-3">
                              <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                              </svg>
                              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Chi tiết sách</h1>
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
                                <strong>ISBN: </strong> {data.isbn} 
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
                                <strong>Tên sách: </strong> {data.tenSach}
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
                                <strong>Khuôn khổ: </strong> {data.khuonKho} 
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
                                <strong>Số trang: </strong> {data.soTrang} 
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
                                <strong>Trọng lượng: </strong> {data.trongLuong} 
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
                                <strong>Nhà xuất bản: </strong> {`${data.maNhaXuatBan} - ${data.tenNhaXuatBan}`} 
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
                                <strong>Mô tả: </strong> {data.moTa} 
                                </span>
                            </li>
                        </ul>
                          
  
  
                          <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tác giả</label>
                          <div className="flex flex-wrap mb-5">
                              {data.tacGias.map((chip, index) => (
                              <Chip key={index} label={`${chip.ho} ${chip.ten}`}   />
                              ))}
                          </div>
  
  
  
                          <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Thể loại</label>
                          <div className="flex flex-wrap mb-5">
                              {data.theLoais.map((chip, index) => (
                              <Chip key={index} label={chip.tenTheLoai}   />
                              ))}
                          </div>
  
  
  
  
  
                          <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Hình ảnh</label>
                          <div className="flex flex-wrap mt-4">
                              {data.hinhAnhs.map((val, index) => (
                              <ChipImage key={index} file={val.filename} />
                              ))}
                          </div> 
  
                          <div className="flex items-center justify-start w-full">                   
                              <button className="mt-5 mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                              onClick={()=>handleClose()}
                              >Thoát</button>
                          </div>
                          <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" 
                           onClick={()=>handleClose()} role="button">
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

export default ModalsChiTietSach
