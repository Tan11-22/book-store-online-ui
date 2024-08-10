import React, {useState, useEffect} from 'react'
import { layDSSachTheoNXBQT, taoDonNhapSachQT } from '../../../context/QuanTriSach'
import { formatCurrency } from '../../../context/utility' 
function ModalsTaoDonNhap({open, onClose, refresh, dataNXB}) {

    const [ngayDat, setNgayDat] = useState('')
    const [errorNgayDat, setErrorNgayDat] = useState('')
    const [nxb, setNXB] = useState('')
    const [dataSach, setDataSach] = useState([])
    const [dataDon, setDataDon] = useState([])
    const [isbn,setISBN] = useState('')

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Tháng từ 0-11 nên cần +1
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        setNgayDat(formattedDate);
      }, []);
    const handleClose = () => {
        onClose()
    }

    useEffect (
        () => {
            const fetchData = async () => {
                try {
                  const result = await layDSSachTheoNXBQT(nxb);
                  setDataSach(result.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData(); 
        }
        ,[nxb])
    const handleChangeNXB= (e) => {
        setNXB(e.target.value)
        setDataDon([])
        setISBN('')
    }
    const handleThemSachVaoDon = () =>
    {
        const selectedBook = dataSach.find(book => book.isbn === isbn);
        console.log(selectedBook,isbn, dataSach)
        if (selectedBook && !dataDon.some(book => book.isbn === isbn)) {
            setDataDon([...dataDon, selectedBook]);
        }
    }
    const handleQuantityChange = (id, event) => {
        const newQuantity = event.target.value;
        setDataDon(prevBooks =>
            prevBooks.map(book =>
                book.isbn === id ? { ...book, soLuong: newQuantity } : book
            )
        );
    };
    const handleXoaSach = (id) => {
    
        setDataDon(dataDon.filter(sach => sach.isbn !== id))
           
    }
    const totalAmount = dataDon
        .reduce((total, book) => total + parseInt(book.giaNhap*book.soLuong), 0)

    const handleTaoDon = () => {
        const today = new Date();
        const selectedDate = new Date(ngayDat);
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
        setErrorNgayDat('Ngày đặt không thể nhỏ hơn ngày hiện tại.');
        return;
        }

        // Nếu không có lỗi, thực hiện submit
        setErrorNgayDat('');
        const dataToSend = {
            "donNhapSach": {
                "maNhaXuatBan": nxb,
                "maNhanVien": localStorage.getItem('username'),
                "ngayDat": ngayDat
            }
           ,
            "ctDonNhapSachs": dataDon,
          }
          const fetchData = async () => {
            try {
              const result = await taoDonNhapSachQT(dataToSend);
            //   setDataSach(result.data)
                if (result.code ===200) {
                    
                    refresh()
                    handleClose()
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
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Tạo đơn nhập sách</h1>
                        </div>
                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Ngày đặt</label>
                        {errorNgayDat && <p className="text-red-600 mt-2">{errorNgayDat}</p>}
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Ngày đặt" 
                        value={ngayDat}
                        onChange={(e) => setNgayDat(e.target.value)}
                        type='date'/>
                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nhà xuất bản</label>
                        <div>
                        <select
                            value={nxb}
                            onChange={(e) => handleChangeNXB(e)}
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border"
                            >
                            <option value="" disabled>Chọn nhà xuất bản</option>
                            { dataNXB &&
                                dataNXB.map((val,key) => { return (
                                  <option key={key} value={val.maNhaXuatBan}>{`${val.maNhaXuatBan} - ${val.tenNhaXuatBan}`}</option>
                                ) })
                            }
                            </select>
                        </div>
                        


                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Sách</label>
                        {/* {errorTG && <p className="text-red-600 mt-2">{errorTG}</p>} */}
                        <div className="max-w-lg mb-4">
                            <select
                            value={isbn}
                            onChange={(e) => setISBN(e.target.value)}
                            className="p-2 border rounded min-w-60  mt-2"
                            >
                            <option value="" disabled>Chọn sách</option>
                            { dataSach &&
                                dataSach.map((val,key) => { return (
                                  <option key={key} value={val.isbn}>{`${val.isbn} - ${val.tenSach}`}</option>
                                ) })
                            }
                            </select>
                            <button
                            onClick={()=>handleThemSachVaoDon()}
                            className="ml-2 px-4 py-2 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase"
                            >
                            Thêm
                            </button>
                        </div>
                                    <div className="p-2 px-0 overflow-scroll h-[87vh]">
                <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Sách
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Đơn giá
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Số lượng
                        </p>
                    </th>
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Thành tiền
                        </p>
                    </th>
                    {/* <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                        Nhà xuất bản
                        </p>
                    </th> */}
                    <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-black opacity-70">

                        </p>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {
                        dataDon.map(
                            (val, key) => {
                              return (
                                <tr key ={key}>
                    <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                        <img src={`http://localhost:8080/api/quan-ly-sach-service/hinh-anh/get?name=${val.tenAnh?val.tenAnh:"default.png"}`}alt="Google"
                            className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1" />
                            <div>
                            <p className="block font-sans text-sm antialiased font-bold leading-normal text-black">
                               Mã sách: {val.isbn}
                            </p>
                            <p className="block font-sans text-sm antialiased  leading-normal text-black">
                                {val.tenSach}
                            </p>
                            </div>
                        
                        </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                            {formatCurrency(val.giaNhap)}
                        </p>
                    </td>
                    <td className="p-2 border-b border-blue-gray-50">
                            <input type='number' value={val.soLuong}
                                            onChange={(event) => handleQuantityChange(val.isbn, event)}
                                            min={1}
                                            className='w-10'
                                            />
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
                        {formatCurrency(val.giaNhap*val.soLuong)}
                        </p>
                    </td>
                    {/* <td className="p-4 border-b border-blue-gray-50">
                        {val.tenNhaXuatBan}
                    </td> */}
                    <td className="p-4 border-b border-blue-gray-50">
                        <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={()=>handleXoaSach(val.isbn)}
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
            <p className="min-h-14 block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    - Tổng giá tiền: {formatCurrency(totalAmount)}.
                    </p>

                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>handleTaoDon()}
                            >Tạo</button>
                        </div>
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
    </div>
  )
}

export default ModalsTaoDonNhap
