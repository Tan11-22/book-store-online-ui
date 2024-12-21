import api, {SACH_SERVICE} from  "./ApiConfig";

export const getChiTietGioHang = async (username) => {
    try {
        const response = await api.get(`${SACH_SERVICE}gio-hang/chi-tiet-gio-hang`, {
          params: {
            "tendangnhap": username
          }
        });
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
  }
  


export const xoaSach = async (idGioHang) => {
    try {
        const response = await api.post(`${SACH_SERVICE}gio-hang/xoa`, {"idGioHang": idGioHang});
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
  }
  
  export const datMuaSach = async (data) => {
    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
    try {
        const response = await api.post(`${SACH_SERVICE}gio-hang/dat-mua-sach`,data);
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
  }
  export const taoThanhToan = async (data) => {
    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
    try {
        const response = await api.post(`${SACH_SERVICE}payment/create_payment`,data);
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
  }


  export const getDanhSachDonMua = async () => {
    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
    try {
        const response = await api.get(`${SACH_SERVICE}don-mua-sach/ds`, {
          params: {
            "tdn": localStorage.getItem("username")
          }
        });
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
  }

  export const huyDMS = async (data) => {
    try {
        const response = await api.post(`${SACH_SERVICE}don-mua-sach/huy-don-mua`, data);
        // console.log(response.data);
        return response.data; 
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
      }
  }


  
export const updateTrangThaiDonMua = async (tt) => {
    const data = {
          "tdn": localStorage.getItem("username"),
            "trangThai": parseInt(tt)
    }
    try {
        const response = await api.post(`${SACH_SERVICE}don-mua-sach/cap-nhat-don-mua`, data);
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
  }


