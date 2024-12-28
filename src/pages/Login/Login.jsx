import React, {useState} from 'react'
import background from '../../components/assets/background.png'
import ModalsDangKy from '../../components/Login/ModalsDangKy'
import { dangNhap, getURLLoginGoogle } from '../../context/LoginService'
import { useNavigate } from 'react-router-dom';
import ModalsQuenMatKhau from '../../components/Login/ModalsQuenMatKhau';
import google from '../../components/assets/google.png'
function Login() {

    const navigate = useNavigate()
    const [openModalsDangKy,setOpenModalsDangKy] = useState(false)
    const [openModalsQMK,setOpenModalsQMK] = useState(false)
    const [errorLogin, setErrorLogin] = useState('')
    // const [tenDangNhap, setTenDangNhap] = useState('')
    // const [matKhau, setMatKhau] = useState('')
    const [user,setUser] = useState({})
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setUser(values => ({...values, [name]: value}))
    }
    const handleSubmit = () => {
      // setUser({'tendangnhap':tenDangNhap,'matkhau':matKhau})
      const fetchData = async () => {
        try {
          const result = await dangNhap(user);
          setErrorLogin("")
          if(result.role === "KHACHHANG" ) {
            navigate("/trang-chu")
          } else navigate("/admin")

        } catch (error) {
          setErrorLogin("Tài khoản hoặc mật khẩu không chính xác!")
          console.log(error)
        }
      };
      fetchData(); 
    }
  const handleLoginGoogle = () => {
    const fetchData = async () => {
      try {
        const result = await getURLLoginGoogle();
        window.location.href=result.data
      } catch (error) {
        console.log(error)
      }
    };
    fetchData(); 
  }
  const hanhdleGoHome = () => {
    navigate("/")
  }
  return (
    <div
        className="bg-cover"
        style={{ backgroundImage: `url(${background})`, height: '100vh' }}>
            <div className='bg-zinc-300 opacity-85 mt-14 ml-20 absolute min-w-[500px] min-h-[400px] py-8 px-5'>
                <h1 className='text-black font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4'>Đăng nhập</h1>
                  <p className="text-red-600 h-6"> {errorLogin} </p>
                <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tên đăng nhập</label>
                        {/* {errorISBN && <p className="text-red-600 mt-2">{}</p>} */}
                        <input id="name" className="mb-5 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên đăng nhập" 
                        name='tendangnhap'
                        value={user.tendangnhap||''}
                        onChange={handleChange}
                        type='text'/>
                <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mật khẩu</label>
                        {/* {errorISBN && <p className="text-red-600 mt-2">{}</p>} */}
                        <input id="name" className="mb-1 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mật khẩu" 
                        name='matkhau'
                        value={user.matkhau||''}
                        onChange={handleChange}
                        type='password'/>
                        <p className='mb-5 cursor-pointer' onClick={()=> setOpenModalsQMK(true)}>* Quên mật khẩu?</p>
                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>handleSubmit()}>Đăng nhập</button>
                            <button className="mx-auto px-7 py-4 bg-white text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>setOpenModalsDangKy(true)}
                            >Đăng ký</button>
                        </div>
                        <div className="grid grid-cols-3 w-full mt-2"> 
                        <p className='mx-auto my-auto font-sans text-xs font-bold uppercase'>Hoặc:</p>
                        <button className="col-span-2 flex  items-center mx-auto  px-2 py-2 bg-white text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>handleLoginGoogle()}
                            >
                                  <img src={google} alt='Logo' 
                            className='h-5 w-auto mx-auto mr-2' 
                            />
                               Đăng nhập với Google
                              </button>
                            </div>
                            <div className='flex w-full '>
                            <p className='mx-auto mt-4 cursor-pointer text-orrange-500 rounded-lg font-sans text-xs font-bold underline' onClick={()=> hanhdleGoHome()}>Về trang chủ</p>
                            </div>
                        </div>
            
           < ModalsDangKy open={openModalsDangKy} onClose={()=>setOpenModalsDangKy(false)}/>
           < ModalsQuenMatKhau open={openModalsQMK} onClose={()=>setOpenModalsQMK(false)}/>
    </div>

  )
}

export default Login
