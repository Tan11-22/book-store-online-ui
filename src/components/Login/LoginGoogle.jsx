import React, { useEffect, useState } from 'react';
import { dangNhapGoogle } from '../../context/LoginService';
import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';

function LoginGoogle() {
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {

    // Tạo đối tượng URLSearchParams để phân tích các tham số
    const urlParams = new URLSearchParams(window.location.search);

    // Lấy các giá trị tham số
    const code = urlParams.get("code");
    const scope = urlParams.get("scope");
    const authuser = urlParams.get("authuser");
    const prompt = urlParams.get("prompt");
    console.log(code)

    const fetchData = async () => {
      try {
        const result = await dangNhapGoogle(code,scope,authuser,prompt);
        if (result.code == 200) {
          const token  = result.data.token;
          const username = result.data.username;
          const role = result.data.role;

          localStorage.setItem('token', token); 
          localStorage.setItem("username",username)
          localStorage.setItem("role",role)
          localStorage.setItem("hoTen",result.data.hoTen)
          localStorage.setItem("hinhAnh",result.data.hinhAnh)
          localStorage.setItem("picture",result.data.pictureGoogle)
          console.log(result.data)
          if(result.role === "KHACHHANG" ) {
            navigate("/trang-chu")
          } else navigate("/admin")
        }
        else {
          setLoading(false)
        }
        
      } catch (error) {
        console.log(error)
      }
    };
    fetchData(); 
    // Bạn có thể sử dụng các giá trị này theo nhu cầu, ví dụ gửi chúng đến API
  }, []);
  const hanhdleGoHome = () => {
    navigate("/")
  }
  if(isLoading) return null
  return (
    <div>
       <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="text-center bg-red-50 border border-red-300 text-red-700 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Đăng nhập thất bại</h1>
                <p className="mb-6">
                    Hệ thống hiện đang có vấn đề, vui lòng thử lại sau.
                </p>
                <button
                   onClick={()=>hanhdleGoHome()}
                    className="inline-block px-6 py-2 text-white bg-orrange-500 hover:bg-red-700 rounded-lg shadow-md"
                >
                    Về trang chủ
                </button>
            </div>
        </div>
    </div>
  );
}

export default LoginGoogle;
