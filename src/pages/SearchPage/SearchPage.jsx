import React , {useState, useEffect}from 'react'
import CardSach from '../../components/CardSach/CardSach'
import Navbar from '../../components/navbar/Navbar';
import Alert from '../../components/Alert/Alert';
import { useLocation } from 'react-router-dom';
import { demSoLuongSachTimRa, timSach } from '../../context/SachService';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function SearchPage() {
  const navigate = useNavigate()

    const query = useQuery();
    const getPage = parseInt(query.get('page'))
    const page = getPage > 0? getPage: 1 
    const search = query.get('search');
    const [tongSachTim, setTongSachTim] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [dataSach, setDataSach] = useState()
    const [loading, setLoading] = useState(true)
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const size = 8

    useEffect(
      () => {
          const fetchData1 = async () => {
              try {
                const result = await demSoLuongSachTimRa(search);
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
            const start = page <= totalPage ? page: totalPage
            const fetchData1 = async (start) => {
             
              console.log(start)
                try {
                  const result = await timSach(search,(start-1)*size,size);
                  setDataSach(result.data)
                  setLoading(false)
                } catch (error) {
                  console.log(error)
                }
              };
              if(start){
                fetchData1(start); 
              }
              
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
      navigate(`/tim-kiem?page=${newPage}&search=${search}`);

      // return
    }

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
      <div className='mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300 '>
            <div className='max-w-7xl bg-white mx-auto rounded-lg min-h-96'>

               {dataSach? 
               <div>
                <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Đây là kết quả tìm thấy cho "{search}"</h1>
                    <div className='grid grid-cols-4 gap-x-6 '>
                        
                        {
                            dataSach.map(
                                (val, key) =>{
                                return (
                                    <CardSach key ={key} data={val} openAlert={openAlert} refresh={handleRefreshGH}/>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                      aria-hidden="true" class="w-4 h-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                      aria-hidden="true" className="w-4 h-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                    </svg>
                                  </span>
                                </button>
                              </div>
                        {/* </div> */}
                
                </div>
                
                
                
                
                
                
                
                
                :
                    <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Không tìm thấy kết quả phù hợp cho "{search}"</h1>
                    
                }
            </div>

            

      </div>
      <Footer/>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

export default SearchPage
