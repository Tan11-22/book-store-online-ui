import React, {useState, useEffect} from 'react'
import { layDSPhieuNhapQT } from '../../../context/QuanTriSach';
import ModalsChiTietPhieuNhap from './ModalsChiTietPhieuNhap';

function QuanTriPhieuNhap() {
    const [dataPN,setDataPN] = useState([])
    const [openModalsCT, setOpenModalsCT] = useState(false)
    const [soPhieuNhapCT, setSoPhieuNhapCT] = useState(0)

    const handleOpenModalsCT = (spn) =>{
        setSoPhieuNhapCT(spn)
        setOpenModalsCT(true)
    }
    const formatDate = (dateString) => {
        // Tách chuỗi ngày thành các phần tử
        const [year, month, day] = dateString.split(' ')[0].split('-');
        // Sắp xếp lại các phần tử theo định dạng dd-MM-yyyy
        return `${day}-${month}-${year}`;
      }

      useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await layDSPhieuNhapQT();
                  console.log(result.data)
                  setDataPN(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[])
  return (
    <div>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border h-[10vh] my-auto">
                <div className="flex flex-col justify-between gap-8 mb-2 md:flex-row md:items-center">
                <div>
                    <h5
                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Danh sách phiếu nhập:
                    </h5>
                    {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    These are details about the last transactions
                    </p> */}
                </div>
                <div className="flex w-full gap-2 shrink-0 md:w-max">

                    
                    {/* <button
                    className="flex select-none items-center gap-3 h-10 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={()=>setOpenModalsTaoDonNhap(true)}
                    >
                    <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z" clip-rule="evenodd"/>
                    </svg>

                        Tạo đơn
                    </button> */}
                </div>
                </div>
            </div>
            <div className="p-2 px-0 overflow-scroll h-[87vh]">
                <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số phiếu nhập
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Id đơn nhập
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Mã nhân viên
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Ngày lập
                        </p>
                    </th>
                    {/* <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Tạo phiếu nhập
                        </p>
                    </th> */}
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-black opacity-70">

                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {
                        dataPN.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                    <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                        {/* <img src={`http://localhost:8080/api/quan-ly-sach-service/hinh-anh/get?name=${val.hinhAnhs[0]?val.hinhAnhs[0].filename:"default.png"}`}alt="Google"
                            className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1" />
                            <div> */}
                            {/* <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                               Mã sách: {val.isbn}
                            </p> */}
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                #{val.soPhieuNhap}
                            </p>
                            {/* </div> */}
                        
                        </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                #{val.idDonNhapSach}
                            </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.maNhanVien}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {formatDate(val.ngayLap)}
                        </p>
                    </td>
                    {/* <td className="p-4 border-b border-blue-gray-50">
                    <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                            onClick={()=>handleOpenModalsTaoPN(val.idDonNhapSach)}
                        >
                        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clip-rule="evenodd"/>
                            </svg>

                        </button>
                    </td> */}
                    <td className="p-4 border-b border-blue-gray-50">
                        <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                            onClick={()=>handleOpenModalsCT(val.soPhieuNhap)}
                        >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            className="w-4 h-4">
                            <path
                                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                            </path>
                            </svg>
                        </span>
                        </button>
                        {/* <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={()=> handleHuyDonNhapSach(val.idDonNhapSach)}>
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </span>
                        </button> */}
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
            <ModalsChiTietPhieuNhap open={openModalsCT} onClose={()=>setOpenModalsCT(false)}  soPhieuNhap={soPhieuNhapCT}/>
    </div>
  )
}

export default QuanTriPhieuNhap
