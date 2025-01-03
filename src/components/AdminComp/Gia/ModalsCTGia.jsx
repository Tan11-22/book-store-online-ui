import React, {useState, useEffect} from 'react'
import { formatCurrency } from '../../../context/utility';
import { capNhatGia, getCtGiaSach, themGiaMoi } from '../../../context/QuanTriSach';
import Alert from '../../Alert/Alert';
function ModalsCTGia({open, onClose, refresh, data}) {
    
    const formatDate = (dateString) => {
        // Tách chuỗi ngày thành các phần tử
        const [year, month, day] = dateString.split('-');
        // Sắp xếp lại các phần tử theo định dạng dd-MM-yyyy
        return `${day}-${month}-${year}`;
      }
    
    const [idGia,setIdGia] = useState('')
    const [ngayApDung, setNgayApDung] = useState('')
    const [ngayKetThuc, setNgayKetThuc] = useState('')
    const [giaTien, setGiaTien] = useState(1)
    const [dataGia, setDataGia] = useState([])
    const [refreshCT, setRefreshCT] =useState(false)

    const [errorLoaiGia, setERLG] = useState('')
    const [errorNgayApDung, setERNAD] = useState('')
    const [errorNgayKetThuc, setERNKT] = useState('')
    const [errorGiaTien, setERGT] = useState('')
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setTypeAlert] = useState('success')
    const [giaChinhSua, setGiaChinhSua] = useState(null)

    const closeAlert = () => {
        setShowAlert(false);
      };
  
    const openAlert = (mess) => {
        setAlertMessage(mess);
        setShowAlert(true);
      }
      const handleRefreshInput=()=> {
        setGiaChinhSua(null)
        setNgayApDung('')
        setNgayKetThuc('')
        setGiaTien(1)
        setERLG('')
        setERNAD('')
        setERNKT('')
        setERGT('')
    }
    const handleClose = () => {
        handleRefreshInput()
        onClose()
    }
    useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await getCtGiaSach(data.isbn);
                  setDataGia(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[data, refreshCT])
    
    const handleThemGia = () => {

        let count = 0;

        if (idGia === '') {
            setERLG("Loại giá không thể để trống!");
            count += 1;
        } else {
            setERLG('');
        }

        if (ngayApDung === '') {
            setERNAD("Ngày áp dụng không thể để trống!");
            count += 1;
        } else {
            setERNAD('');
        }

        if (ngayKetThuc === '') {
            setERNKT("Ngày kết thúc không thể để trống!");
            count += 1;
        } else if ( new Date(ngayApDung) > new Date(ngayKetThuc)) {
            setERNKT("Ngày kết thúc không thể nhỏ hơn ngày áp dụng!");
            count += 1;
        } else {
            setERNKT('');
        }
        
        if (giaTien === '' || giaTien === 0) {
            setERGT("Giá tiền không thể để trống!");
            count += 1;
        } else {
            setERGT('');
        }

        // if ( new Date(ngayApDung) > new Date(ngayKetThuc)) {
        //     setERNKT("Ngày kết thúc không thể nhỏ hơn ngày áp dụng!");
        //     count += 1;
        // } else {
        //     setERNKT('');
        // }
        if (count > 0) {
            return
        }
        const dataRequest = {
            "idGia":idGia,
            "isbn":data.isbn,
            "ngayApDung":ngayApDung,
            "ngayKetThuc":ngayKetThuc,
            "gia":giaTien
        }
        const fetchData = async () => {
            try {
              const result = await themGiaMoi(dataRequest);
              if(result.code === 200) {
                setRefreshCT(!refreshCT)
                refresh()
                handleRefreshInput()
                setTypeAlert('success')
                openAlert(result.status)
              } else {
                setTypeAlert('error')
                openAlert(result.status)
              }
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }
    const handleChinhSua = (val) => {
        setGiaChinhSua(val)
        // setIdGia(val.idGia)
        setNgayApDung(val.ngayApDung)
        setNgayKetThuc(val.ngayKetThuc)
        setGiaTien(val.gia)
        setERLG('')
        setERNAD('')
        setERNKT('')
        setERGT('')
    }

    const handleHuyChinhSua = () => {
        handleRefreshInput()
    }
    const isChangeGia = () => {
        if (new Date(ngayApDung).getTime() !== new Date(giaChinhSua.ngayApDung).getTime()) {
            return true;
        }
    
        if (new Date(ngayKetThuc).getTime() !== new Date(giaChinhSua.ngayKetThuc).getTime()) {
            return true;
        }

        if(giaTien != giaChinhSua.gia) {
            return true
        }
        return false
    }

    const handleChinhSuaGia = () => {

        let count = 0;
        if (ngayApDung === '') {
            setERNAD("Ngày áp dụng không thể để trống!");
            count += 1;
        } else {
            setERNAD('');
        }

        if (ngayKetThuc === '') {
            setERNKT("Ngày kết thúc không thể để trống!");
            count += 1;
        } else if ( new Date(ngayApDung) > new Date(ngayKetThuc)) {
            setERNKT("Ngày kết thúc không thể nhỏ hơn ngày áp dụng!");
            count += 1;
        } else {
            setERNKT('');
        }
        
        if (giaTien === '' || giaTien === 0) {
            setERGT("Giá tiền không thể để trống!");
            count += 1;
        } else {
            setERGT('');
        }

        if (count > 0) {
            return
        }
        const dataRequest = {
            "idCTGiaSach":giaChinhSua.idCTGia,
            "ngayApDung":ngayApDung,
            "ngayKetThuc":ngayKetThuc,
            "gia":giaTien
        }
        const fetchData = async () => {
            try {
              const result = await capNhatGia(dataRequest);
              if(result.code === 200) {
                setRefreshCT(!refreshCT)
                refresh()
                handleRefreshInput()
                setTypeAlert('success')
                openAlert(result.status)
              } else {
                setTypeAlert('error')
                openAlert(result.status)
              }
            } catch (error) {
              console.log(error)
            }
          };
          fetchData(); 
    }
    if (!open) return null
  return (
    <div>
      <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-opacity-50" >
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg min-w-[800px] ">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-black max-h-[80vh]  overflow-y-auto">
                        <div className="w-full flex justify-start text-gray-600 mb-3">
                            <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Thông tin giá sách #{data.isbn}</h1>
                            
                        </div>
                        <p class="font-normal text-base text-gray-900 mb-5">
                                <strong>- Tên sách: </strong> {data.tenSach}
                        </p>
                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Loại giá 
                            {errorLoaiGia && <p className="text-red-600 italic">{errorLoaiGia}</p>}</label>
                        {giaChinhSua == null ?
                        <div>
                          
                        <select
                            value={idGia}
                            onChange={(e)=>setIdGia(e.target.value)}
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border"
                            >
                            <option value="" disabled>Chọn loại giá</option>
                            <option  value="1">Giá nhập</option>
                            <option  value="2">Giá bán</option>
                            <option  value="3">Giá khuyến mãi</option>
                            </select>
                        </div>
                        :
                        <>
                            <p className="inline font-sans text-sm antialiased font-normal leading-normal text-black">
                                : {giaChinhSua.tenGia}
                            </p>
                        </>

                        }
                        
                        <div className="grid grid-cols-2 gap-x-4">
                            <div>
                                <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Ngày áp dụng

                                {errorNgayApDung  != ''? <p className="text-red-600 italic">{errorNgayApDung}</p>
                                :      <p className="h-[18px]"></p>}
                                </label>
                               

                                <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                                pl-3 text-sm border-gray-300 rounded border" placeholder="Ngày áp dụng" 
                                value={ngayApDung}
                                onChange={(e) => setNgayApDung(e.target.value)}
                                type='date'/>
                            </div>
                            <div>
                                <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Ngày kết thúc
                                {errorNgayKetThuc  != ''? <p className="text-red-600 italic">{errorNgayKetThuc}</p>
                                :      <p className="h-[18px]"></p>
                            }
                                </label>
                                
                                <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                                pl-3 text-sm border-gray-300 rounded border" placeholder="Ngày áp dụng" 
                                value={ngayKetThuc}
                                onChange={(e) => setNgayKetThuc(e.target.value)}
                                type='date'/>
                            </div>
                        </div>


                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Giá
                        {errorGiaTien && <p className="text-red-600 italic">{errorGiaTien}</p>}
                        </label>
                       
                        <div className="grid grid-cols-4 gap-x-4">
                            <input id="name" className="
                            col-span-2
                            mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                                pl-3 text-sm border-gray-300 rounded border" placeholder="Giá tiền" 
                                min={1}
                                value={giaTien}
                                onChange={(e) => setGiaTien(e.target.value)}
                                type='number'/>
                            {giaChinhSua == null ?
                            <button
                            onClick={()=>handleThemGia()}
                            className="ml-2 px-4 py-2 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase w-40 h-14"
                            >
                            Thêm giá
                            </button>
                            :
                            <>
                            <button
                            disabled={!isChangeGia()}
                            onClick={()=>handleChinhSuaGia()}
                            className="ml-2 px-4 py-2 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase w-40 h-14
                            disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
                            >
                            Chỉnh sửa
                            </button>
                            <button
                            onClick={()=>handleHuyChinhSua()}
                            className="ml-2 px-4 py-2 bg-zinc-300 text-black rounded-lg font-sans text-xs font-bold uppercase w-40 h-14"
                            >
                            Huỷ chỉnh sửa
                            </button>
                            </>
                            }
                        </div>
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Chi tiết giá sách:</h1>
                                    <div className="p-2 px-0">
                <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Id
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Tên giá 
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Giá tiền
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Ngày áp dụng
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Ngày kết thúc
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-black opacity-70">

                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {
                        dataGia.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            #{val.idCTGia}
                        </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {val.tenGia}
                        </p>
                    </td>
                    <td className="p-2 border-b border-blue-gray-50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {formatCurrency(val.gia)}
                            </p>
                    </td>
                    <td className="p-2 border-b border-blue-gray-50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {formatDate(val.ngayApDung)}
                            </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50 text-center align-middle">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {formatDate(val.ngayKetThuc)}
                        </p>
                    </td>
                    {/* <td className="p-4 border-b border-blue-gray-50">
                        {val.tenNhaXuatBan}
                    </td> */}
                    <td className="p-4 border-b border-blue-gray-50">
                    {new Date(val.ngayApDung) > new Date() && (
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={() => handleChinhSua(val)}
                        >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                            </span>
                        </button>
                        )}
                    </td>
                                </tr>
                              )
                            }
                          )
                    }


                </tbody>
                </table>
            </div>
            {/* <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Tổng giá tiền: {formatCurrency(totalAmount)}.
                    </p>

                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>handleTaoDon()}
                            >Tạo</button>
                        </div> */}
                        <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" 
                         onClick={()=>handleClose()} 
                         role="button">
                            <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {showAlert && <Alert message={alertMessage} onClose={closeAlert} type={typeAlert}/>}
    </div>
  )
}

export default ModalsCTGia
