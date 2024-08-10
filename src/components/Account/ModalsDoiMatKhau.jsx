import React, { useState } from 'react'
import Alert from '../Alert/Alert'
import { doiMatKhau } from '../../context/LoginService';
import { useNavigate } from 'react-router-dom';

function ModalsDoiMatKhau({open, onClose}) {
    const navigate = useNavigate()
    const closeAlert = () => {
        setShowAlert(false);
      };
      const [alertMessage, setAlertMessage] = useState('');
      const [showAlert, setShowAlert] = useState(false);
  
      const openAlert = (mess) => {
        setAlertMessage(mess);
        setShowAlert(true);
      }

    const handleClose = () => {
        onClose()
      }
     const [matKhauCu, setMatKhauCu] = useState('')
     const [erMK, setERMK] = useState('')
        const [mk1, setMK1]   = useState ('')
        const [mk2, setMK2] = useState('')
        const [erMK12, setERMK12] = useState('')
    const handleSubmit=() => {
        if (mk1 !== mk2) {
            setERMK12("Mật khẩu mới không trùng khớp!")
            return
        }
            const fetchData = async () => {
                try {
                    const data = {
                        "username": localStorage.getItem("username"),
                        "password": matKhauCu,
                        "newpassword":mk1
                    }
                  const result = await doiMatKhau(data);
                //   console.log(result)
                  if(result.code === 200) {
                    openAlert(result.status)
                    const timer = setTimeout(() => {
                      onClose();
                        localStorage.removeItem('username')
                        localStorage.removeItem('token')
                        localStorage.removeItem('role')
                        navigate("/login")
                    }, 3000); // 3000 milliseconds = 3 seconds
                
                    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
                  } else if (result.code === 201) {
                    setERMK(result.status)
                  }
                  
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
          }
    if(!open) return null
  return (
    <div>
      <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-opacity-50 h-[100vh]" >
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg min-w-[800px] ">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-black max-h-[80vh]  overflow-y-auto">
                        <div className="w-full flex justify-start text-gray-600 mb-3">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                            <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Đổi mật khẩu</h1>
                        </div>
                        


                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Mật khẩu cũ</label>
                        {erMK && <p className="text-red-600 mt-2">{erMK}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mật khẩu cũ" 
                        value={matKhauCu}
                        onChange={(e) => setMatKhauCu(e.target.value)}
                        type='password'/>

                       <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Mật khẩu mới</label>
                        {erMK12 && <p className="text-red-600 mt-2">{erMK12}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mật khẩu mới" 
                        value={mk1}
                        onChange={(e) => setMK1(e.target.value)}
                        type='password'/>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Nhập lại khẩu mới</label>
                        {erMK12 && <p className="text-red-600 mt-2">{erMK12}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Nhập lại khẩu mới" 
                        value={mk2}
                        onChange={(e) => setMK2(e.target.value)}
                        type='password'/>

                        
                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase"
                            onClick={()=>handleSubmit()} 
                            >Xác nhận</button>
                        </div>
                        <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" 
                         onClick={()=>handleClose()} role="button">
                            <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

export default ModalsDoiMatKhau