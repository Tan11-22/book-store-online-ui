import React from 'react'
import { formatCurrency } from '../../context/utility'
import { useNavigate } from 'react-router-dom';
import { themSachVaoGH } from '../../context/SachService';
import sale from '../assets/sale-tag.png'
import info from '../assets/info.png'
import add from '../assets/addCart.png'

function CardSach1({data, openAlert, refresh}) {
    const navigate = useNavigate()

  
    const goToBookDetail = (isbn) => {
      navigate(`/sach/${isbn}`)
    }

    const themVaoGioHang = (isbn,soLuong) => {
      const username = localStorage.getItem('username')
      if (username === null || username==='') 
        {
          navigate("/login")
          return
        }

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


  return (
    
    <div className='my-2 '>
         <div className="relative flex flex-col text-black bg-white shadow-md bg-clip-border rounded-xl mx-2">
         <div className="grid grid-cols-2 grid-rows-4 gap-2">
            <div className="row-span-4 relative mx-4 mt-4 overflow-hidden text-black bg-white bg-clip-border rounded-xl h-56 w-52">
            {data.giaGiam > 0 ? 
              // <div className="absolute top-2 right-2">
              //    {/* bg-red-600 text-white text-xs font-bold px-2 py-1 rounde */}
              //   <img src={sale} className='w-16'/>
              // </div>
              <div className="absolute w-full top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-yellow-700 text-white text-xl font-extrabold text-center px-4 py-2 rounded-lg shadow-lg animate-pulse">
              <p>Đang giảm giá</p>
            </div>: <></>
            }
                
                <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${data.tenAnh?data.tenAnh:"default.png"}`}
                alt="card-image" className="object-cover w-full h-full" />
            </div>


            <div className="p-6 row-span-3">
            <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ">
                    {data.tenSach}
                </p>
                <div className="flex items-center justify-between mb-2 min-h-7">
                  {
                  data.giaGiam? (
                    <>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed line-through text-blue-gray-900 opacity-55">
                        {formatCurrency(data.giaBan)}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-red-600">
                        {formatCurrency(data.giaGiam)}
                    </p>
                  </>
                    ) : (
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {formatCurrency(data.giaBan)}
                    </p>
                    )
                  
                }
                
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-black opacity-75 min-h-6">
                    {data.tenTacGia}
                </p>
            </div>

            <div className="col-start-2 row-start-4">
                <div className="grid grid-cols-2 grid-rows-1 gap-2 mx-2 my-2">
                    <div >
                        <button
                        className="
                        bg-zinc-300 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button"
                        onClick={() => goToBookDetail(data.isbn)}
                        >
                        <img src={info} alt='Logo' 
                            className='h-7 w-auto mx-auto' 
                            />
                        </button>
                    </div>
                    <div >
                        <button
                        className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                        hover:shadow-gray-900/20 block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none "
                        type="button"
                        onClick={()=> themVaoGioHang(data.isbn,1)}
                        disabled={!data.soLuong>0}
                        >
                                                <img src={add} alt='Logo' 
                            className='h-7 w-auto mx-auto' 
                            />
                        </button>
                    </div>
                </div>
            </div>
</div>

            </div>
    </div>
  )
}

export default CardSach1
