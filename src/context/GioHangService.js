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