import React ,{useState, useEffect}from 'react'
import ModalsSach from './ModalsSach'
import { layDSSachQT, layTCNXB, layTCTG, layTCTL } from '../../context/QuanTriSach'
function QuanTriSach() {
    const data = [1,2,3,4,5,6,7,8,9,10]
    const [openModalsSach,setOpenModalsSach] = useState(false)

    const [dataSach,setDataSach] = useState([])
    const [dataTG, setDataTG] = useState([])
    const [dataTL, setDataTL] = useState([])
    const [dataNXB, setDataNXB] = useState([])
    useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await layDSSachQT('');
                  setDataSach(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[])
    useEffect (
            () => {
                const fetchData = async () => {
                    try {
                      const result = await layTCTG();
                      setDataTG(result.data)
                    } catch (error) {
                      console.log(error)
                    }
                  };
                  fetchData(); 
            }
            ,[])
    useEffect (
        () => {
            const fetchData = async () => {
                try {
                    const result = await layTCTL();
                    setDataTL(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[])        
    useEffect (
        () => {
            const fetchData = async () => {
                try {
                    const result = await layTCNXB();
                    setDataNXB(result.data)
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
                    Quản trị sách:
                    </h5>
                    {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    These are details about the last transactions
                    </p> */}
                </div>
                <div className="flex w-full gap-2 shrink-0 md:w-max">
                    <div className="w-full md:w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                        
                        <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200"
                        placeholder="Tìm kiếm" />
                        {/* <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Search
                        </label> */}
                    </div>
                    </div>
                    <button
                    className="flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>
                    Tìm 
                    </button>
                    <button
                    className="flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={()=>setOpenModalsSach(true)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        aria-hidden="true" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3">
                        </path>
                    </svg>
                    Thêm mới 
                    </button>
                </div>
                </div>
            </div>
            <div className="p-2 px-0 overflow-scroll h-[87vh]">
                <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Sách
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số trang
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        số lượng
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Tác giả
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Nhà xuất bản
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-black opacity-70">

                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {
                        dataSach.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                    <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                        <img src={`http://localhost:8080/api/quan-ly-sach-service/hinh-anh/get?name=${val.hinhAnhs[0]?val.hinhAnhs[0].filename:"default.png"}`}alt="Google"
                            className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1" />
                            <div>
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                               Mã sách: {val.isbn}
                            </p>
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                {val.tenSach}
                            </p>
                            </div>
                        
                        </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.soTrang}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.soLuong}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.tacGias[0] && `${val.tacGias[0].ho} ${val.tacGias[0].ten}`}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        {val.tenNhaXuatBan}
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            className="w-4 h-4">
                            <path
                                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                            </path>
                            </svg>
                        </span>
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
            </div>
            <ModalsSach open={openModalsSach} onClose={()=>setOpenModalsSach(false)} dataTG={dataTG} dataTL={dataTL} dataNXB={dataNXB}/>
    </div>
  )
}

export default QuanTriSach
