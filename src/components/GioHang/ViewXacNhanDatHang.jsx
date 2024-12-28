import React from 'react'
import { formatCurrency } from '../../context/utility';

function ViewXacNhanDatHang({dataXNDH,isOpen, onClose, handleDatHang}) {
    const sachs = dataXNDH.gioHangList ? dataXNDH.gioHangList: []
    const totalAmount = sachs
    // .filter(book => book.selected)
    .reduce((total, book) => total + parseInt(book.giaGiam? book.giaGiam*book.soLuong:book.giaBan*book.soLuong), 0);

    // const handleXN = () => {


    //     onClose()
    // }
    if (!isOpen) return null;
  return (
<div
        data-dialog-backdrop="dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="dialog"
          className="relative m-4 w-2/5 min-w-[60%] max-w-[70%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
            Xác nhận đặt sách
          </div>
          <div
            className="relative font-sans text-base antialiased font-light leading-relaxed  border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500"
          >
            {/* {content} */}
            <table className="w-full mt-4 text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Tên sách
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Số lượng
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Đơn giá
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Tổng tiền
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sachs.map(
                            (val,key) => {
                                return (
                                    <tr key={key}>

                                    <td class="p-4 ">
                                        <div class="flex items-center gap-3">
                                        <img src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${val.anh?val.anh:"default.png"}`}
                                            alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                                        <div class="flex flex-col">
                                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {val.tenSach}
                                            </p>
                                            {/* <p
                                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                            john@creative-tim.com
                                            </p> */}
                                        </div>
                                        </div>
                                    </td>
                                    <td class="p-2">
                                    {/* <div class="flex items-center gap-3">
                                    <input type='number' value={val.soLuong}
                                            onChange={(event) => handleQuantityChange(val.idGioHang, event)}
                                            min={1}
                                            className='max-w-10'
                                            ></input> */}
                           
                                    <div class="flex flex-col">
                                         
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                           {val.soLuong} Cuốn
                                        </p>
                                        </div>
                                        {/* </div> */}
                                      
                                    </td>
                                    <td class="p-4">
                                        <div class="flex flex-col">
                                        
                                        {/* <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {formatCurrency(val.giaBan)}
                                        </p> */}
                                        <p
                                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                            {val.giaGiam?formatCurrency(val.giaGiam):formatCurrency(val.giaBan)}
                                        </p>
                                        </div>
                                    </td>
                                    <td class="p-4 ">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {val.giaGiam? formatCurrency(val.giaGiam*val.soLuong):formatCurrency(val.giaBan*val.soLuong)}
                                        </p>
                                    </td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
                </table>
                <div className="col-span-10 h-[1px] w-full bg-black"></div>
                <div className='px-5'>
                <p className="my-3 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    - Số điện thoại người nhận sách: {dataXNDH.soDienThoai}.
                                    </p>
                <p className="my-3 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    - Địa chỉ giao hàng: {dataXNDH.diaChi}.
                                    </p>
                <p className="my-3 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    - Phí vận chuyển: {formatCurrency(dataXNDH.phiVanChuyen)}.
                                    </p>
                                    <p className="my-3 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    - Phương thức thanh toán: {dataXNDH.hinhThucThanhToan == 0?"Thanh toán trực tiếp":"Thanh toán online qua VNpay"}.
                                    </p>
                                    <p className="my-3 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    - Tổng giá tiền: {formatCurrency(totalAmount+dataXNDH.phiVanChuyen)}.
                                    </p>
</div>



          </div>
          <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
           
          <div className='pl-5 mt-5'>
               
                </div>
            <button
              data-ripple-dark="true"
              data-dialog-close="true"
              onClick={onClose}
              className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border"
            >
              Huỷ
            </button>


            <button
              data-ripple-light="true"
              data-dialog-close="true"
              onClick={handleDatHang}
              className="middle none center rounded-lg bg-orrange-500 from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              {dataXNDH.hinhThucThanhToan==0?"Xác nhận":"Thanh toán và xác nhận"}
            </button>
          </div>
        </div>
      </div>
  )
}

export default ViewXacNhanDatHang
