import React, { useEffect, useState } from 'react'
import { layDSTacGia, layDSTheLoai } from '../../context/SachService';
import { useNavigate } from 'react-router-dom';

function FormFilter({isOpen, onClose, filterTG, filterTL, sapXep, search}) {
    const navigate = useNavigate()
    const [dsTG, setDSTG] = useState([])
    const [dsTL, setDSTL] = useState([])
    const [selectedTG, setSelectedTG] = useState([]);
    const [selectedTL, setSelectedTL] = useState([]); 
    const [sapXep1,setSapXep1] = useState(sapXep)
    const [search1,setSearch1] = useState(search)
    const handleClose = () => {
        onClose()
      }
    const handleApDungFilter = () => {
        handleChangeFilter()
        reloadPage()
        onClose()
        
        
    }  
    const reloadPage = () => {
        window.location.reload();
      }
      
    const handleChangeFilter = () => {
          const tg1 = selectedTG
          .map(item => `${item.idTacGia}-${item.hoTen}`) 
          .join(','); 
    
          const tl1 = selectedTL
          .map(item => `${item.idTheLoai}-${item.tenTheLoai}`) 
          .join(','); 
          console.log(tg1,tl1)
          navigate(`/tim-kiem?page=${1}&search=${search1}&tg=${tg1}&tl=${tl1}&sx=${sapXep1}`);
        }
    //   console.log(selectedTL)
    useEffect(
        () => {
            const fetchData1 = async () => {    
                try {
                  const result1 = await layDSTacGia();
                  const result2 = await layDSTheLoai();
                    setDSTG(result1.data)
                    setDSTL(result2.data)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData1(); 
            // console.log(dataSach)
        }, 
        []
    )

    useEffect(() => {
        if (isOpen) {
          setSelectedTG(filterTG);
          setSelectedTL(filterTL)
        }
      }, [isOpen, filterTG, filterTL]);

      const handleCheckboxChange = (tacGia) => {
        setSelectedTG((prev) =>
            prev.some((item) => item.idTacGia == tacGia.idTacGia)
                ? prev.filter((item) => item.idTacGia != tacGia.idTacGia) 
                : [...prev, tacGia] 
        );
    };

    const handleCheckboxTLChange = (theLoai) => {
        setSelectedTL((prev) =>
            prev.some((item) => item.idTheLoai == theLoai.idTheLoai)
                ? prev.filter((item) => item.idTheLoai != theLoai.idTheLoai) 
                : [...prev, theLoai] 
        );
    };



    if (!isOpen) return null;

    return (

          <div className=" fixed
          py-12 bg-gray-700 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0 bg-opacity-50" >
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg min-w-[800px] ">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-black max-h-[80vh]  overflow-y-auto">
                            <div className="w-full flex justify-start text-gray-600 mb-3">
                                {/* <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                </svg> */}
                                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-3xl pt-3 ml-4"
                                >Tuỳ chỉnh bộ lọc</h1>
                            </div>
                            {/* <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Tu</label> */}
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                            pl-3 text-sm border-gray-300 rounded border" placeholder="Từ khoá tìm kiếm" 
                            value={search1}
                            onChange={(e) => setSearch1(e.target.value)}
                            type='text'/>
                            
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-xl pt-3 ml-4"
                                >Chọn tác giả:</h1>
                            <div className="flex flex-wrap gap-6 w-full">
                               
                               
                              {dsTG.map(
                                 (val, key) =>{
                                    return (
                                        <div className="flex items-center" key={key}>
                                        <label className="flex items-center cursor-pointer relative">
                                            <input
                                            type="checkbox"
                                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                            checked={selectedTG.some((tg) => tg.idTacGia == val.idTacGia)}
                                            onChange={() => handleCheckboxChange(val)}
                                            />
                                         
                                            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                />
                                            </svg>
                                            </span>
                                        </label>
                                        <label className="cursor-pointer ml-2 text-black text-sm">
                                            {val.hoTen}
                                        </label>
                                        </div>

                                    ) }
                              )
                            }  
                         


                            </div>





                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-xl pt-3 ml-4"
                            >Chọn thể loại:</h1>

                            <div className="flex flex-wrap gap-6 w-full">
                               
                               
                            {dsTL.map(
                                 (val, key) =>{
                                    return (
                                        <div className="flex items-center" key={key}>
                                        <label className="flex items-center cursor-pointer relative">
                                            <input
                                            type="checkbox"
                                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                            checked={selectedTL.some((tl) => tl.idTheLoai == val.idTheLoai)}
                                            onChange={() => handleCheckboxTLChange(val)}
                                            />

                                            <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                />
                                            </svg>
                                            </span>
                                        </label>
                                        <label className="cursor-pointer ml-2 text-black text-sm">
                                            {val.tenTheLoai}
                                        </label>
                                        </div>

                                    ) }
                              )
                            }   
                             </div>

                        <label for="name" className="text-black text-sm font-bold leading-tight tracking-normal">Sắp xếp theo</label>
                        <div>
                        <select
                            value={sapXep1}
                            onChange={(e) => setSapXep1(e.target.value)}
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                        pl-3 text-sm border-gray-300 rounded border"
                            >
                            <option value={0} >Giá tăng dần</option>
                            <option value={1} >Giá giảm dần</option>
                            </select>
                        </div>
    
                            <div className="flex items-center justify-start w-full my-5">                   
                                <button className="mx-auto px-7 py-4 bg-orrange-500 text-black rounded-lg font-sans text-xs font-bold uppercase" 
                                onClick={()=>handleApDungFilter()}
                                >Áp dụng</button>
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

      )
}

export default FormFilter
