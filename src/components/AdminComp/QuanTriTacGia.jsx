import React, { useEffect, useState } from 'react'
import { capNhatTacGiaQT, layDSTacGiaQT, themTacGiaQT, xoaTacGiaQT } from '../../context/QuanTriSach';
import Alert from '../Alert/Alert';
import ConfirmForm from '../Form/ConfirmForm';


function QuanTriTacGia() {

    const [dataTG, setDataTG] = useState([])
    const [openAlert, setOpenAlert] = useState(false)
    const [ho,setHo] = useState('')
    const [ten,setTen] = useState('')
    const [tacGiaSelect, setTacGiaSelect] = useState({})
    const [message, setMessage] = useState('')
    const [typeAlert, setTypeAlert] = useState('success')
    const [refresh, setRefresh] = useState(false)
    const [openConfirmForm, setOpenConfirmForm] = useState(false)
    const [content, setContent] = useState('')
    // const handleOpenCTSach = (sach) =>{
    //     setDataSachClick(sach)
    //     setOpenModalsCTSach(true)
    // }
    // const componentRef = useRef();

    useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await layDSTacGiaQT();
                  setDataTG(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[refresh])
        const handleUpdateTacGia = (val) => {
            setTacGiaSelect(val)
            setHo(val.ho)
            setTen(val.ten)
        }
        const handleCancelUpdateTacGia = () => {
            setTacGiaSelect({})
            setHo("")
            setTen("")
        }
    const handleUpdateTacGia1 = () => {
        if (tacGiaSelect.ho == ho && tacGiaSelect.ten == ten) {
            setMessage('Bạn chưa thay đổi gì!')
            setTypeAlert('error')
            setOpenAlert(true)
            return 
        }
        const fetchData = async () => {
            try {
                const result = await capNhatTacGiaQT(
                    {
                        'idTacGia':tacGiaSelect.id ,
                        'ho':ho,
                        'ten':ten
                    }
                );
                setMessage(result.status)
                setTypeAlert('success')
                setOpenAlert(true)
                setRefresh(!refresh)
                handleCancelUpdateTacGia()
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }

    const handleAddNew = () => {
                const fetchData = async () => {
                try {
                    const result = await themTacGiaQT(
                        {
                            'ho':ho,
                            'ten':ten
                        }
                    );
                    setMessage(result.status)
                    setTypeAlert('success')
                    setOpenAlert(true)
                    setRefresh(!refresh)
                    setHo('')
                    setTen('')
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        
    }

    const handleDeleteTacGia = (val) => {
        handleCancelUpdateTacGia()
        setTacGiaSelect(val)
        setContent('Bạn có chắc muốn xoá tác giả '+ val.ho+' '+val.ten+' không?')
        setOpenConfirmForm(true)
    }

    const handleCancelDeleteTacGia = () => {
        handleCancelUpdateTacGia()
        // setContent('Bạn có chắc muốn xoá tác giả '+ val.ho+' '+val.ten+' không?')
        setOpenConfirmForm(false)
    }

    const handleDeleteTacGia1 = () => {
        const fetchData = async () => {
            try {
                const result = await xoaTacGiaQT(
                    {
                        'idTacGia':tacGiaSelect.id
                    }
                );
                setMessage(result.status)
                setTypeAlert('success')
                setOpenAlert(true)
                setRefresh(!refresh)
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 


        handleCancelUpdateTacGia()
        setOpenConfirmForm(false)
    }
    const disabledClickBTN = (ho === '' || ten === '') ? true:false
  return (
    <div>
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border h-[13vh] my-auto">
                <div className="flex flex-col justify-between gap-8 mb-2 md:flex-row md:items-center">
                <div>
                    <h5
                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Quản trị tác giả:
                    </h5>
                    {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    These are details about the last transactions
                    </p> */}
                    
                </div>
                <div className="flex  gap-2 ">
                    <div className='grid grid-cols-5  gap-2'>
                        {
                            tacGiaSelect.id && 
                            <div className='flex justify-end mt-2'>
                            <button
                                className=" 
                                h-10
                               
                                flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                // disabled={disabledClickBTN}
                                onClick={()=> handleCancelUpdateTacGia()}
                                >

                                    X
                                </button>
                                </div>
                        }
                    <div className="relative h-10  col-span-2 col-start-2 ">
                        
                    {/* <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Họ</label> */}
                        {/* {errorISBN && <p className="text-red-600 mt-2">{errorISBN}</p>} */}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Họ" 
                        value={ho}
                        onChange={(e) => setHo(e.target.value)}
                        type='text'/>
                    </div>
                    <div className="relative h-10 w-[120px] ">
                        
                        {/* {errorISBN && <p className="text-red-600 mt-2">{errorISBN}</p>} */}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên" 
                        value={ten}
                        onChange={(e) => setTen(e.target.value)}
                        type='text'/>
                    </div>
                    {
                        tacGiaSelect.id ? 

                        <button
                            className=" 
                            mt-2
                            flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            // disabled={disabledClickBTN}
                            onClick={handleUpdateTacGia1}
                            >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                            className="w-4 h-4">
                            <path
                                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                            </path>
                            </svg>

                            Cập nhật
                            </button>
                        :
                        <button
                            className=" 
                            mt-2
                            flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            disabled={disabledClickBTN}
                            onClick={handleAddNew}
                            >
                        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                            </svg>

                            Thêm mới 
                            </button>
                    }
                    
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
                        Id tác giả
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Họ và tên
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số lượng sáng tác
                        </p>
                    </th>
                    {/* <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Tác giả
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Nhà xuất bản
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
                        dataTG.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                    <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                        {/* <img src={`http://localhost:8080/api/quan-ly-sach-service/hinh-anh/get?name=${val.hinhAnhs[0]?val.hinhAnhs[0].filename:"default.png"}`}alt="Google"
                            className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1" /> */}
                            <div>
                            {/* <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                               Mã sách: {val.isbn}
                            </p> */}
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                {val.id}
                            </p>
                            </div>
                        
                        </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.ho} {val.ten}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.soLuongSangTac}
                        </p>
                    </td>
                    {/* <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.tacGias[0] && `${val.tacGias[0].ho} ${val.tacGias[0].ten}`}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {val.tenNhaXuatBan}
                        </p>
                    </td> */}
                    <td className="p-4 border-b border-blue-gray-50">
                        <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                  
                        onClick={()=>handleUpdateTacGia(val)}
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
                        {
                            val.soLuongSangTac == 0 ?
                            <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                    
                            onClick={()=>handleDeleteTacGia(val)}
                            >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" stroke="#000" strokeWidth="0.5" aria-hidden="true" className="w-4 h-4">
                                    <path
                                        d="M9 3a1 1 0 00-1 1v1H4.5a.5.5 0 000 1h.6l1.2 12.5A2.5 2.5 0 008.8 21h6.4a2.5 2.5 0 002.5-2.5L18.9 6h.6a.5.5 0 000-1H16V4a1 1 0 00-1-1H9zm1 2V4h4v1h-4zm-2.4 2h10.8l-1.2 12.5a1.5 1.5 0 01-1.5 1.5H8.8a1.5 1.5 0 01-1.5-1.5L6.6 7z"
                                    />
                                </svg>
                            </span>
                            </button>
                            :
                            <></>
                        }
                        
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
           
           {openAlert && <Alert  message={message} onClose={()=>setOpenAlert(false)} type={typeAlert}/> }
            <ConfirmForm title={'Xác nhận xoá tác giả'}
                isOpen={openConfirmForm}
                    content={content}
                    onClose1={()=>handleCancelDeleteTacGia()}
                    onClose2={()=>handleDeleteTacGia1()}
            />
    </div>
  )
}

export default QuanTriTacGia
