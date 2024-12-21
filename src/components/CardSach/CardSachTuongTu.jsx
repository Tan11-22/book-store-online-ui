import React from 'react'
import { formatCurrency } from '../../context/utility'
import { useNavigate } from 'react-router-dom'

function CardSachTuongTu({data}) {
  const navigate = useNavigate()

  const reloadPage = () => {
    window.location.reload();
  };
  const goToBookDetail = (isbn) => {
    navigate(`/sach/${isbn}`)
    reloadPage()
  }


  return (
    <div className='mx-auto mt-2 '
    >
         <div className="relative flex flex-col text-black bg-white shadow-md bg-clip-border rounded-xl w-72 mx-auto "
        
         >
            <div className="relative mx-4 mt-4 overflow-hidden text-black bg-white bg-clip-border rounded-xl h-40 w-auto">
                <img
                src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${data.tenAnh?data.tenAnh:"default.png"}`}
              //  src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=default.png`}
              onClick={() => goToBookDetail(data.isbn)}
               alt="card-image" className="object-cover object-center h-40 max-w-full rounded-lg cursor-pointer mx-auto" />
            </div>
            <div className="p-2">

                <p className="min-h-8 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900  cursor-pointer"
                             onClick={() => goToBookDetail(data.isbn)}
                >
                    {data.tenSach}
                    {/* Sách abc */}
                </p>


                <div className="flex items-center justify-between mb-2 min-h-7">
                  {
                  data.giaGiam? (
                    <>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed line-through text-black opacity-55">
                        {formatCurrency(data.giaBan)}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-red-600">
                        {formatCurrency(data.giaGiam)}
                    </p>
                  </>
                    ) : (
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-black">
                        {formatCurrency(data.giaBan)}
                    </p>
                    )
                  
                }
                 {/* <p className="block font-sans text-base antialiased font-medium leading-relaxed line-through text-blue-gray-900 opacity-55">
                        {formatCurrency(100000)}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {formatCurrency(85000)}
                    </p> */}
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-black opacity-75 min-h-6">
                    {data.tenTacGia}
                    {/* Tác giả A */}
                </p>
            </div>
            
            </div>
    </div>
  )
}

export default CardSachTuongTu
