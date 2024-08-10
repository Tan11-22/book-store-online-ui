import React, {useState} from 'react'
import background from '../../components/assets/background.png'
import ModalsDangKy from '../../components/Login/ModalsDangKy'
import { dangNhap } from '../../context/LoginService'
import { useNavigate } from 'react-router-dom';
import ModalsQuenMatKhau from '../../components/Login/ModalsQuenMatKhau';

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
          // const role = localStorage.getItem('role')
          if (result) {
            setErrorLogin("Tài khoản hoặc mật khẩu không chính xác!")
          } else {
            setErrorLogin("")
          }
          if(result.role === "KHACHHANG" ) {
            navigate("/trang-chu")
          } else navigate("/admin")
        } catch (error) {
          console.log(error)
        }
      };
      fetchData(); 
    }
  return (
    <div
        className="bg-cover"
        style={{ backgroundImage: `url(${background})`, height: '100vh' }}>
            <div className='bg-zinc-300 opacity-85 mt-20 ml-16 absolute min-w-[500px] min-h-[400px] py-8 px-5'>
                <h1 className='text-black font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4'>Đăng nhập</h1>
                 {errorLogin && <p className="text-red-600 mt-2">{errorLogin}</p>}
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
            </div>
           < ModalsDangKy open={openModalsDangKy} onClose={()=>setOpenModalsDangKy(false)}/>
           < ModalsQuenMatKhau open={openModalsQMK} onClose={()=>setOpenModalsQMK(false)}/>
    </div>

  )
}

export default Login
