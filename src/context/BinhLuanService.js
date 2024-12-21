import api, {SACH_SERVICE} from  "./ApiConfig";



export const binhLuan = async (data) => {
    // console.log("check data truyen", data)
    try {
        const response = await api.post(`${SACH_SERVICE}binh-luan/tao`, data);
        // console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
}

export const LayDSBinhLuanCuaSach = async (isbn,start,size) => {
    console.log("check input", isbn, start, size)
    try {
        const response = await api.post(`${SACH_SERVICE}binh-luan/ds-binh-luan`, {"isbn":isbn,"start":start,"size":size});
        return response.data; 
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
      }
}

export const laySoLuongBinhLuan = async (isbn) => {
  // console.log("check input", isbn, start, size)
  try {
      const response = await api.post(`${SACH_SERVICE}binh-luan/so-luong-binh-luan`, {"isbn":isbn});
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
}