import React, {useState} from 'react'
import background from '../../components/assets/background.png'
import ModalsDangKy from '../../components/Login/ModalsDangKy'
import { dangNhap } from '../../context/LoginService'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()
    const [openModalsDangKy,setOpenModalsDangKy] = useState(false)

    const [tenDangNhap, setTenDangNhap] = useState('')
    const [matKhau, setMatKhau] = useState('')
    const [user,setUser] = useState({})
    const handleSubmit = () => {
      setUser({'tendangnhap':tenDangNhap,'matkhau':matKhau})
      const fetchData = async () => {
        try {
          const result = await dangNhap(user);
          const role = localStorage.getItem('role')
          if(role === "KHACHHANG" ) {
            navigate("/trang-chu")
          } else navigate("/admin")
          // console.log(result)
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
                <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tên đăng nhập</label>
                        {/* {errorISBN && <p className="text-red-600 mt-2">{}</p>} */}
                        <input id="name" className="mb-5 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên đăng nhập" 
                        value={tenDangNhap}
                        onChange={(e)=>setTenDangNhap(e.target.value)}
                        type='text'/>
                <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mật khẩu</label>
                        {/* {errorISBN && <p className="text-red-600 mt-2">{}</p>} */}
                        <input id="name" className="mb-1 mt-2 text-black focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mật khẩu" 
                        value={matKhau}
                        onChange={(e)=>setMatKhau(e.target.value)}
                        type='password'/>
                        <p className='mb-5'>* Quên mật khẩu?</p>
                <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>handleSubmit()}>Đăng nhập</button>
                            <button className="mx-auto px-7 py-4 bg-white text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>setOpenModalsDangKy(true)}
                            >Đăng ký</button>
                        </div>
            </div>
           < ModalsDangKy open={openModalsDangKy} onClose={()=>setOpenModalsDangKy(false)}/>
    </div>

  )
}

export default Login
