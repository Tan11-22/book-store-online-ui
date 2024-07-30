import React, {useState} from 'react'
import { dangKy } from '../../context/LoginService'
import Alert from '../Alert/Alert';

function ModalsDangKy({open, onClose}) {
    const handleClose = () => {
        onClose()
      }

      const closeAlert = () => {
        setShowAlert(false);
      };
  
      const openAlert = (mess) => {
        setAlertMessage(mess);
        setShowAlert(true);
      }

      const [alertMessage, setAlertMessage] = useState('');
      const [showAlert, setShowAlert] = useState(false);

      const [TDN, setTDN] = useState('')
      const [MK, setMK] = useState('')
      const [EMAIL, setEMAIL] = useState('')
      const [HO, setHO] = useState('')
      const [TEN, setTEN] = useState('')
      const [GIOITINH, setGIOITINH] = useState('0')
      const [DIACHI, setDIACHI] = useState('')
      const [NGAYSINH, setNGAYSINH] = useState('')
      const [SODIENTHOAI, setSODIENTHOAI] = useState('')

      const [errorTDN, setErrorTDN] = useState('')
      const [errorMK, setErrorMK] = useState('')
      const [errorEMAIL, setErrorEMAIL] = useState('')
      const [errorHO, setErrorHO] = useState('')
      const [errorTEN, setErrorTEN] = useState('')
    //   const [errorGIOITINH, setErrorGIOITINH] = useState('')
    //   const [errorDIACHI, setErrorDIACHI] = useState('')
    //   const [errorNGAYSINH, setErrorNGAYSINH] = useState('')
    //   const [errorSODIENTHOAI, setErrorSODIENTHOAI] = useState('')
    const handleDangKy= () => {

        const formData = new FormData();
        formData.append('tenDangNhap', TDN);
        formData.append('matKhau', MK);
        formData.append('email', EMAIL);
        formData.append('ho', HO);
        formData.append('ten', TEN);
        formData.append('gioiTinh', GIOITINH);
        formData.append('diaChi', DIACHI);
        formData.append('ngaySinh',NGAYSINH)
        formData.append('soDienThoai',SODIENTHOAI)
        // for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }
        const fetchData = async () => {
            try {
              const result = await dangKy(formData);
              console.log(result)
              if(result.code === 200) {
                openAlert("Đăng ký thành công!")
                const timer = setTimeout(() => {
                  onClose();
                }, 2000); // 3000 milliseconds = 3 seconds
            
                return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
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
      <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-opacity-50" >
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg min-w-[800px] ">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-black max-h-[80vh]  overflow-y-auto">
                        <div className="w-full flex justify-start text-gray-600 mb-3">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                            <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Đăng ký tài khoản</h1>
                        </div>
                        


                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Tên đăng nhập(*)</label>
                        {errorTDN && <p className="text-red-600 mt-2">{errorTDN}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên đăng nhập" 
                        value={TDN}
                        onChange={(e) => setTDN(e.target.value)}
                        type='text'/>

                       <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Mật khẩu(*)</label>
                        {errorMK && <p className="text-red-600 mt-2">{errorMK}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mật khẩu" 
                        value={MK}
                        onChange={(e) => setMK(e.target.value)}
                        type='password'/>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Email(*)</label>
                        {errorEMAIL && <p className="text-red-600 mt-2">{errorEMAIL}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Email" 
                        value={EMAIL}
                        onChange={(e) => setEMAIL(e.target.value)}
                        type='text'/>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Họ(*)</label>
                        {errorHO && <p className="text-red-600 mt-2">{errorHO}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Họ" 
                        value={HO}
                        onChange={(e) => setHO(e.target.value)}
                        type='text'/>


                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Tên(*)</label>
                        {errorTEN && <p className="text-red-600 mt-2">{errorTEN}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên" 
                        value={TEN}
                        onChange={(e) => setTEN(e.target.value)}
                        type='text'/>


                     

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Giới tính(*)</label>
                        <div>
                        <select
                            value={GIOITINH}
                            onChange={(e) => setGIOITINH(e.target.value)}
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border"
                            >
                            <option value='0' >Nam</option>
                            <option value='1' >Nữ</option>
                            </select>
                        </div>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Địa chỉ</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Địa chỉ" 
                        value={DIACHI}
                        onChange={(e) => setDIACHI(e.target.value)}
                        type='text'/>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Ngày sinh</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Ngày sinh" 
                        value={NGAYSINH}
                        onChange={(e) => setNGAYSINH(e.target.value)}
                        type='date'/>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Số điện thoại</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Số điện thoại" 
                        value={SODIENTHOAI}
                        onChange={(e) => setSODIENTHOAI(e.target.value)}
                        type='text'/>

                        
                        

                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase"
                            onClick={()=>handleDangKy()} 
                            >Đăng ký</button>
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

export default ModalsDangKy
