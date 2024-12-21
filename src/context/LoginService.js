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

        localStorage.setItem('token', token); 
        localStorage.setItem("username",username)
        localStorage.setItem("role",role)
        localStorage.setItem("hoTen",response.data.hoTen)
        localStorage.setItem("hinhAnh",response.data.hinhAnh)
        console.log(response.data)
        return response.data;
      }
      return false
  
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



export const dangNhapGoogle = async (code,scope, authuser, prompt) => {
  try {
      const response = await api.post(`${AUTHENCATION_SERVICE}login-google-callback`, {
        "code":code, "scope": scope, "authuser": authuser, "prompt":prompt
      });
      if(response.status === 200) {

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

export const getURLLoginGoogle = async () => {
  try {
      const response = await api.get(`${AUTHENCATION_SERVICE}login-google`);

        return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const getDSTaiKhoan = async (type) => {
  try {
      const response = await api.get(`${AUTHENCATION_SERVICE}ds-tai-khoan`,
        {
          params: {
            "type": type
          }
        }
      );
        console.log(response.data)
        return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export const capNhatTTTaiKhoan = async (data) => {
  try {
      const response = await api.post(`${AUTHENCATION_SERVICE}cap-nhat-tk`,
        data
      );
        console.log(response.data)
        return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export const taoTaiKhoanNV = async (data) => {
  try {
      const response = await api.post(`${AUTHENCATION_SERVICE}tao-tai-khoan-nv`,
        data
      );
        console.log(response.data)
        return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}



