import React, {useState, useEffect} from 'react'
import { getInfoKH } from '../../context/LoginService';



function ThongTinKhachHang() {
    const formatDate = (dateString) => {

        // Tách chuỗi ngày thành các phần tử
        const [year, month, day] = dateString.split('-');
        // Sắp xếp lại các phần tử theo định dạng dd-MM-yyyy
        return `${day}-${month}-${year}`;
      }
    const [data, setData] = useState(null)
    useEffect(
        () => {      
            const fetchData = async () => {
                try {
                  const result = await getInfoKH();
                  setData(result.data)
                } catch (error) {
                  console.log(error)
                }
              }
                fetchData();       
        }, 
        []
    )
    if(data === null) return null
  return (
    <div>
      <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-5">Thông tin cá nhân của người dùng</h1>
      <div className='grid grid-cols-3 gap-x-4 max-w-4xl mx-auto px-2 '>
        <div className='px-0  rounded-lg'>
            <div className='my-4'>
                <div className='flex justify-center'>
                    <img className="h-auto w-3/4 max-w-full rounded-full object-cover object-center md:h-[200px]"
                    src={`http://localhost:8080/api/sach-service/hinh-anh/getUser?name=${data.hinhAnh}`}
                    alt="" />
                </div>
            </div>
            <div className="flex items-center justify-start w-full mt-5">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            // onClick={()=>handleTaoDon()}
                            >Cập nhật</button>
                        </div>
        </div>
        <div className='px-0 col-span-2 rounded-lg ml-10'>
                <ul class="grid gap-y-4 mb-2">
                            <li class="flex items-center gap-3">
                                <span class="font-normal text-base text-gray-900 ">
                                  <strong>- Tên người dùng:</strong> {data.ho} {data.ten}
                                  </span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="font-normal text-base text-gray-900 ">
                                  <strong>- Giới tính:</strong> {data.gioiTinh? ' Nữ':' Nam'}
                                  </span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="font-normal text-base text-gray-900 ">
                                  <strong>- Ngày sinh:</strong> {data.ngaySinh?formatDate(data.ngaySinh): "Đang cập nhật"}
                                  </span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="font-normal text-base text-gray-900 ">
                                  <strong>- Địa chỉ:</strong> {data.diaChi}
                                  </span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="font-normal text-base text-gray-900 ">
                                  <strong>- Email:</strong> {data.email}
                                  </span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="font-normal text-base text-gray-900 ">
                                  <strong>- Số điện thoại:</strong> {data.soDienThoai}
                                  </span>
                            </li>
                        </ul>
            
            </div>
      </div>
        
    </div>
  )
}

export default ThongTinKhachHang
