import React from 'react';
import logo from '../assets/logo.png'
const ReportToPrint = React.forwardRef(({ data }, ref) => (
  <div ref={ref}>
    <div className='grid grid-cols-2 gap-x-4 mx-auto px-2'>
        <div>
            <h5 className="block font-sans text-5xl antialiased font-semibold leading-snug tracking-normal text-black pl-5 pt-5">
                    Thống kê sách
            </h5>
        </div>
        <div className="mb-2 p-4">
            <div className='flex lg:flex-1 py-1'>
                <a href='#' className='flex lg:flex'>
                <img src={logo} alt='Logo' className='h-9 w-auto' />
                <p className='text-m font-bold leading-8 textblack'>RESETBOOKSTORE</p>
                </a>
            </div>
            <p className='text-xs font-normal leading-8 text-black'><strong>Địa chỉ: </strong>12 Nguyễn Đình Chiểu, Đa Kao, Quận 1, Hồ Chí Minh</p>
        </div>
    </div>
    <table className=" text-left table-auto min-w-min m-10">
                <thead>
                    <tr>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        STT
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Mã sách
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Tên sách
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số lượng đã nhập
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số lượng đã bán
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số lượng còn lại
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Tác giả
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Thể loại
                        </p>
                    </th>
                    <th className="p-4 border borderlue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Nhà xuất bản
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                { data &&
                        data.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                                    <td className="p-4 border borderlue-gray-50">
                                    <p className="block font-sans text-sm antialiased leading-normal text-black">
                                    {key+1}
                                    </p> </td>
                                    <td className="p-4 border borderlue-gray-50">
                                    <p className="block font-sans text-sm antialiased leading-normal text-black">
                                    {val.isbn}
                                    </p> </td>
                    <td className="p-4 border borderlue-gray-50">
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                {val.tenSach}
                            </p>
                    </td>
                    <td className="p-4 border borderlue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.soLuongNhap} cuốn
                        </p>
                    </td>
                    <td className="p-4 border borderlue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.soLuongBan} cuốn
                        </p>
                    </td>
                    <td className="p-4 border borderlue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.soLuong} cuốn
                        </p>
                    </td>
                    <td className="p-4 border borderlue-gray-50">
                        {val.tacGias && 
                            val.tacGias.map(
                                (val1, key1) =>{ return(
                                    <p key={key1} className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                        {`- ${val1.ho} ${val1.ten}`}
                                    </p>
                                )
                            }
                            )
                        }
                        
                    </td>
                    <td className="p-4 border borderlue-gray-50">
                        {val.theLoais && 
                            val.theLoais.map(
                                (val1, key1) =>{ return(
                                    <p key={key1} className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                        {`- ${val1.tenTheLoai}`}
                                    </p>
                                )
                            }
                            )
                        }
                        
                    </td>
                    <td className="p-4 border borderlue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.tenNhaXuatBan}
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
));

export default ReportToPrint;
