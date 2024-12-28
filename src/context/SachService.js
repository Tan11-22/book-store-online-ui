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

export const getSachCungTheLoai = async (isbn) => {
  // const user = "nva"
  try {
      const response = await api.get(`${SACH_SERVICE}sach/sach-tuong-tu`, {
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



export const demSoLuongSachTimRa = async (search) => {
  // const user = "nva"
  try {
      const response = await api.get(`${SACH_SERVICE}sach/tong-sl-sach-tim`, {
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


export const layDSTacGia = async () => {
  // const user = "nva"
  try {
      const response = await api.get(`${SACH_SERVICE}sach/ds-tg`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const layDSTheLoai = async () => {
  // const user = "nva"
  try {
      const response = await api.get(`${SACH_SERVICE}sach/ds-tl`);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}



export const postCountTimSach1 = async (search,filterTG,filterTL) => {
  // const user = "nva"
  const idListTG = filterTG.map(item => item.idTacGia);
  const idListTL = filterTL.map(item => item.idTheLoai);
  // console.log(idListTG,idListTL)
  const data = {
    "search": search,
    "tacGiaIDs":idListTG,
    "theLoaiIDs": idListTL
   }
  try {
      const response = await api.post(`${SACH_SERVICE}sach/search-amount`,data);
      // console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}

export const postTimSach1 = async (search,filterTG,filterTL,sapXep,start,size) => {
  // const user = "nva"
  const idListTG = filterTG.map(item => item.idTacGia);
  const idListTL = filterTL.map(item => item.idTheLoai);
  const data = {
    "search": search,
    "tacGiaIDs":idListTG,
    "theLoaiIDs": idListTL,
    "sapXep":sapXep,
    "start":start,
    "size":size
   }
  try {
      const response = await api.post(`${SACH_SERVICE}sach/search`,data);
      console.log(response.data);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lỗi để xử lý phía ngoài nếu cần thiết
    }
}