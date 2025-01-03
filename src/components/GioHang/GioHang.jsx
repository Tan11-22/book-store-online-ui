import React,{useEffect, useState} from 'react'
import { datMuaSach, getChiTietGioHang, taoThanhToan, xoaSach } from '../../context/GioHangService'
import { formatCurrency } from '../../context/utility'
import Alert from '../Alert/Alert'
import { useNavigate } from 'react-router-dom';
import { getDistrict, getFee, getProvince, getWard } from '../../context/ApiGHN';
import ViewXacNhanDatHang from './ViewXacNhanDatHang';


function GioHang({refresh}) {
    const navigate = useNavigate()
    const [sachs, setSachs] = useState([])
    const [loading, setLoading] = useState(true)
    const username = localStorage.getItem("username")
    const [diaChiGiaoHang, setDiaChiGiaoHang] = useState('')
    const [phuongThucThanhToan, setPhuongThucThanhToan] = useState('0')
    const [errorDCG,setErrorDCG] = useState('')

    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const [errorDH, setErrorDH] = useState('')
    const [dataProvince, setDataProvince] = useState([])
    const [selectProvince, setSelectProvince] = useState('')

    const [dataDistrict, setDataDistrict] = useState([])
    const [selectDistrict, setSelectDistrict] = useState('')

    const [dataWard, setDataWard] = useState([])
    const [selectWard, setSelectWard] = useState('')
    const [soNha, setSoNha] = useState('')

    const [fee,setFee] = useState(0)
    const [sdtNguoiNhan, setSdtNguoiNhan] = useState('')

    const [openVXacNhan, setOpenVXacNhan] = useState(false)
    const [dataXNDonHang, setDataXNDonHang] = useState({})
    // const [refresh,setRefresh] = useState(false)
    useEffect(
        () => {
            const fetchData = async () => {
                try {
                  const result = await getChiTietGioHang(username)
                  const responseProvince = await getProvince()
                  setSelectProvince(responseProvince[0].ProvinceID) 
                  setDataProvince(responseProvince)
                    setSachs(result.data)
                    setLoading(false)
                    console.log(result.data)
                } catch (error) {
                  console.log(error)
                }
              }
              fetchData() 
        }, 
        []
    )

    useEffect(
        () => {
            const fetchData = async () => {
                try {
                //   const result = await getChiTietGioHang(username)
                  const responseDistrict = await getDistrict(selectProvince)
                  setDataDistrict(responseDistrict)
                  setSelectDistrict(responseDistrict[0].DistrictID) // fix lần đầu load page ko tải được Ward
                //   console.log(selectDistrict)
                } catch (error) {
                  console.log(error)
                }
              }
              fetchData() 
        }, 
        [selectProvince]
    )


    useEffect(
        () => {
            const fetchData = async () => {
                try {
                //   const result = await getChiTietGioHang(username)
                // const id = (selectDistrict ==='') ? dataDistrict[0].DistrictID : selectDistrict
                // if(selectDistrict ==='') setSelectDistrict()
                  const responseWard = await getWard(selectDistrict)
                    setSelectWard(responseWard[0].WardCode)
                  setDataWard(responseWard)
                     console.log(selectDistrict,"check")
                } catch (error) {
                  console.log(error)
                }
              }
              fetchData() 
        }, 
        [selectDistrict]
    )


    const handleXoaSach = (idGioHang) => {
        const fetchData = async () => {
            try {
              const result = await xoaSach(idGioHang)
              setSachs(sachs.filter(sach => sach.idGioHang !== idGioHang))
              if(result.code === 200) {
                refresh()
              }
            } catch (error) {
              console.log(error)
            }
          }
          fetchData() 
    }


    

    const handleQuantityChange = (id, event) => {
        const newQuantity = event.target.value;
        setSachs(prevBooks =>
            prevBooks.map(book =>
                book.idGioHang === id ? { ...book, soLuong: newQuantity } : book
            )
        );
    };

    const handleCheckboxChange = (id) => {
        setSachs(prevBooks =>
            prevBooks.map(book =>
                (book.idGioHang === id &&  book.soLuong > 0)? { ...book, selected: !book.selected } : book
            )
        );

        // console.log("Log Gio Hang: so trang , trong luong", totalPage, totalWeight)
    };

    // Tính tổng giá tiền của các sách được chọn
    const totalAmount = sachs
        .filter(book => book.selected)
        .reduce((total, book) => total + parseInt(book.giaGiam? book.giaGiam*book.soLuong:book.giaBan*book.soLuong), 0);

    // Tính số mục đã được chọn
    const selectedCount = sachs.filter(book => book.selected).length;

    const totalPage = sachs.filter(book => book.selected)
    .reduce((total,book) => total + parseInt(book.soTrang*book.soLuong),0)

    const totalWeight = sachs.filter(book => book.selected)
    .reduce((total,book) => total + parseInt(book.trongLuong*book.soLuong),0)

    
    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    if(selectedCount === 0) {
                        setFee(0)
                        return 
                    }
                  const responseFee = await getFee(totalAmount,selectWard,selectDistrict,totalWeight,totalPage)
                  setFee(responseFee)
                    //  console.log(selectDistrict,"check")
                } catch (error) {
                  console.log(error)
                }
              }
              fetchData() 
        }, 
        [selectedCount, totalAmount, selectDistrict,selectWard]
    )
    const handleXacNhanDH = () => { 
        if(sdtNguoiNhan.trim()==='') {
            setErrorDCG("Không thể bỏ trống!")
            return
        } else {
            setErrorDCG("")
        }
        const province = dataProvince.find((val) => val.ProvinceID == selectProvince).ProvinceName
        const district = dataDistrict.find((val)=>val.DistrictID == selectDistrict).DistrictName
        const ward = dataWard.find((val)=>val.WardCode == selectWard).WardName

        const dataToSend = {
            "gioHangList": sachs.filter(book => book.selected),
            "diaChi":  soNha + soNha!=''?", ":'' + ward + ", " + district + ", "+ province ,
            "hinhThucThanhToan": phuongThucThanhToan,
            "tenDangNhap": localStorage.getItem('username'),
            "phiVanChuyen": fee,
            "soDienThoai":sdtNguoiNhan
          };
        console.log(dataToSend)
        setDataXNDonHang(dataToSend)
        setDiaChiGiaoHang(soNha + soNha!=''?", ":'' + ward + ", " + district + ", "+ province)
        setOpenVXacNhan(true)
    }

    const handleDatHang = () => {
        
            const dataToSend = {
                "gioHangList": sachs.filter(book => book.selected),
                "diaChi": diaChiGiaoHang,
                "hinhThucThanhToan": phuongThucThanhToan,
                "tenDangNhap": localStorage.getItem('username'),
                "phiVanChuyen": fee,
                "soDienThoai":sdtNguoiNhan
              };
    
            const fetchData = async () => {
                try {
                  const result = await datMuaSach(dataToSend)
                    if(result.code ===201) {
                    setErrorDH(result.status)
                    const response = result.data
                    setSachs(prevBooks =>
                        prevBooks.map(book =>
                        book.idGioHang === response.idGioHang ? { ...book, soLuong: response.soLuong, selected: !book.selected } : book
                    ))
                    setOpenVXacNhan(false)
                    }
                    if(result.code ===200 ) {
                        if(phuongThucThanhToan==='1') {
                            const dataThanhToan = {
                                "tenDangNhap": localStorage.getItem('username'),
                                "amount": (totalAmount + fee),
                                "hoTen":localStorage.getItem('hoTen')
                            }
                            const fetchData1 = async () => {
                                try {
                                  const result = await taoThanhToan(dataThanhToan)
                                  window.location.href = result.url;
                                } catch (error) {
                                  console.log(error)
                                }
                              }
                              fetchData1() 
                        }
                        else {
                            navigate("/don-mua-sach")
                        }
                    }
                    
                 
                    // console.log(result)
                } catch (error) {
                  console.log(error)
                }
              }
              fetchData() 
            
        
    }

    const closeAlert = () => {
        setShowAlert(false);
      };
  
      const openAlert = (mess) => {
        setAlertMessage(mess);
        setShowAlert(true);
      }

    if (loading) return null
  return (
    <div>
      <div className='bg-zinc-300 h-full py-2 '>
        <div className='grid grid-cols-5 gap-x-4 max-w-7xl mx-auto px-2 '>
            <div className='bg-white p-6 px-0 col-span-3 rounded-lg'>
                <h1 className='text-lg font-bold pl-3'>Giỏ hàng:</h1>
                {errorDH && <p className="text-red-600 mt-2 pl-3">{errorDH}</p>}
                <table className="w-full mt-4 text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                            Chọn
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Tên sách
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Số lượng
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Đơn giá
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                        Tổng tiền
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900">
                            Xoá
                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sachs.map(
                            (val,key) => {
                                return (
                                    <tr key={key}>
                                    <td class="p-4">
                                        {val.soLuong > 0 ?
                                        <input
                                        type="checkbox"
                                        checked={val.selected}
                                        onChange={() => handleCheckboxChange(val.idGioHang)}
                                        />
                                        : <></>}
                                    </td>
                                    <td class="p-4 ">
                                        <div class="flex items-center gap-3">
                                        <img src={`http://localhost:8080/api/sach-service/hinh-anh/get?name=${val.anh?val.anh:"default.png"}`}
                                            alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                                        <div class="flex flex-col">
                                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {val.tenSach}
                                            </p>
                                            {/* <p
                                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                            john@creative-tim.com
                                            </p> */}
                                        </div>
                                        </div>
                                    </td>
                                    <td class="p-2">
                                    <div class="flex items-center gap-3">
                                    <input type='number' value={val.soLuong}
                                            onChange={(event) => handleQuantityChange(val.idGioHang, event)}
                                            min={1}
                                            className='max-w-10'
                                            ></input>
                           
                                    <div class="flex flex-col">
                                         
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            Cuốn
                                        </p>
                                        </div>
                                        </div>
                                      
                                    </td>
                                    <td class="p-4">
                                        <div class="flex flex-col">
                                        
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {formatCurrency(val.giaBan)}
                                        </p>
                                        <p
                                            class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                            {val.giaGiam?formatCurrency(val.giaGiam):""}
                                        </p>
                                        </div>
                                    </td>
                                    <td class="p-4 ">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {val.giaGiam? formatCurrency(val.giaGiam*val.soLuong):formatCurrency(val.giaBan*val.soLuong)}
                                        </p>
                                    </td>
                                    <td class="p-4">
                                        <button
                                        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        onClick={()=>handleXoaSach(val.idGioHang)}
                                        >
                                        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                        <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                        </span>
                                        </button>
                                    </td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
                </table>

            </div>
            <div className='bg-white p-6 px-0 col-span-2 rounded-lg'>
                <h1 className='text-lg font-bold pl-3'>Đơn hàng:</h1>
                <div className='pl-5 mt-5'>
                    <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Chọn địa chỉ giao hàng.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-x-1'>
                <div class="relative h-12 w-40 mx-auto mt-5">
                    <select
                    value={selectProvince}
                    onChange={(e) => setSelectProvince(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black">
                        {dataProvince.map(
                            (val,key) => {
                                return (
                        <option key={key} value={val.ProvinceID}>{val.ProvinceName}</option>
                                )
                            }
                        )
                    }
                    </select>

                    <label
                    class="after:content[' '] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm    ">
                        Tỉnh, Thành phố:
                    </label>
                </div>


                <div class="relative h-12 w-40 mx-auto mt-5">
                    <select
                    value={selectDistrict}
                    onChange={(e) => setSelectDistrict(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black">
                        {dataDistrict.map(
                            (val,key) => {
                                return (
                        <option key={key} value={val.DistrictID}>{val.DistrictName}</option>
                                )
                            }
                        )
                    }
                    </select>

                    <label
                    class="after:content[' '] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm    ">
                        Quận, Huyện:
                    </label>
                </div>

                
                <div class="relative h-12 w-40 mx-auto mt-5">
                    <select
                    value={selectWard}
                    onChange={(e) => setSelectWard(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black">
                        {dataWard.map(
                            (val,key) => {
                                return (
                        <option key={key} value={val.WardCode}>{val.WardName}</option>
                                )
                            }
                        )
                    }
                    </select>

                    <label
                    class="after:content[' '] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm    ">
                        Phường, Xã:
                    </label>
                </div>

                <div class="relative h-11 w-40 mx-auto mt-5">
               
                    <input placeholder=""
                    class="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm 
                    font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 
                    focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                    value={soNha}
                    onChange={(e)=>setSoNha(e.target.value)}/>
                    <label
                    class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Số nhà, Đường:  
                    </label>
                </div>
                <div class=" relative h-11 w-40 mx-auto mt-5">
                <input placeholder=""
                    class="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm 
                    font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 
                    focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                    value={sdtNguoiNhan}
                    onChange={(e)=>setSdtNguoiNhan(e.target.value)}/>
                    <label
                    class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Số diện thoại người nhận:  {errorDCG && <p className="text-red-600 ml-2">{errorDCG}</p>}
                </label>
                </div>

                </div>
                <div className='pl-5 mt-5'>
                <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Phí vận chuyển: {formatCurrency(fee)}.
                    </p>
                    <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Số sản phẩm đã chọn: {selectedCount} sản phẩm.
                    </p>
                    <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Tổng giá tiền sách: {formatCurrency(totalAmount)}.
                    </p>

                    <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Thành tiền: {formatCurrency(totalAmount + fee)}.
                    </p>

                </div>

                <div class="relative h-12 w-80 mx-auto mt-5">
                    <select
                    value={phuongThucThanhToan}
                    onChange={(e) => setPhuongThucThanhToan(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black">
                        <option value="0">Thanh toán trực tiếp</option>
                        <option value="1">Thanh toán online qua VNpay</option>
                    </select>
                    {/* <label
                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Select a City
                    </label> */}
                    <label
                    class="after:content[' '] pointer-events-none absolute left-0  -top-5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm    ">
                        Phương thức thanh toán:
                    </label>
                </div>

                <div className="p-3 pt-0 w-80 mt-5 mx-auto">
                <button
                className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                hover:shadow-gray-900/20 block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none "
                type="button"
                // onClick={()=> handleDatHang()}
                onClick={()=>handleXacNhanDH()}
                disabled={selectedCount === 0}
                >
                Đặt hàng
                </button>
            </div>
            </div>
        </div>
      </div>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
      <ViewXacNhanDatHang isOpen={openVXacNhan} onClose={()=>setOpenVXacNhan(false)} dataXNDH={dataXNDonHang} handleDatHang={()=>handleDatHang()}/>
    </div>
  )
}

export default GioHang
