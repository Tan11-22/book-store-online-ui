import api, {SACH_SERVICE} from  "./ApiConfig";
// import axios from 'axios';
export const getSach = async (start, size) => {
    try {
        const response = await api.get(`${SACH_SERVICE}sach/ds-sach`, {
          params: {
            start: start,
            size: size
          }
        });
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
}