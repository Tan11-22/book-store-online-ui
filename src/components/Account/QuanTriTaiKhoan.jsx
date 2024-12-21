import React, { useEffect, useState } from 'react'
import ConfirmForm from '../Form/ConfirmForm'
import Alert from '../Alert/Alert'
import { capNhatTTTaiKhoan, getDSTaiKhoan } from '../../context/LoginService'
import ModalsTaoTaiKhoan from '../AdminComp/ModalsTaoTaiKhoan'

function QuanTriTaiKhoan() {
    const [message, setMessage] = useState('')
    const [typeAlert, setTypeAlert] = useState('success')
    const [refresh, setRefresh] = useState(false)
    const [openConfirmForm, setOpenConfirmForm] = useState(false)
    const [content, setContent] = useState('')
    const [data, setData] = useState([])
    const [type, setType] = useState(0)
    const [openAlert, setOpenAlert] = useState(false)
    const [user, setUser] = useState({})
    const [openFormTaoTaiKhoan,setOpenFormTaoTaiKhoan] = useState(false)
    useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await getDSTaiKhoan(type);
                  setData(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[refresh, type])
    
    const handleCapNhatTT = (tdn, tt) => {
        setUser({'tdn':tdn,'tt':!tt})
        setContent("Bạn muốn "+ (tt?"khoá":"mở")+ " tài khoản "+ tdn+" ?")
        setOpenConfirmForm(true)
    }
    const handleCapNhatTT1 = () => {
        const fetchData = async () => {
            try {
              const result = await capNhatTTTaiKhoan(user);
                if(result.code == 200) {
                    setRefresh(!refresh)
                }
                else {
                    setMessage(result.status)
                    setTypeAlert('error')
                    setOpenAlert(true)
                }
                setOpenConfirmForm(false)
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }
    return (
        <div>
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border h-[10vh] my-auto">
                    <div className="flex flex-col justify-between gap-8 mb-2 md:flex-row md:items-center">
                    <div>
                        <h5
                        className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Quản trị tài khoản:
                        </h5>
                        {/* <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        These are details about the last transactions
                        </p> */}
                        
                    </div>
                    <div className='col-span-2 mr-10'>

                    <div className='grid grid-cols-5  gap-2'>
                    <div className="w-full col-span-3">
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
                                <span className="ml-1 font-bold">Khách hàng</span>
                                </a>
                            </li>
                            <li className="ml-3 z-30 flex-auto text-center w-40">
                                <a
                                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${type == 0 ? 'bg-orrange-500 text-black' : 'bg-zinc-300'}`}
                                onClick={() => setType(0)}
                                role="tab"
                                aria-selected={type == 0}
                                aria-controls="app"
                                >
                                <span className="ml-1 font-bold">Nhân viên</span>
                                </a>
                            </li>
                        
                            </ul>
                        </div>

                        </div>
                            {
                                type == 0 &&
                                <button
                                className=" 
                                mt-2 col-span-2
                                max-w-44
                                flex select-none items-center gap-3 rounded-lg bg-orrange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                // disabled={disabledClickBTN}
                                onClick={()=>setOpenFormTaoTaiKhoan(true)}
                                >
                            <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                                </svg>
    
                                Tạo tài khoản
                                </button>
                            }
                       
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
                            Tài khoản
                            </p>
                        </th>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                           Họ và tên
                            </p>
                        </th>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                           Email
                            </p>
                        </th>

                            <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                Vai trò
                                </p>
                            </th>

                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 w-40 text-center align-middle">
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                                Trạng thái
                            </p>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data.map(
                                (val, key) => {
                                  return (
                                    <tr key ={key}>
                        <td className="py-4 pl-8 pr-4 border-b border-blue-gray-50 text-left align-middle">

                                <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                    {val.tenDangNhap}
                                </p>

                        </td>
                        <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.ho} {val.ten}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.email}
                            </p>
                        </td>

                            <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                           <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                                {val.tenQuyen}
                                </p>
                            </td>

                        <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                            <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                      
                            // onClick={()=>handleUpdateTheLoai(val)}
                            >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <input checked={val.trangThai} 
                                onClick={()=>handleCapNhatTT(val.tenDangNhap,val.trangThai)}
                            id="switch-component-red" type="checkbox" className="peer appearance-none w-11 h-5 bg-red-600 rounded-full checked:bg-lime-500 cursor-pointer transition-colors duration-300" />
                                <label for="switch-component-red" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-red-600 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-lime-500 cursor-pointer">
                            </label>
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
               
               {openAlert && <Alert  message={message} onClose={()=>setOpenAlert(false)} type={typeAlert}/> }
                <ConfirmForm title={'Xác nhận cập nhật trạng thái tài khoản'}
                    isOpen={openConfirmForm}
                        content={content}
                        onClose1={()=>setOpenConfirmForm(false)}
                        onClose2={()=>handleCapNhatTT1()}
                />
                <ModalsTaoTaiKhoan 
                    open={openFormTaoTaiKhoan}
                    onClose={()=>setOpenFormTaoTaiKhoan(false)}
                    refresh={()=>setRefresh(!refresh)}
                />
        </div>
      )
}

export default QuanTriTaiKhoan
