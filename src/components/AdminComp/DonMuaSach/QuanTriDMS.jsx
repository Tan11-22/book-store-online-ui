import React, { useEffect, useState } from 'react'
import { layDSDMS } from '../../../context/QuanTriSach'
import create from '../../assets/create.png'
import info from '../../assets/infodm.png'
import FormXacNhanDuyet from './FormXacNhanDuyet'
import FormXacNhanGiao from './FormXacNhanGiao'
import FormChiTietDonHang from './FormChiTietDonHang'
function QuanTriDMS() {
    const [type,setType] = useState(1)
    const [dataDon,setDataDon] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [donSelect,setDonSelect] = useState()
    const [openFormXND, setOpenFormXND] = useState(false)
    const [openFormXNG, setOpenFormXNG] = useState(false)
    const [openFormCT, setOpenFormCT] = useState(false)
    useEffect (
            () => {
                const fetchData = async () => {
                    const data = {'type':parseInt(type)}
                    try {
                      const result = await layDSDMS(data);
                      setDataDon(result.data)
                    } catch (error) {
                      console.log(error)
                    }
                  };
                  fetchData(); 
            }
            ,[type,refresh])
    const formatDate = (dateString) => {
        // Tách chuỗi ngày thành các phần tử
        const [year, month, day] = dateString.split('-');
        // Sắp xếp lại các phần tử theo định dạng dd-MM-yyyy
        return `${day}-${month}-${year}`;
      }
    const handleDuyetDon = (val) => {
        setDonSelect(val)
        if(type == 1) {
            setOpenFormXND(true)
        }
        else if (type == 2) {
            setOpenFormXNG(true)
        } else {
            setOpenFormCT(true)
        }
       
    }
  return (
    <div>
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border h-[10vh] my-auto">
                <div className="flex flex-col justify-between gap-8 mb-2 md:flex-row md:items-center">
              
                </div>


                    <div className='grid grid-cols-6  gap-2'>
                        <div className="w-full col-span-2">
                            <h5
                            className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Danh sách đơn mua sách:
                            </h5>

                    </div>
                    <div className="w-full col-span-4">
                        <div className="relative right-0">
                            <ul
                            className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60 mt-2"
                            data-tabs="tabs"
                            role="list"
                            >
                           
                            <li className=" z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${type == 1 ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => setType(1)}
                                role="tab"
                                aria-selected={type == 1}
                                aria-controls="message"
                                >
                                <span className="ml-1 font-bold">Đơn chờ duyệt</span>
                                </a>
                            </li>
                            <li className="ml-3 z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${type == 2 ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => setType(2)}
                                role="tab"
                                aria-selected={type == 2}
                                aria-controls="app"
                                >
                                <span className="ml-1 font-bold">Đơn chờ giao</span>
                                </a>
                            </li>

                            <li className="ml-3 z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${type == 3 ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => setType(3)}
                                role="tab"
                                aria-selected={type == 3}
                                aria-controls="app"
                                >
                                <span className="ml-1 font-bold">Đơn hoàn thành</span>
                                </a>
                            </li>
                        
                            <li className="ml-3 z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${type == 4 ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => setType(4)}
                                role="tab"
                                aria-selected={type == 4}
                                aria-controls="app"
                                >
                                <span className="ml-1 font-bold">Đơn bị huỷ</span>
                                </a>
                            </li>
                            </ul>
                        </div>

                        </div>
                            
                       
                        </div>




                
                </div>
            </div>
            <div className="p-2 px-0 overflow-scroll h-[88vh]">
                <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Id đơn
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Người đặt
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số điện thoại
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Ngày đặt
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Trạng thái thanh toán
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        {(type == 1 || type ==2) ?
                           "Duyệt đơn"
                            :
                           "Chi tiết"
                        } 
                            
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {
                        dataDon.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                
                    
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                #{val.idDonMuaSach}
                            </p>

                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                        {/* <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                               Mã: {val.maNhaXuatBan}
                            </p> */}
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                               {val.hoTen}
                            </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.sdt}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {formatDate(val.ngayMua)}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                    
                    {val.trangThaiThanhToan==1? 
                    <>
                        <p className="block font-sans text-sm antialiased  leading-normal text-black">
                            Chưa thanh toán
                        </p>
                    </>
                    :
                    <>
                        <p className="block font-sans text-sm antialiased  leading-normal text-black">
                            Đã thanh toán
                        </p>
                    </>
                }

                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                        <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={()=> handleDuyetDon(val)}
                        >
                       
                           {(type == 1 || type ==2) ?
                           <img src={create} alt='Logo' className='h-10 w-auto' />
                            :
                            <img src={info} alt='Logo' className='h-10 w-auto' />
                        } 
        
                        </button>
                    </td>
                                </tr>
                              )
                            }
                          )
                    }


                </tbody>
                </table>
            </div>
            <FormXacNhanDuyet open={openFormXND} onClose={()=>setOpenFormXND(false)}  data={donSelect} refresh={()=>setRefresh(!refresh)}/>
            <FormXacNhanGiao open={openFormXNG} onClose={()=>setOpenFormXNG(false)}  data={donSelect} refresh={()=>setRefresh(!refresh)}/>
            <FormChiTietDonHang open={openFormCT} onClose={()=>setOpenFormCT(false)}  data={donSelect} />
            </div>
  )
}

export default QuanTriDMS
