import React from 'react'
import { formatCurrency } from '../../context/utility';
import logo from '../assets/logo.png'
const ReportDoanhThu = React.forwardRef(({ data, nam }, ref) => (
    <div ref={ref}>
        <div className='ml-10 mt-10'>
            <h5 className="block font-sans text-5xl antialiased font-semibold leading-snug tracking-normal text-black ">
                    Thống kê doanh thu năm {nam}
            </h5>

            <div className='flex lg:flex-1 py-1'>
                <a href='#' className='flex lg:flex'>
                <img src={logo} alt='Logo' className='h-9 w-auto' />
                <p className='text-m font-bold leading-8 textblack'>RESETBOOKSTORE</p>
                </a>
            </div>
            <p className='text-xs font-normal leading-8 text-black'><strong>Địa chỉ: </strong>12 Nguyễn Đình Chiểu, Đa Kao, Quận 1, Hồ Chí Minh</p>
        </div>
        <table className="text-left table-auto min-w-max mx-[2px] my-10">
                                <thead>
                                    <tr>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                            Danh mục
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                        Tháng 1
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                        Tháng 2
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                        Tháng 3
                                        </p>
                                    </th>

                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black ">
                                        Tháng 4
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 5
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 6
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 7
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 8
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 9
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 10
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 11
                                        </p>
                                    </th>
                                    <th className="p-4 border border-blue-gray-100 bg-blue-gray-50/50">
                                        <p className="block font-sans text-sm antialiased font-bold leading-none text-black">
                                        Tháng 12
                                        </p>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Số lượng sách nhập
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {data[0].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[1].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[2].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[3].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[4].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[5].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[6].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[7].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[8].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[9].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[10].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[11].tongSoSachNhap} cuốn
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Chi phí
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {formatCurrency(data[0].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[1].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[2].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[3].thanhTienNhap) }
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[4].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[5].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[6].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[7].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[8].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[9].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[10].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[11].thanhTienNhap)} 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Số lượng sách bán
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {data[0].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[1].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[2].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[3].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[4].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[5].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[6].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[7].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[8].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[9].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[10].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {data[11].tongSoSachBan} cuốn
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                                Doanh số
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {formatCurrency(data[0].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[1].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[2].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[3].thanhTienBan) }
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[4].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[5].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[6].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[7].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[8].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[9].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[10].thanhTienBan)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[11].thanhTienBan)} 
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                                Tổng cộng
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                              {formatCurrency(data[0].thanhTienBan - data[0].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[1].thanhTienBan - data[1].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[2].thanhTienBan - data[2].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[3].thanhTienBan - data[3].thanhTienNhap) }
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[4].thanhTienBan - data[4].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[5].thanhTienBan - data[5].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[6].thanhTienBan - data[6].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[7].thanhTienBan - data[7].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[8].thanhTienBan - data[8].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[9].thanhTienBan - data[9].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[10].thanhTienBan - data[10].thanhTienNhap)}
                                            </p>
                                        </td>
                                        <td className="p-4 border border-blue-gray-50">
                                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                            {formatCurrency(data[11].thanhTienBan - data[11].thanhTienNhap)} 
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
    </div>
))
export default ReportDoanhThu
