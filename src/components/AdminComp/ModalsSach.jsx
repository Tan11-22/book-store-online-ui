import React, {useState} from 'react'
import Chip from './Chip'
import ChipImage from './ChipImage'
import { themSachQT } from '../../context/QuanTriSach'

function ModalsSach({open, onClose,refresh, dataTG, dataTL, dataNXB}) {
    const handleClose = () => {

                setIsbn('')
                setErrorISBN('')
                setTenSach('')
                setErrorTS('')
                setKhuonKho('')
                setSoTrang('')
                setErrorST('')
                setTrongLuong('')
                setMoTa('')
                setNXB('')
                setErrorNXB('')
    

                setChips([])
                setSelectedOption('')
                setErrorTG('')
                setTLChips([])
                setSelectedOptionTL('')
                setErrorTL('')
                setSelectedFiles([])
                setError('')
        onClose()
      }

    // const [dataRequest, setDataRequest] = useState({})
    // Xử lý các field đơn
    const [isbn, setIsbn] = useState('')
    const [errorISBN, setErrorISBN] = useState('')
    const [tenSach, setTenSach] = useState('')
    const [errorTS, setErrorTS] = useState('')
    const [khuonKho, setKhuonKho] = useState('')
    const [soTrang, setSoTrang] = useState('')
    const [errorST, setErrorST] = useState('')
    const [trongLuong, setTrongLuong] = useState('')
    const [moTa, setMoTa] = useState('')
    const [nxb, setNXB] = useState('')
    const [errorNXB, setErrorNXB] = useState('')

    // xử lý tác giả
    const [chipTGs, setChips] = useState([])
    const [selectedOption, setSelectedOption] = useState('')
    const [errorTG, setErrorTG] = useState('')
    const handleAddChipTG = () => {
        if (selectedOption && !chipTGs.includes(selectedOption)) {
        setChips([...chipTGs, selectedOption])
        }
    }

    const handleDeleteChipTG = (chipToDelete) => {
        setChips(chipTGs.filter(chip => chip !== chipToDelete))
    }

    // xử lý thể loại
    const [chipTLs, setTLChips] = useState([])
    const [selectedOptionTL, setSelectedOptionTL] = useState('')
    const [errorTL, setErrorTL] = useState('')
    const handleAddChipTL = () => {
        if (selectedOptionTL && !chipTLs.includes(selectedOptionTL)) {
        setTLChips([...chipTLs, selectedOptionTL])
        }
    }

    const handleDeleteChipTL = (chipToDelete) => {
        setTLChips(chipTLs.filter(chip => chip !== chipToDelete))
    }


    // xử lý thêm ảnh 
    const [selectedFiles, setSelectedFiles] = useState([])
    const [error, setError] = useState('')
  
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files)
      const totalFiles = selectedFiles.length + files.length
      if (totalFiles > 5) {
        setError('Bạn chỉ có thể tỉ lên tối đa 5 hình.')
        return
      }
      setSelectedFiles(prevFiles => [...prevFiles, ...files])
      setError('')
    }

    const handleDeleteFileChip = (fileToDelete) => {
        setSelectedFiles(selectedFiles.filter(file => file !== fileToDelete))
      }

    const handleSubmit = () => {
        let count = 0;

        if (isbn === '') {
            setErrorISBN("Mã sách không thể để trống!");
            count += 1;
        } else {
            setErrorISBN('');
        }

        if (tenSach === '') {
            setErrorTS("Tên sách không thể để trống!");
            count += 1;
        } else {
            setErrorTS('');
        }

        if (soTrang === '') {
            setErrorST("Số trang không thể để trống!");
            count += 1;
        } else {
            setErrorST('');
        }

        if (nxb === '') {
            setErrorNXB("Nhà xuất bản không thể để trống!");
            count += 1;
        } else {
            setErrorNXB('');
        }

        if (chipTGs.length === 0) {
            setErrorTG("Chưa thêm tác giả cho sách!");
            count += 1;
        } else {
            setErrorTG('');
        }

        if (chipTLs.length === 0) {
            setErrorTL("Chưa thêm thể loại cho sách!");
            count += 1;
        } else {
            setErrorTL('');
        }
        if (count > 0) {
            return
        }
        const formData = new FormData();
        formData.append('isbn', isbn);
        formData.append('tenSach', tenSach);
        formData.append('soTrang', soTrang);
        formData.append('khuonKho', khuonKho);
        formData.append('trongLuong', trongLuong);
        formData.append('moTa', moTa);
        formData.append('nxb', nxb);
        formData.append('chipTGs',chipTGs)
        formData.append('chipTLs',chipTLs)
        // chipTGs.forEach((tg, index) => {
        //     formData.append(`chipTGs[${index}]`, tg);
        // });

        // chipTLs.forEach((tl, index) => {
        //     formData.append(`chipTLs[${index}]`, tl);
        // });

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }
        // Kiểm tra nội dung của FormData
        
        const fetchData = async () => {
            try {
              const result = await themSachQT(formData);
              if(result.code ===200) {
                refresh()
                onClose()
              }
              console.log(result)
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
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Thêm sách mới</h1>
                        </div>
                        


                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">ISBN(*)

                        {errorISBN && <p className="text-red-600 italic">{errorISBN}</p>}
                        </label>
                       
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="ISBN" 
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        type='text'/>

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tên sách(*)
                        {errorTS && <p className="text-red-600 italic">{errorTS}</p>}
                        </label>
                        
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên sách" 
                        value={tenSach}
                        onChange={(e) => setTenSach(e.target.value)}
                        type='text'
                        />

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Khuôn khổ</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Khuôn khổ" 
                        value={khuonKho}
                        onChange={(e) => setKhuonKho(e.target.value)}
                        type='text'
                        />

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Số trang(*)
                        {errorST && <p className="text-red-600 italic">{errorST}</p>}
                        </label>
                      
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Số trang" 
                        value={soTrang}
                        onChange={(e) => setSoTrang(e.target.value)}
                        type='number'
                        />

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Trọng lượng</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Trọng lượng"
                        value={trongLuong}
                        onChange={(e) => setTrongLuong(e.target.value)}
                        type='number'
                        />

                      

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nhà xuất bản(*)
                        {errorNXB && <p className="text-red-600 italic">{errorNXB}</p>}
                        </label>
                        
                        <div>
                        <select
                            value={nxb}
                            onChange={(e) => setNXB(e.target.value)}
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
                        


                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tác giả(*)
                        {errorTG && <p className="text-red-600 italic">{errorTG}</p>}
                        </label>
                   
                        <div className="max-w-lg mb-4">
                            <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="p-2 border rounded min-w-60  mt-2"
                            >
                            <option value="" disabled>Chọn tác giả</option>
                            { dataTG &&
                                dataTG.map((val,key) => { return (
                                  <option key={key} value={`${val.idTacGia} - ${val.ho} ${val.ten}`}>{`${val.idTacGia} - ${val.ho} ${val.ten}`}</option>
                                ) })
                            }
                            {/* <option value="Option 1">Option a</option>
                            <option value="Option 2">Option b</option>
                            <option value="Option 3">Option 3</option> */}
                            </select>
                            <button
                            onClick={handleAddChipTG}
                            className="ml-2 px-4 py-2 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase"
                            >
                            Thêm
                            </button>
                        </div>
                        <div className="flex flex-wrap mb-5">
                            {chipTGs.map((chip, index) => (
                            <Chip key={index} label={chip} onDelete={() => handleDeleteChipTG(chip)} />
                            ))}
                        </div>



                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Thể loại(*)
                        {errorTL && <p className="text-red-600 italic">{errorTL}</p>}
                        </label>
                        
                        <div className="max-w-lg mb-4">
                            <select
                            value={selectedOptionTL}
                            onChange={(e) => setSelectedOptionTL(e.target.value)}
                            className="p-2 border rounded min-w-60  mt-2"
                            >
                            <option value="" disabled>Chọn thể loại</option>
                            { dataTL &&
                                dataTL.map((val,key) => { return (
                                  <option key={key} value={`${val.idTheLoai} - ${val.tenTheLoai}`}>{`${val.idTheLoai} - ${val.tenTheLoai}`}</option>
                                ) })
                            }
                            </select>
                            <button
                            onClick={handleAddChipTL}
                            className="ml-2 px-4 py-2 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase"
                            >
                            Thêm
                            </button>
                        </div>
                        <div className="flex flex-wrap mb-5">
                            {chipTLs.map((chip, index) => (
                            <Chip key={index} label={chip} onDelete={() => handleDeleteChipTL(chip)} />
                            ))}
                        </div>





                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Hình ảnh
                        {error && <p className="text-red-500 italic">{error}</p>}
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="p-2 border rounded w-full"
                            />

                        
                        <div className="flex flex-wrap mt-4">
                            {selectedFiles.map((file, index) => (
                            <ChipImage key={index} file={file} onDelete={() => handleDeleteFileChip(file)} />
                            ))}
                        </div> 

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mô tả</label>
                        <textarea id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mô tả" 
                        value={moTa}
                        onChange={(e) => setMoTa(e.target.value)}
                            type='text'
                        />

                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                            onClick={()=>handleSubmit()}>Thêm</button>
                        </div>
                        <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" 
                         onClick={()=>handleClose()} role="button">
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

export default ModalsSach
