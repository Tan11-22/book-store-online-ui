import React , {useState, useEffect}from 'react'
import CardSach from '../../components/CardSach/CardSach'
import { getSach } from '../../context/HomeService';
import Navbar from '../../components/navbar/Navbar';
import Alert from '../../components/Alert/Alert';

function Home() {
    const [dataSach, setDataSach] = useState()
    const [loading, setLoading] = useState(true)
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    
    useEffect(
        () => {
            const fetchData1 = async () => {
                try {
                  const result = await getSach(0,9);
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


  if (loading) return null
  return (
    <div>
      <Navbar/>
      <div className='mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-8  bg-zinc-300'>
          <div className='grid grid-cols-4 gap-x-6 max-w-7xl bg-white mx-auto rounded-lg'>
              {/* <CardSach/>
              <CardSach/>
              <CardSach/>
              <CardSach/>
              <CardSach/> */}
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
      </div>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

export default Home
