import React ,{useState, useEffect, useRef}from 'react'
import ModalsSach from './ModalsSach'
import { layDSSachQT, layTCNXB, layTCTG, layTCTL, xoaSach } from '../../context/QuanTriSach'
import ModalsChiTietSach from './ModalsChiTietSach'
import ReactToPrint from 'react-to-print';
import ReportToPrint from './ReportToPrint';
import ModalsCapNhatSach from './ModalsCapNhatSach';
import Alert from '../Alert/Alert';
import ConfirmForm from '../Form/ConfirmForm';

function QuanTriSach() {
    // const data = [1,2,3,4,5,6,7,8,9,10]
    const [openModalsSach,setOpenModalsSach] = useState(false)
    const [openModalsCTSach,setOpenModalsCTSach] = useState(false)
    const [dataSachClick,setDataSachClick] = useState()
    const [sachXoa,setSachXoa] = useState({})
    const [dataSach,setDataSach] = useState([])
    const [dataTG, setDataTG] = useState([])
    const [dataTL, setDataTL] = useState([])
    const [dataNXB, setDataNXB] = useState([])
    const [search, setSearch] = useState('')
    const [refresh, setRefresh] = useState(false)

    const [openAlert, setOpenAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [typeAlert, setTypeAlert] = useState('success')
    const [openConfirmForm, setOpenConfirmForm] = useState(false)
    const [content, setContent] = useState('')
    const [reportData, setReportData] = useState(null);
    const handleOpenCTSach = (sach) =>{
        setDataSachClick(sach)
        setOpenModalsCTSach(true)
    }
    const componentRef = useRef();

    useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await layDSSachQT('');
                  setDataSach(result.data)
                  setReportData(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[refresh])
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                const fetchData = async () => {
                    try {
                      const result = await layDSSachQT(search);
                      setDataSach(result.data)
                    } catch (error) {
                      console.log(error)
                    }
                  };
                  fetchData(); 
            }
          }

    const handleSearch = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            try {
              const result = await layDSSachQT(search);
              setDataSach(result.data)
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }
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
    const handleXacNhanXoaSach = (val) => {
        setSachXoa(val)
        setContent('Bạn có chắc muốn xoá sách '+ val.tenSach+' không?')
        setOpenConfirmForm(true)
    }
            
    const handleCancelDeleteSach = () => {
        setSachXoa({})
        setOpenConfirmForm(false)
    }
            
    const handleDeleteSach = () => {
        const fetchData = async () => {
            try {
                const result = await xoaSach(
                    {
                        'isbn':sachXoa.isbn
                    }
                )
                if(result.code == 200){
                    setMessage(result.status)
                    setTypeAlert('success')
                    setOpenAlert(true)
                    setRefresh(!refresh)
                } else {
                    setMessage(result.status)
                    setTypeAlert('error')
                    setOpenAlert(true)
                }
                
            } catch (error) {
              console.log(error)
            }
          }
        fetchData();            
            
            
        setSachXoa({})
        setOpenConfirmForm(false)
    }  

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
                        value = {search}
                        onChange={(e)=>setSearch(e.target.value)}
                        onKeyDown={(e)=>handleKeyDown(e)}
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
                    type="button"
                    onClick={(event)=>handleSearch(event)}>
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
                   <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                    </svg>

                    Thêm mới 
                    </button>
                    <ReactToPrint
                        trigger={() => <button 
                        className='flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                        type='button'
                        >
                            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"/>
                            </svg>


                            Tạo report</button>}
                        content={() => componentRef.current}

                    />
                    <div className='hidden'>
                    <ReportToPrint ref={componentRef} data={reportData}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-2 px-0 overflow-scroll h-[85vh]">

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
                        Số lượng
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
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.tenNhaXuatBan}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={()=>handleOpenCTSach(val)}
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
                        <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                        
                                onClick={()=>handleXacNhanXoaSach(val)}
                                >
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" stroke="#000" strokeWidth="0.5" aria-hidden="true" className="w-4 h-4">
                                        <path
                                            d="M9 3a1 1 0 00-1 1v1H4.5a.5.5 0 000 1h.6l1.2 12.5A2.5 2.5 0 008.8 21h6.4a2.5 2.5 0 002.5-2.5L18.9 6h.6a.5.5 0 000-1H16V4a1 1 0 00-1-1H9zm1 2V4h4v1h-4zm-2.4 2h10.8l-1.2 12.5a1.5 1.5 0 01-1.5 1.5H8.8a1.5 1.5 0 01-1.5-1.5L6.6 7z"
                                        />
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
            <ModalsSach open={openModalsSach} onClose={()=>setOpenModalsSach(false)} dataTG={dataTG} dataTL={dataTL} dataNXB={dataNXB} refresh={()=>setRefresh(!refresh)}/>
            {/* <ModalsChiTietSach open={openModalsCTSach} onClose={()=>setOpenModalsCTSach(false)} data={dataSachClick}/> */}
            <ModalsCapNhatSach open={openModalsCTSach} onClose={()=>setOpenModalsCTSach(false)} 
            dataTG={dataTG} dataTL={dataTL} dataNXB={dataNXB} refresh={()=>setRefresh(!refresh)}
            data={dataSachClick}/>
             {openAlert && <Alert  message={message} onClose={()=>setOpenAlert(false)} type={typeAlert}/> }
                <ConfirmForm title={'Xác nhận xoá sách'}
                    isOpen={openConfirmForm}
                        content={content}
                        onClose1={()=>handleCancelDeleteSach()}
                        onClose2={()=>handleDeleteSach()}
                />
    </div>
  )
}

export default QuanTriSach
