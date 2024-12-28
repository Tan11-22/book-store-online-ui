import React, {useState, useEffect} from 'react'
import { getSachBanChay } from '../../context/HomeService';
import Navbar from '../../components/navbar/Navbar';
import CardSach from '../../components/CardSach/CardSach';
import Footer from '../../components/Footer/Footer';
import Alert from '../../components/Alert/Alert';

function PageSachBanChay() {

    const [dataSach, setDataSach] = useState()
    const [loading, setLoading] = useState(true)
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(
        () => {
            const fetchData1 = async () => {
                try {
                  const result = await getSachBanChay(0,16);
                  setDataSach(result.data)
                  setLoading(false)
                } catch (error) {
                  console.log(error)
                }
              };
                fetchData1(); 
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

  if (loading) return null

  return (
    <div>
    <Navbar refresh={refresh}/>
    <div className='mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300 '>
          <div className='max-w-7xl bg-white mx-auto rounded-lg min-h-96'>

             {dataSach? 
             <div>
              <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Các sách bán chạy</h1>
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
              
              :
                  <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Không tìm thấy kết quả phù hợp </h1>
                  
              }
          </div>

          

    </div>
    <Footer/>
    {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
  </div>
  )
}

export default PageSachBanChay
