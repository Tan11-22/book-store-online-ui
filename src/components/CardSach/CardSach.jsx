import React from 'react'
import { formatCurrency } from '../../context/utility'
import { useNavigate } from 'react-router-dom';
import { themSachVaoGH } from '../../context/SachService';

function CardSach({data, openAlert, refresh}) {
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
         <div className="relative flex flex-col text-black bg-white shadow-md bg-clip-border rounded-xl w-72">
            <div className="relative mx-4 mt-4 overflow-hidden text-black bg-white bg-clip-border rounded-xl h-80 w-auto">
                <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${data.tenAnh?data.tenAnh:"default.png"}`}
                alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
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
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
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
            <div className="p-3 pt-0">
                <button
                className="bg-zinc-300 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
                onClick={() => goToBookDetail(data.isbn)}
                >
                Xem chi tiết
                </button>
            </div>
            <div className="p-3 pt-0">
                <button
                className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                hover:shadow-gray-900/20 block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none "
                type="button"
                onClick={()=> themVaoGioHang(data.isbn,1)}
                >
                Thêm vào giỏ hàng
                </button>
            </div>
            </div>
    </div>
  )
}

export default CardSach
