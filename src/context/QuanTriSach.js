import api, {SACH_MANAGE_SERVICE} from  "./ApiConfig";
// import axios from 'axios';
export const layDSSachQT = async (search) => {
    try {
        const response = await api.get(`${SACH_MANAGE_SERVICE}sach/ds`, {
          params: {
            search: search
          }
        });
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
}

export const themSachQT = async (formData) => {
  for (let [key, value] of formData.entries()) {
      console.log(key, value);
  }
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}sach/them-sach`,formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const layTCTG = async () => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}sach/ds-tg`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const layTCTL = async () => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}sach/ds-tl`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const layTCNXB = async () => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}sach/ds-nxb`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}