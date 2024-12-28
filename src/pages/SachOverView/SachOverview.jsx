import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import ChiTietSach from '../../components/ChiTietSach/ChiTietSach'
import { useParams } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import Footer from '../../components/Footer/Footer';

function SachOverview() {
    const { isbn } = useParams();
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
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

  return (
    <div>
      <Navbar refresh={refresh}/>
      <ChiTietSach maSach={isbn} openAlert={openAlert}  refresh={handleRefreshGH}/>
      {/* <h1>Chi tiết sách</h1>
      <p>Mã ISBN: {isbn}</p> */}
      {/* Thêm các thông tin chi tiết sách tại đây */}
      <Footer/>
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  )
}

export default SachOverview
