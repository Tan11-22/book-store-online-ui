import api, {AUTHENCATION_SERVICE} from  "./ApiConfig";
// import axios from 'axios';
export const dangKy = async (formData) => {
    try {
        const response = await api.post(`${AUTHENCATION_SERVICE}dang-ky`, formData);
        console.log(response.data);
        return response.data; // Trả về dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
      }
}

export const dangNhap = async (data) => {
  try {
      const response = await api.post(`${AUTHENCATION_SERVICE}login`, data);
      if(response.status === 200) {
        const token  = response.data.token;
        const username = response.data.username;
        const role = response.data.role;
        // console.log(token)
        localStorage.setItem('token', token); 
        localStorage.setItem("username",username)
        localStorage.setItem("role",role)
    }
      // console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}