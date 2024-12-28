import React, {useState, useEffect} from 'react'
import { getChiTietSach, getSachCungTheLoai } from '../../context/SachService'
import { formatCurrency } from '../../context/utility'
import { themSachVaoGH } from '../../context/SachService'
import { useNavigate } from 'react-router-dom';
import DefaultBinhLuan from '../BinhLuan/DefaultBinhLuan';
import FormBinhLuan from '../BinhLuan/FormBinhLuan';
import CardSachTuongTu from '../CardSach/CardSachTuongTu';
import { LayDSBinhLuanCuaSach, laySoLuongBinhLuan } from '../../context/BinhLuanService';



function ChiTietSach({maSach, openAlert, refresh}) {
  const navigate = useNavigate()

  const [image, setImage] = useState('img1')
  const [soLuong, setSoLuong] = useState(1)
  const [loading, setLoading] = useState(true)
  const [sach,setSach] = useState()
  const [tacGias,setTacGias] = useState([])
  const [theLoais,setTheLoais] = useState([])
  const [hinhAnhs,setHinhAnhs] = useState([])

  const [dsBinhLuan, setDsBinhLuan] = useState([])
  const [soLuongBinhLuanHienThi, setSoLuongBinhLuanHienThi] = useState(4)
  const [soLuongBinhLuan, setSoLuongBinhLuan] = useState(0)
  const [lamMoiDSBinhLuan, setLamMoiDSBinhLuan] = useState(false)
  const [dsSachCungTheLoai, setDsSachCungTheLoai] = useState([])
  const handleClickImage = (image) => {
    setImage(image?image.filename:"default.png")
  }
  const subtract = () =>
  {
    setSoLuong(soLuong -1)
  }
  const add = () => {
    setSoLuong(soLuong + 1)
  }

  useEffect(
    () => {
        const fetchData = async () => {
            try {
              const result = await getChiTietSach(maSach);
              console.log(result.data)
              setSach(result.data.sachDTO)
              setTacGias(result.data.tacGias)
              setTheLoais(result.data.theLoais)
              setHinhAnhs(result.data.hinhAnhs)
              // const responseSoLuongBinhLuan = await laySoLuongBinhLuan(maSach)
              // setSoLuongBinhLuan(responseSoLuongBinhLuan.data)
              // const responseDSBinhLuan = await LayDSBinhLuanCuaSach(maSach,0,soLuongBinhLuanHienThi)
              // setDsBinhLuan(responseDSBinhLuan.data)
              const responseDSCungTL = await getSachCungTheLoai(maSach)
              setDsSachCungTheLoai(responseDSCungTL.data)
              if(result.code ===200) {
                setImage(result.data.hinhAnhs[0]?result.data.hinhAnhs[0].filename:"default.png")
                setLoading(false)
              }
              
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }, 
    []
  )

  useEffect(
    () => {
        const fetchData = async () => {
          // if(soLuongBinhLuanHienThi == 4) return 
            try {
              const responseSoLuongBinhLuan = await laySoLuongBinhLuan(maSach)
              setSoLuongBinhLuan(responseSoLuongBinhLuan.data)
              const responseDSBinhLuan = await LayDSBinhLuanCuaSach(maSach,0,soLuongBinhLuanHienThi)
              setDsBinhLuan(responseDSBinhLuan.data)
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }, 
    [soLuongBinhLuanHienThi, lamMoiDSBinhLuan]
  )

  const themVaoGioHang = (isbn,soLuong) => {
    const username = localStorage.getItem('username')
    if (username === null || username==='') navigate("/login")
    const fetchData1 = async () => {
        try {
          const result = await themSachVaoGH(username,isbn,soLuong);
          console.log(result.code,result.status)
          if (result.code === 200) {
            openAlert(result.status)
            console.log("check alert")
            refresh()
          }
        } catch (error) {
          console.log(error)
        }
    };
    fetchData1(); 
  }

  const xemThemBinhLuan = () => {
    setSoLuongBinhLuanHienThi(soLuongBinhLuan)
  }
  const loadLaiDSBinhLuan = () => {
    setLamMoiDSBinhLuan(!lamMoiDSBinhLuan)
  }
  if (loading) return null
  return (
    <div className='bg-zinc-300 h-full py-2 '>
      <div className='grid grid-cols-2 gap-x-4 max-w-7xl mx-auto px-2 bg-white rounded-lg'>
        <div className='my-4'>
          <div className="grid gap-4">
            <div className='flex justify-center'>
              <img className="h-auto  max-w-full rounded-lg object-cover object-center md:h-[400px]"
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${image}`}
                alt="" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img
                  src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${hinhAnhs[0]?hinhAnhs[0].filename:"default.png"}`}
                  className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image"
                  onClick={()=>{handleClickImage(hinhAnhs[0])}} />
              </div>
            <div>
              <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${hinhAnhs[1]?hinhAnhs[1].filename:"default.png"}`}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage(hinhAnhs[1])}}/>
            </div>
            <div>
              <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${hinhAnhs[2]?hinhAnhs[2].filename:"default.png"}`}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage(hinhAnhs[2])}}/>
            </div>
            <div>
              <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${hinhAnhs[3]?hinhAnhs[3].filename:"default.png"}`}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage(hinhAnhs[3])}}/>
            </div>
            <div>
              <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${hinhAnhs[4]?hinhAnhs[4].filename:"default.png"}`}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage(hinhAnhs[4])}}/>
            </div>
            </div>
          </div>

          </div>
        <div className='my-4'>
        <div
                    className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                    <div className="data w-full max-w-xl">
                        <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                          {sach.tenSach}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            {sach.giaGiam?(
                              <>
                                <h6
                                  class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 line-through border-gray-200 mr-5 opacity-55">
                                  {sach.giaBan?formatCurrency(sach.giaBan):"Chưa cập nhật giá"}
                                  
                                </h6>
                                <h6
                                  class="font-manrope font-semibold text-2xl leading-9 text-red-600 pr-5 sm:border-r border-gray-200 mr-5">
                                  {sach.giaBan?formatCurrency(sach.giaGiam):"Chưa cập nhật giá"}
                                  
                                </h6>
                              </>
                            ):(
                              <h6
                                  class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                  {sach.giaBan?formatCurrency(sach.giaBan):"Chưa cập nhật giá"}
                                  
                                </h6>
                            )}
                            <div className="flex items-center gap-2">
                                {/* <div className="flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_8480_66029)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#F3F4F6" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8480_66029">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div> */}
                                <span class="pl-2 font-normal leading-7 text-gray-500 text-sm ">{soLuongBinhLuan} lượt bình luận</span>
                            </div>

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
                                  <strong>Khuôn khổ:</strong> {sach.khuonKho|| "Đang cập nhật"}
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
                                  <strong>Số trang:</strong> {sach.soTrang|| "Đang cập nhật"}
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
                                  <strong>Trọng lượng:</strong> {sach.trongLuong|| "Đang cập nhật"} gram
                                  </span>
                            </li>
                            <li class="flex items-center gap-3">
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                  </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                    </g></svg>
                                <span class="font-normal text-base text-gray-900 flex"><strong>Tác giả: </strong> 
                                {tacGias.map(
                                  (val, key) =>{
                                    return (
                                      <a key={key} href='#' className='px-1'> {val.ho} {val.ten},</a>
                                    )
                                  }
                                )}</span>
                            </li>
                            <li class="flex items-center gap-3">
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                  </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                    </g></svg>
                                <span class="font-normal text-base text-gray-900 ">
                                <strong>Nhà xuất bản: </strong> {sach.maNhaXuatBan} {sach.tenNhaXuatBan}
                                </span>
                            </li>
                            <li class="flex items-center gap-3">
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                  </g><g id="SVGRepo_iconCarrier"> <path d="M7 12H17" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    </path> <circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
                                    </g></svg>
                                <span class="font-normal text-base text-gray-900 flex">
                                  <strong>Thể loại: </strong> 
                                  {theLoais.map(
                                    (val, key) =>{
                                      return (
                                        <a key={key} href='#' className='px-1'>{val.tenTheLoai},</a>
                                      )
                                    }
                                  )}
                                </span>
                            </li>
                        </ul>
                        
                        <div class="w-full pb-8 border-b border-gray-100 flex-wrap">
                            

                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                            <div class="flex sm:items-center sm:justify-center w-full">
                                <button disabled = {soLuong === 1}
                                  onClick={()=>subtract()}
                                    class="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                    <svg class="stroke-black group-disabled:stroke-gray-900" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M16.5 11H5.5" stroke="black" strokeOpacity="0.2" strokeWidth="1.6"
                                            strokeLinecap="round" />
                                        <path d="M16.5 11H5.5" stroke="black" strokeOpacity="0.2" strokeWidth="1.6"
                                            strokeLinecap="round" />
                                    </svg>
                                </button>
                                <p 
                                    class="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                    >{soLuong}</p>
                                <button
                                  disabled = {soLuong === sach.soLuong}
                                   onClick={()=>add()}
                                    class="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                    <svg class="stroke-black group-disabled:stroke-gray-900" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                            strokeLinecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" strokeOpacity="0.2"
                                            strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" strokeOpacity="0.2"
                                            strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                onClick={()=> themVaoGioHang(sach.isbn,soLuong)}
                                disabled={!sach.soLuong>0}
                                class="group py-4 px-5 rounded-full bg-orrange-500 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100
                                disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none
                                ">
                                <svg class="stroke-black " width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                        stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                                Thêm vào giỏ hàng</button>
                        </div>
                        
                        </div>
                        </div>
        </div>
      </div>
      {/* <div className='max-w-7xl mx-auto px-2 bg-white rounded-lg mt-2 h-64'>
        <h3 className="text-gray-800 font-lg font-bold tracking-normal leading-tight  text-2xl py-2 px-4 mb-1 bg-white rounded-lg max-w-7xl mx-auto">
            Thông tin mô tả</h3>
          <p className='px-10'>
          {sach.moTa}
          </p>
      </div> */}
      <div className="max-w-7xl mx-auto mt-2 grid grid-cols-4 gap-3 ">
      <div className="col-span-3  bg-white rounded-lg  h-64">

      <h3 className="text-gray-800 font-lg font-bold tracking-normal leading-tight  text-2xl py-2 px-4 mb-1 bg-white rounded-lg max-w-7xl mx-auto">
            Thông tin mô tả</h3>
          <p className='px-10'>
          {sach.moTa}
          </p>
        </div>
      <div className="col-span-3  bg-white rounded-lg">
      <h3 className="text-gray-800 font-lg font-bold tracking-normal leading-tight  text-2xl py-2 px-4 mb-1 bg-white rounded-lg max-w-7xl mx-auto">
      Bình luận</h3>
        <FormBinhLuan isbn={maSach} refresh={loadLaiDSBinhLuan}/>
        {/* <div className="col-span-10 mx-2 h-[2px] w-full bg-black"></div> */}
        <h3 className="text-gray-800 font-lg font-bold tracking-normal leading-tight  text-2xl py-2 px-4 mb-1 bg-white rounded-lg max-w-7xl mx-auto">
      Danh sách bình luận</h3>
        {dsBinhLuan.map(
                                  (val, key) =>{
                                    return (
                                      // <a key={key} href='#' className='px-1'> {val.ho} {val.ten},</a>
                                      <DefaultBinhLuan key={key} data={val}/>
                                    )
                                  }
                                )}
     
     {
      soLuongBinhLuan == 0 ? 
      <p className="p-4 ml-2 block font-sans text-base antialiased font-normal leading-normal text-black italic">
      Hiện tại chưa có bình luận nào.
      </p>
      :<></>
     }
        {
          soLuongBinhLuan > soLuongBinhLuanHienThi ?
          <div className='max-w-44 mx-auto my-5'>

          <button
          className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                              hover:shadow-gray-900/20 block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none "
                              type="button"
                              onClick={()=> xemThemBinhLuan()}
                              >
                              Xem tất cả ({soLuongBinhLuan})
                              </button>
          </div>
          :
          <>

          </>
        }

      </div>
            <div className="row-start-1 row-span-4 col-start-4 bg-white rounded-lg max-h-[940px] pb-2">
            <h3 className="text-gray-800 font-lg font-bold tracking-normal leading-tight  text-2xl py-2 px-4 mb-1 bg-white rounded-lg max-w-7xl mx-auto">
            Sách cùng thể loại</h3>
            {dsSachCungTheLoai.length > 0 ? dsSachCungTheLoai.map(
                                  (val, key) =>{
                                    return (
                                      // <a key={key} href='#' className='px-1'> {val.ho} {val.ten},</a>
                                      <CardSachTuongTu key={key} data={val}/>
                                    )
                                  }
                                )
                              :
                              <>
                               <p className="p-4 ml-2 block font-sans text-base antialiased font-normal leading-normal text-black italic">
                                    Sách cùng thể loại hiện chưa được cập nhật.
                                </p>
                              </>
                              }
            </div>
        </div>
    </div>
  )
}

export default ChiTietSach


