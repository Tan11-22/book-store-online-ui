import React , {useState, useEffect}from 'react'
import CardSach from '../../components/CardSach/CardSach'
import { getSach, getSachBanChay } from '../../context/HomeService';
import Navbar from '../../components/navbar/Navbar';
import Alert from '../../components/Alert/Alert';
import Footer from '../../components/Footer/Footer';
import banner from '../../components/assets/banner.png'
import { timSach } from '../../context/SachService';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
    const [dataSach, setDataSach] = useState()
    const [loading, setLoading] = useState(true)
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const [dataSachBC, setDataSachBC] = useState()
    useEffect(
        () => {
            const fetchData1 = async () => {
                try {

                  const result = await getSach(0,12);
                  const resultbc = await getSachBanChay(0,4);
                  setDataSachBC(resultbc.data)
                  setDataSach(result.data)

                  setLoading(false)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData1(); 
            console.log(dataSach)
        }, 
        []
    )
    const closeAlert = () => {
      setShowAlert(false);
    };

    const openAlert = (mess) => {
      setAlertMessage(mess);
      setShowAlert(true);
    }
    const [refresh, setRefresh] = useState(false)

    const handleRefreshGH = () => {
        setRefresh(!refresh)
    }
    const handleClick = () => {
      navigate("/top-sach-ban-chay");
    };

  if (loading) return null
  return (
    <div>
      <Navbar refresh={refresh}/> 
      {/* <div className='mx-auto  flex w-full items-center justify-between py-2  bg-zinc-300'>
        <img src={banner} className='w-full h-80'/>
      </div> */}
      <div className='mx-auto  max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300'>
        <div className='max-w-7xl bg-white mx-auto rounded-lg'>
          <div className=' flex justify-between'>
            <h3 className="text-gray-800 font-lg font-medium tracking-normal leading-tight  text-2xl py-2 px-4 ">
              Bán chạy nhất</h3>
            <button
              class=" mx-4 my-2 select-none rounded-lg bg-orrange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleClick}
              >
              Xem thêm
            </button>
          </div>
          <div className='grid grid-cols-4 gap-x-6 '>

              {
                  dataSachBC.map(
                    (val, key) =>{
                      return (
                        <CardSach key ={key} data={val} openAlert={openAlert} refresh={handleRefreshGH}/>
                      )
                    }
                  )
              }
          </div>
          </div>
      </div>
      <div className='mx-auto  max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300'>
        <div className='max-w-7xl bg-white mx-auto rounded-lg'>
          <div className=' flex justify-between'>
            <h3 className="text-gray-800 font-lg font-medium tracking-normal leading-tight  text-2xl py-2 px-4 ">
              Các đầu sách mới</h3>
            {/* <button
              class=" mx-4 my-2 select-none rounded-lg bg-orrange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Xem thêm
            </button> */}
          </div>
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
          </div>
      </div>
      
      <Footer/>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

export default Home
