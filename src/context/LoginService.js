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
        return response.data;
    }
    return true
      // console.log(response.data);
      // return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const getInfoKH = async () => {
  try {
      const response = await api.get(`${AUTHENCATION_SERVICE}get-info`, {
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

export const getInfoNV = async () => {
  try {
      const response = await api.get(`${AUTHENCATION_SERVICE}get-info-nv`, {
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

export const quenMatKhau = async (username, email) => {
  try {
      const response = await api.get(`${AUTHENCATION_SERVICE}quen-mat-khau`, {
        params: {
          "username": username,
          "email": email
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const doiMatKhau = async (data) => {
  try {
      const response = await api.post(`${AUTHENCATION_SERVICE}thay-doi-mat-khau`, data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}