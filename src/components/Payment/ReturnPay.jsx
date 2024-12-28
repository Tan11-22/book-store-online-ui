import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { updateTrangThaiDonMua } from '../../context/GioHangService';
function ReturnPay() {
    const navigate = useNavigate();
    const [urlParams, setUrlParams] = useState(null);
    const [tt, setTT] = useState(0); // Khởi tạo giá trị state cho tt
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUrlParams(params);
    }, []); // Chỉ chạy một lần khi component được render lần đầu tiên

    useEffect(() => {
        if (urlParams) {
            const vnp_ResponseCode = urlParams.get('vnp_ResponseCode');
            console.log(vnp_ResponseCode)
            console.log(urlParams)
            // Cập nhật giá trị của tt dựa trên vnp_ResponseCode
            if (vnp_ResponseCode === "00") {
                setTT(1);
            } 
            else {
                setTT(0)
            }
        }
    }, [urlParams]); // Chạy effect này khi urlParams thay đổi

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const result = await updateTrangThaiDonMua(tt);
                if (result.code === 200 && tt == 1) {
                    navigate("/don-mua-sach");
                } else {
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData1();
    }, [urlParams, tt]); // Chạy effect này khi urlParams hoặc tt thay đổi

    console.log(urlParams)
    // if (!urlParams) {
    //     return null; // Hoặc có thể là một loading spinner, v.v.
    // }

    const handleGoCart = () => {
        navigate("/gio-hang")
    }
    if(loading) return null
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="text-center bg-red-50 border border-red-300 text-red-700 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Thanh toán thất bại</h1>
                <p className="mb-6">
                    Hệ thống thanh toán online hiện đang có vấn đề, vui lòng thử lại sau.
                </p>
                <button
                   onClick={()=>handleGoCart()}
                    className="inline-block px-6 py-2 text-white bg-orrange-500 hover:bg-red-700 rounded-lg shadow-md"
                >
                    Về giỏ hàng
                </button>
            </div>
        </div>
  )
}

export default ReturnPay
