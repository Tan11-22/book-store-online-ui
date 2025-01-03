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
  // for (let [key, value] of formData.entries()) {
  //     console.log(key, value);
  // }
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


export const capNhatSachQT = async (data) => {
  // for (let [key, value] of formData.entries()) {
  //     console.log(key, value);
  // }
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}sach/cap-nhat-sach`,data, {
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




// don nhap sach

export const layDSDonNhapQT = async () => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}don-nhap-sach/ds`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const layDSNXBQT = async () => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}don-nhap-sach/ds-nxb`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const layDSSachTheoNXBQT = async (maNXB) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}don-nhap-sach/ds-sach-nxb`, {
        params: {
          "maNXB": maNXB
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const taoDonNhapSachQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}don-nhap-sach/dat-nhap-sach`, data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const getChiTietDonNhapSach = async (idDon) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}don-nhap-sach/chi-tiet-don-nhap-sach`, {
        params: {
          "idDonNhap": idDon
        }
      });
      // console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const layChiTietDonNhapSach = async (idDon) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}don-nhap-sach/ct-don-nhap-sach`, {
        params: {
          "idDonNhap": idDon
        }
      });
      // console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const getChiTietPhieuNhapSach = async (soPhieuNhap) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}phieu-nhap/chi-tiet-phieu-nhap`, {
        params: {
          "spn": soPhieuNhap
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const huyDonNhap = async (idDon) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}don-nhap-sach/huy-don-nhap-sach`, {
        params: {
          "idDonNhap": idDon
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const taoPhieuNhapQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}phieu-nhap/tao-phieu`, data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const getSachVaGia = async (search) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}gia/ds`, {
        params: {
          "search": search
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const getCtGiaSach = async (isbn) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}gia/ct-gia`, {
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

export const themGiaMoi = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}gia/them-gia`, data);

      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const capNhatGia = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}gia/cap-nhat-gia`, data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const layDSPhieuNhapQT = async () => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}phieu-nhap/ds`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const getDoanhThu = async (year) => {
  try {
      const response = await api.get(`${SACH_MANAGE_SERVICE}sach/doanh-thu`,{
        params: {
          "year": year
        }
      });
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}



export const layDSTacGiaQT = async () => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}tac-gia/ds`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const themTacGiaQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}tac-gia/them`,data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const capNhatTacGiaQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}tac-gia/cap-nhat`,data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const xoaTacGiaQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}tac-gia/xoa`,data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const layDSTheLoaiQT = async () => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}the-loai/ds`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}


export const themTheLoaiQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}the-loai/them`,data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const capNhatTheLoaiQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}the-loai/cap-nhat`,data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const xoaTheLoaiQT = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}the-loai/xoa`,data);
      // console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
}

export const layDSDMS = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}don-mua-sach/ds`,data);
      // console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export const layCTDMS = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}don-mua-sach/ct-dms`,data);
      // console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export const capNhatDMS = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}don-mua-sach/cap-nhat-dms`,data);
      // console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export const capNhatGiaoDMS = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}don-mua-sach/giao-sach-thanh-cong`,data);
      // console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export const xoaSach = async (data) => {
  try {
      const response = await api.post(`${SACH_MANAGE_SERVICE}sach/xoa-sach`,data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}