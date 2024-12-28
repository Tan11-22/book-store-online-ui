import React, {useEffect, useState} from 'react'
import Chip from './Chip'
import ChipImage from './ChipImage'
import { capNhatSachQT, themSachQT } from '../../context/QuanTriSach'

function ModalsCapNhatSach({open, onClose,refresh, dataTG, dataTL, dataNXB, data}) {
    const handleClose = () => {
        chinhVeMacDinh()
        onClose()
      }
    const chinhVeMacDinh = () => {
        setFormState({
            isbn: '',
            tenSach: '',
            khuonKho: '',
            soTrang: '',
            trongLuong: '',
            moTa: '',
            nxb: '',
        })

        setErrorTS('')
        setErrorST('')
        setErrorNXB('')
        setChips([])
        setSelectedOption('')
        setErrorTG('')
        setTLChips([])
        setSelectedOptionTL('')
        setErrorTL('')
        setSelectedFiles([])
        setError('')
    }



    const [formState, setFormState] = useState({
        isbn: '',
        tenSach: '',
        khuonKho: '',
        soTrang: '',
        trongLuong: '',
        moTa: '',
        nxb: '',
    });


    // const [errorISBN, setErrorISBN] = useState('')
    const [errorTS, setErrorTS] = useState('')
    const [errorST, setErrorST] = useState('')
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
    const [selectedOptionTL, setSelectedOptionTL] = useState()
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
    const [fileDefalut, setFileDefalut] = useState([])
    const [anhCanXoa,setAnhCanXoa] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])
    const [error, setError] = useState('')
  
    useEffect(
        ()=> {
            if(data) {
                setFormState({
                    isbn: data.isbn,
                    tenSach: data.tenSach,
                    khuonKho: data.khuonKho,
                    soTrang: data.soTrang,
                    trongLuong: data.trongLuong,
                    moTa: data.moTa,
                    nxb: data.maNhaXuatBan,
                })
                setChips(data.tacGias.map(item=>`${item.idTacGia} - ${item.ho} ${item.ten}`))
                setTLChips(data.theLoais.map(item=>`${item.idTheLoai} - ${item.tenTheLoai}`))
                setFileDefalut(data.hinhAnhs)
            }
        }, [data]
    )
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files)
      const totalFiles = selectedFiles.length + files.length + fileDefalut.length
      if (totalFiles > 5) {
        setError('Bạn chỉ có thể tải lên tối đa 5 hình.')
        return
      }
      setSelectedFiles(prevFiles => [...prevFiles, ...files])
      setError('')
    }

    const handleDeleteFileChip = (fileToDelete) => {
        setSelectedFiles(selectedFiles.filter(file => file !== fileToDelete))
      }

      const handleDeleteFileChip1 = (fileToDelete) => {
        setFileDefalut(fileDefalut.filter(file => file.idAnh !== fileToDelete.idAnh))
        setAnhCanXoa([...anhCanXoa, fileToDelete])
      }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    

    if (!open) return null
    const hasFormStateChanged = (formState, data) => {
        const relevantData = {
          isbn: data.isbn,
          tenSach: data.tenSach,
          khuonKho: data.khuonKho,
          soTrang: data.soTrang,
          trongLuong: data.trongLuong,
          moTa: data.moTa,
          nxb: data.maNhaXuatBan,
        };
      
        return Object.keys(relevantData).some(
          (key) => formState[key] !== relevantData[key]
        );
    }
    const isChangeTG = (data,chipTGs) => {
        const checkTG = data.tacGias.map(item=>`${item.idTacGia} - ${item.ho} ${item.ten}`)

        if (chipTGs.length !== checkTG.length) {
            return true
        }


        const checkTGSet = new Set(checkTG);

        for (const item of chipTGs) {
        if (!checkTGSet.has(item)) {
            return true; 
        }
        }

        return false
    }

    const isChangeTL = (data,chipTLs) => {
        const checkTL = data.theLoais.map(item=>`${item.idTheLoai} - ${item.tenTheLoai}`)
        if (chipTLs.length !== checkTL.length) {
            return true;
          }
        
          const checkTLSet = new Set(checkTL);

          for (const item of chipTLs) {
            if (!checkTLSet.has(item)) {
              return true; 
            }
          }
        
          return false;
    }

    const isDeleteImg = (data,defaultFile) =>
    {
        if(data.hinhAnhs.length != defaultFile.length) {
            return true
        } 
        return false
    }

    const isAddImg = (selectedFiles) =>
        {
            if(selectedFiles.length > 0) {
                return true
            } 
            return false
        }

        const handleSubmit = () => {
            let count = 0;
            if (formState.tenSach === '') {
                setErrorTS("Tên sách không thể để trống!");
                count += 1;
            } else {
                setErrorTS('');
            }
    
            if (formState.soTrang === '') {
                setErrorST("Số trang không thể để trống!");
                count += 1;
            } else {
                setErrorST('');
            }
    
            if (formState.nxb === '') {
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
            formData.append('isbn', formState.isbn);
            if (hasFormStateChanged(formState, data)) {
                formData.append('tenSach', formState.tenSach);
                formData.append('soTrang', formState.soTrang);
                formData.append('khuonKho', formState.khuonKho);
                formData.append('trongLuong', formState.trongLuong);
                formData.append('moTa', formState.moTa);
                formData.append('nxb', formState.nxb);

            }
            if (isChangeTG(data, chipTGs)) {
                formData.append('tacGias', chipTGs); 
            }
            if (isChangeTL(data, chipTLs)) {
                formData.append('theLoais', chipTLs); 
            }
            if (isDeleteImg(data, fileDefalut)) {
                formData.append('anhXoa', anhCanXoa.map(item=>`${item.idAnh} - ${item.filename}`)); 
            }
            if (isAddImg(selectedFiles)) {
                selectedFiles.forEach(file => {
                formData.append('anhMoi', file); 
                });
            }

            
            const fetchData = async () => {
                try {
                  const result = await capNhatSachQT(formData);
                  if(result.code ===200) {
                    chinhVeMacDinh()
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
    
        const isButtonEnabled = (formState, data, chipTGs, chipTLs, defaultFile, selectedFiles) => {
            return (
              hasFormStateChanged(formState, data) ||
              isChangeTG(data, chipTGs) ||
              isChangeTL(data, chipTLs) ||
              isDeleteImg(data, defaultFile) ||
              isAddImg(selectedFiles)
            );
          };
    
          const buttonEnabled = isButtonEnabled(
            formState,
            data,
            chipTGs,
            chipTLs,
            fileDefalut,
            selectedFiles
          );
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
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4">Chỉnh sửa sách {formState.isbn}</h1>
                        </div>
                        


                        {/* <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">ISBN(*):  
                            <p></p>
                        </label> */}
                       
                       

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tên sách(*)
                        {errorTS && <p className="text-red-600 italic">{errorTS}</p>}
                        </label>
                        
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Tên sách" 
                        value={formState.tenSach}
                        name='tenSach'
                        onChange={(e) => handleChange(e)}
                        type='text'
                        />

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Khuôn khổ</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Khuôn khổ" 
                        value={formState.khuonKho}
                        name='khuonKho'
                        onChange={(e) => handleChange(e)}
                        type='text'
                        />

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Số trang(*)
                        {errorST && <p className="text-red-600 italic">{errorST}</p>}
                        </label>
                      
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Số trang" 
                        value={formState.soTrang}
                        name='soTrang'
                        onChange={(e) => handleChange(e)}
                        type='number'
                        />

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Trọng lượng</label>
                        <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Trọng lượng"
                        value={formState.trongLuong}
                        name='trongLuong'
                        onChange={(e) => handleChange(e)}
                        type='number'
                        />

                      

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Nhà xuất bản(*)
                        {errorNXB && <p className="text-red-600 italic">{errorNXB}</p>}
                        </label>
                        
                        <div>
                        <select
                            value={formState.nxb}
                            name='nxb'
                            onChange={(e) => handleChange(e)}
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
                            {fileDefalut.map((file, index) => (
                            <ChipImage key={index} file={file.filename} onDelete={() => handleDeleteFileChip1(file)} />
                            ))}
                            {selectedFiles.map((file, index) => (
                            <ChipImage key={index} file={file} onDelete={() => handleDeleteFileChip(file)} />
                            ))}
                        </div> 

                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mô tả</label>
                        <textarea id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border" placeholder="Mô tả" 
                        value={formState.moTa}
                        name='moTa'
                        onChange={(e) => handleChange(e)}
                            type='text'
                        />

                        <div className="flex items-center justify-start w-full">                   
                            <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase
                            disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none" 
                            disabled={!buttonEnabled}
                            onClick={()=>handleSubmit()}>Cập nhật</button>
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

export default ModalsCapNhatSach



