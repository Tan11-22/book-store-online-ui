import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { updateTrangThaiDonMua } from '../../context/GioHangService';
function ReturnPay() {
    const navigate = useNavigate();
    const [urlParams, setUrlParams] = useState(null);
    const [tt, setTT] = useState(); // Khởi tạo giá trị state cho tt

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUrlParams(params);
    }, []); // Chỉ chạy một lần khi component được render lần đầu tiên

    useEffect(() => {
        if (urlParams) {
            const vnp_ResponseCode = urlParams.get('vnp_ResponseCode');
            
            // Cập nhật giá trị của tt dựa trên vnp_ResponseCode
            if (vnp_ResponseCode === "00") {
                setTT(1);
            } else {
                setTT(0);
            }
        }
    }, [urlParams]); // Chạy effect này khi urlParams thay đổi

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const result = await updateTrangThaiDonMua(tt);
                if (result.code === 200) {
                    navigate("/don-mua-sach");
                } else {
                    navigate("/gio-hang");
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (tt) {
            fetchData1();
        }
    }, [urlParams, tt, navigate]); // Chạy effect này khi urlParams hoặc tt thay đổi

    // Render một cái gì đó khi urlParams chưa được thiết lập
    if (!urlParams) {
        return null; // Hoặc có thể là một loading spinner, v.v.
    }


  return (
    <div>
        Hello World
    </div>
  )
}

export default ReturnPay
