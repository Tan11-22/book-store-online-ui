import api, {SACH_SERVICE} from  "./ApiConfig";

export const getSLSachGH = async (user) => {
    try {
        const response = await api.get(`${SACH_SERVICE}gio-hang/so-luong`, {
          params: {
            tendangnhap: user
          }
        });
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
}


export const themSachVaoGH = async (username,isbn,soLuong) => {
    try {
        const data = {
            "tenDangNhap": username,
            "isbn":isbn,
            "soLuong": soLuong
           }
        const response = await api.post(`${SACH_SERVICE}gio-hang/them`,data);
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
}


export const getChiTietSach = async (isbn) => {
  // const user = "nva"
  try {
      const response = await api.get(`${SACH_SERVICE}sach/chi-tiet-sach`, {
        params: {
          "isbn": isbn
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const timSach = async (search,start,size) => {
  // const user = "nva"
  try {
      const response = await api.get(`${SACH_SERVICE}sach/tim-sach`, {
        params: {
          "search": search,
          "start": start,
          "size": size
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}
