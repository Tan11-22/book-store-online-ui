import React , {useState, useEffect}from 'react'
import CardSach from '../../components/CardSach/CardSach'
import Navbar from '../../components/navbar/Navbar';
import Alert from '../../components/Alert/Alert';
import { useLocation } from 'react-router-dom';
import { timSach } from '../../context/SachService';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function SearchPage() {


    const query = useQuery();
    const page = query.get('page');
    const search = query.get('search');

    const [dataSach, setDataSach] = useState()
    const [loading, setLoading] = useState(true)
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const size = 12
    useEffect(
        () => {
            const fetchData1 = async () => {
                try {
                  const result = await timSach(search,(page-1)*size,size);
                  setDataSach(result.data)
                  setLoading(false)
                } catch (error) {
                  console.log(error)
                }
              };
              fetchData1(); 
            console.log(dataSach)
        }, 
        [search]
    )
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
      <Navbar/>
      <div className='mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300'>
            <div className='w-[75rem] bg-white mx-auto rounded-lg '>

               {dataSach? 
               <div>
                <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Đây là kết quả tìm thấy cho "{search}"</h1>
                    <div className='grid grid-cols-4 gap-x-6 '>
                        
                        {
                            dataSach.map(
                                (val, key) =>{
                                return (
                                    <CardSach key ={key} data={val} openAlert={openAlert}/>
                                )
                                }
                            )
                        }
                    </div>
                </div>:
                    <h1 className="text-black font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-4" >Không tìm thấy kết quả phù hợp cho "{search}"</h1>
                    
                }
            </div>
      </div>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

export default SearchPage
