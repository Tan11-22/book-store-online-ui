import axios from "axios";
const baseURLGHN = 'https://online-gateway.ghn.vn/shiip/public-api/'

const apiGHN = axios.create({
    baseURL: baseURLGHN,
    timeout: 20000,
    headers: {
        // 'X-Custom-Header': 'foobar',
        'token': '4863912d-819b-11ef-8f6b-eaf725c35364'
    }
  });

  export const getProvince = async () => {
    try {
      const response = await apiGHN.get('master-data/province');
        // console.log("kết quả ghn", response.data.code)
      // Kiểm tra dữ liệu trước khi xử lý
      if (response.data.code ==200) {
        const filteredData = response.data.data.map(({ ProvinceID, ProvinceName }) => ({
          ProvinceID,
          ProvinceName,
        }))
        .sort((a, b) => a.ProvinceName.localeCompare(b.ProvinceName));
        // console.log('Danh sách tỉnh:', filteredData);
  
        return filteredData; // Trả về dữ liệu đã lọc
      } else {
        throw new Error('API không trả về dữ liệu hợp lệ');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu tỉnh:', error.message || error);
      throw error; // Đẩy lỗi lên để xử lý bên ngoài
    }
  };


  export const getDistrict = async (id) => {
    try {
      const response = await apiGHN.get('master-data/district',{params:{"province_id":id}});
        console.log("id", id)
      // Kiểm tra dữ liệu trước khi xử lý
      if (response.data.code ==200) {
        const filteredData = response.data.data.map(({ DistrictID, DistrictName }) => ({
          DistrictID,
          DistrictName,
        }))
        .sort((a, b) => a.DistrictName.localeCompare(b.DistrictName));
        // console.log('Danh sách quận:', filteredData);
        return filteredData; // Trả về dữ liệu đã lọc
      } else {
        throw new Error('API không trả về dữ liệu hợp lệ');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu tỉnh:', error.message || error);
      throw error; // Đẩy lỗi lên để xử lý bên ngoài
    }
  };


  export const getWard = async (id) => {
    try {
      const response = await apiGHN.get('master-data/ward',{params:{"district_id":id}});
        // console.log("id", id)
      // Kiểm tra dữ liệu trước khi xử lý
      if (response.data.code ==200) {
        const filteredData = response.data.data.map(({ WardCode, WardName }) => ({
          WardCode,
          WardName,
        }))
        .sort((a, b) => a.WardName.localeCompare(b.WardName));
        // console.log('Danh sách quận:', filteredData);
        return filteredData; // Trả về dữ liệu đã lọc
      } else {
        throw new Error('API không trả về dữ liệu hợp lệ');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu tỉnh:', error.message || error);
      throw error; // Đẩy lỗi lên để xử lý bên ngoài
    }
  };


  export const getFee = async (totalAmount, wardCode, districtId, weight, totalPage ) => {
    const height = Math.ceil(totalPage/100)
    try {
      const response = await apiGHN.get('v2/shipping-order/fee',
        {params:{
          "service_type_id":2,
          "insurance_value":totalAmount,
          "coupon":"",
          "to_ward_code": wardCode,
          "to_district_id":districtId,
          "from_district_id": 1451,
          "weight": weight,
          "lenght": 25,
          "width":25,
          "height": height
        }});
        // console.log("id", id)
      // Kiểm tra dữ liệu trước khi xử lý
      if (response.data.code ==200) {
        // const filteredData = response.data.data.map(({ WardCode, WardName }) => ({
        //   WardCode,
        //   WardName,
        // }))
        // .sort((a, b) => a.WardName.localeCompare(b.WardName));
        // // console.log('Danh sách quận:', filteredData);
        return response.data.data.total; // Trả về dữ liệu đã lọc
      } else {
        throw new Error('API không trả về dữ liệu hợp lệ');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu tỉnh:', error.message || error);
      throw error; // Đẩy lỗi lên để xử lý bên ngoài
    }
  };
  
  
