import React, {useState, useEffect} from 'react'
import { getDanhSachDonMua } from '../../context/GioHangService';

function QuanTriDonMuaSach() {
    const [data, setData] = useState([])
    useEffect(
        () => {      
            const fetchData = async () => {
                try {
                  const result = await getDanhSachDonMua();
                  setData(result.data)
                } catch (error) {
                  console.log(error)
                }
              }
                fetchData();       
        }, 
        []
    )
    const formatDate = (dateString) => {
      // Tách chuỗi ngày thành các phần tử
      const [year, month, day] = dateString.split('-');
      // Sắp xếp lại các phần tử theo định dạng dd-MM-yyyy
      return `${day}-${month}-${year}`;
    }
  return (
    <div>
      <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-5">Danh sách đơn hàng đã đặt của người dùng:</h1>
      <div
  class="relative flex flex-col w-full p-3 h-[500px] overflow-scroll text-black bg-white shadow-md font-bold  bg-clip-border mt-8">
  <table class="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Id đơn
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Ngày mua
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Sản phẩm
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Trạng thái
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Địa chỉ giao
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(
          (val,key) => {
            return (
              <tr key={key}> 
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    #{val.donMuaSach.idDonMuaSach}
                  </p>
                </td>
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {formatDate(val.donMuaSach.ngayMua)}
                  </p>
                </td>
                <td class="p-4 border border-blue-gray-50">
                  {
                    val.sachs.map(
                      (val1,key1) => {
                        return (
                          <p key={key1} class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                           - {val1.tenSach} x {val1.soLuong} cuốn
                          </p>
                        )
                      }
                    )
                  }
                  
                </td>
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai===1?"Chưa thanh toán":""}
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai===2?"Đã thanh toán":""}
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai===3?"Đã giao":""}
                    </p>
                    
                </td>
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {val.donMuaSach.diaChiGiao}
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
    
    </div>
  )
}

export default QuanTriDonMuaSach
