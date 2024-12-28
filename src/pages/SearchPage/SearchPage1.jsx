import React , {useState, useEffect}from 'react'
import CardSach from '../../components/CardSach/CardSach'
import Navbar from '../../components/navbar/Navbar';
import Alert from '../../components/Alert/Alert';
import { useLocation } from 'react-router-dom';
import { demSoLuongSachTimRa, postCountTimSach1, postTimSach1, timSach } from '../../context/SachService';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import CardSach1 from '../../components/CardSach/CardSach1';
import FormFilter from '../../components/Form/FormFilter';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function SearchPage1() {
  const navigate = useNavigate()

    const query = useQuery();
    const getPage = parseInt(query.get('page'))
    const page = getPage > 0 ? getPage: 1 
    const search = query.get('search');
    const tg = query.get('tg').split(',');
    const tl = query.get('tl').split(',');
    const sapXep1 = parseInt(query.get('sx'))
    const tacGiaIds = tg !="" ? tg.map(item => {
      const [id, hoTen] = item.split('-');
      return { 'idTacGia': id, 'hoTen':hoTen }
    }): []
    const theLoaiIds =tl !="" ? tl.map(item => {
      const [id, tenTheLoai] = item.split('-');
      return { 'idTheLoai': id, 'tenTheLoai':tenTheLoai };
    }): []

    const [tongSachTim, setTongSachTim] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [dataSach, setDataSach] = useState()
    const [loading, setLoading] = useState(true)
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [openFilter, setOpenFilter] = useState(false)
    const [filterTG, setFilterTG] = useState(tacGiaIds)
    const [filterTL, setFilterTL] = useState(theLoaiIds)
    // const [sapXep, setSapXep] = useState(sapXep1)
    const size = 8
   
    // console.log(filterTG)
    useEffect(
      () => {
          const fetchData1 = async () => {
              try {
                const result = await postCountTimSach1(search,filterTG,filterTL);
                setTongSachTim(result.data)
              } catch (error) {
                console.log(error)
              }
            };
            fetchData1(); 
          console.log(dataSach)
      }, 
      [search]
  )
    
  useEffect(
    () => {
      setTotalPage(Math.ceil(tongSachTim/size))
    }, 
    [tongSachTim]
)


    useEffect(
        () => {
          console.log(page,totalPage)
            if(totalPage == 0) return 
            const start = page <= totalPage ? page: totalPage
            const fetchData1 = async (start) => {
             
              console.log(start)
                try {
                  const result = await postTimSach1(search,filterTG,filterTL,sapXep1,(start-1)*size,size);
                  setDataSach(result.data)
                  setLoading(false)
                } catch (error) {
                  console.log(error)
                }
              };

                fetchData1(start); 

              
            console.log(dataSach)
        }, 
        [totalPage, page]
    )
    const closeAlert = () => {
      setShowAlert(false);
    };

    const openAlert = (mess) => {
      setAlertMessage(mess);
      setShowAlert(true);
    }
    const handleChagePage = (newPage) => {
      const tg1 = filterTG
      .map(item => `${item.idTacGia}-${item.hoTen}`) 
      .join(','); 

      const tl1 = filterTL
      .map(item => `${item.idTheLoai}-${item.tenTheLoai}`) 
      .join(','); 
      navigate(`/tim-kiem?page=${newPage}&search=${search}&tg=${tg1}&tl=${tl1}&sx=${sapXep1}`);

      // return
    }
    // const handleChangeFilter = () => {
    //   const tg1 = filterTG
    //   .map(item => `${item.idTacGia}-${item.hoTen}`) 
    //   .join(','); 

    //   const tl1 = filterTL
    //   .map(item => `${item.idTheLoai}-${item.tenTheLoai}`) 
    //   .join(','); 
    //   console.log(tg1,tl1)
    //   navigate(`/tim-kiem?page=${page}&search=${search}&tg=${tg1}&tl=${tl1}&sx=${sapXep}`);
    // }

    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    }, [page]);

    const [refresh, setRefresh] = useState(false)

    const handleRefreshGH = () => {
        setRefresh(!refresh)
    }

  if (loading) return null
  return (
    <div>
      <Navbar refresh={refresh}/>
      <div className='bg-zinc-300 h-full py-2 '>
        <div className='grid grid-cols-4 gap-x-4 max-w-7xl mx-auto px-2 '>
            <div className='bg-white p-6 px-0  rounded-lg'>
            <div className='w-full  p-3'>
            <p className="block font-sans text-base antialiased font-bold leading-none text-black ">
            Tìm theo tác giả:
              </p>
            { filterTG.length> 0 ?
                    filterTG.map(
                      (val1,key1) => {
                        return (
                          <p key={key1} className="ml-4 block font-sans text-base antialiased font-normal leading-normal text-black">
                             - {val1.hoTen}
                          </p>
                        )
                      }
                    )
                    :
                    <p className="ml-4 block font-sans text-base antialiased font-normal leading-normal text-black">
                          (Chưa có điều kiện)
                    </p>
                  }

          <p className="block font-sans text-base antialiased font-bold leading-none text-black ">
              Tim theo thể loại:
            </p>
              { filterTL.length > 0 ?
                      filterTL.map(
                        (val1,key1) => {
                          return (
                            <p key={key1} className="ml-4 block font-sans text-base antialiased font-normal leading-normal text-black">
                               - {val1.tenTheLoai}
                            </p>
                          )
                        }
                      )
                      : 
                      <p className="ml-4 block font-sans text-base antialiased font-normal leading-normal text-black">
                          (Chưa có điều kiện)
                    </p>
                    }
                         <p className="block font-sans text-base antialiased font-bold leading-none text-black ">
              Sắp xếp theo:
            </p>
              
                      <p className="ml-4 block font-sans text-base antialiased font-normal leading-normal text-black">
                          - {sapXep1==0?"Giá tiền tăng dần":"Giá tiền giảm dần"}
                    </p>

</div>
            <button
              className=" mx-auto 
                        bg-zinc-300 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-2/3 bg-black/10 text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button"
                        onClick={() => setOpenFilter(true)}
                        >
                          Tuỳ chỉnh tìm kiếm
                        </button>

                </div>
              
            <div className='col-span-3 bg-white mx-auto rounded-lg min-h-96 w-full'>

               {tongSachTim > 0? 
               <>
                <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Đây là kết quả tìm thấy cho "{search}"</h1>
                    <div className='grid grid-cols-2 gap-x-2 '>
                        
                        {
                            dataSach.map(
                                (val, key) =>{
                                return (
                                    <CardSach1 key ={key} data={val} openAlert={openAlert} refresh={handleRefreshGH}/>
                                )
                                }
                            )
                        }
                    </div>
                        {/* <div className='w-auto mx-auto'> */}
                          <div className="flex items-center justify-center gap-8 my-5">
                                <button 
                                  disabled={page<=1}
                                  className="relative h-8 max-h-[32px] w-8 max-w-[32px] bg-orrange-500 select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button"
                                  onClick={()=>handleChagePage(page-1)}
                                  >
                                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                      aria-hidden="true" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                    </svg>
                                  </span>
                                </button>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                  Trang <strong className="text-gray-900">{page}</strong>/
                                  <strong className="text-gray-900">{totalPage}</strong>
                                </p>
                                <button
                                  className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none  bg-orrange-500 rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button"
                                  onClick={()=>handleChagePage(page+1)}
                                  disabled={page>=totalPage}
                                  >
                                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                      aria-hidden="true" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                    </svg>
                                  </span>
                                </button>
                              </div>
                        {/* </div> */}
                
                </>
                
                
                
                
                
                
                
                
                :
                    <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Không tìm thấy kết quả phù hợp cho "{search}"</h1>
                    
                }
            </div>

            </div>

      </div>
      <Footer/>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
      {openFilter &&<FormFilter isOpen={openFilter} 
      filterTG={filterTG}
      filterTL={filterTL}
      onClose={()=>setOpenFilter(false)}
      sapXep={sapXep1}
      search={search}
      />}
    </div>
  )
}

export default SearchPage1
