import React, {useState, useEffect} from 'react'
import { getDanhSachDonMua, huyDMS } from '../../context/GioHangService';
import cancel from '../assets/cancel.png'
import Alert from '../Alert/Alert';
import ConfirmForm from '../Form/ConfirmForm';
function QuanTriDonMuaSach() {
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')
    const [typeAlert, setTypeAlert] = useState('success')
    const [openConfirmForm, setOpenConfirmForm] = useState(false)
    const [content, setContent] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const [dataReq,setDataReq] = useState({})
    const [refresh,setRefresh] = useState(false)
    useEffect(
        () => {      
            const fetchData = async () => {
                try {
                  const result = await getDanhSachDonMua();
                  setData(result.data)
                } catch (error) {
                  console.log(error)
                }
              }
                fetchData();       
        }, 
        [refresh]
    )
    const formatDate = (dateString) => {
      // Tách chuỗi ngày thành các phần tử
      const [year, month, day] = dateString.split('-');
      // Sắp xếp lại các phần tử theo định dạng dd-MM-yyyy
      return `${day}-${month}-${year}`;
    }
    const handleHuyDon = (id) => {
      setDataReq({'idDon':id})
      setContent("Bạn muốn huỷ đơn mua sách #"+ String(id)+ "?")
      setOpenConfirmForm(true)
  }
  const handleHuyDon1 = () => {
          const fetchData = async () => {
              try {
                const result = await huyDMS(dataReq);
                  if(result.code == 200) {
                      setRefresh(!refresh)
                  }
                  else {
                      setMessage(result.status)
                      setTypeAlert('error')
                      setOpenAlert(true)
                  }
                  setOpenConfirmForm(false)
              } catch (error) {
                console.log(error)
              }
            };
            fetchData(); 
      }
  return (
    <div>
      <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-2xl pt-3 ml-5">Danh sách đơn hàng đã đặt của người dùng:</h1>
      <div
  class="relative flex flex-col w-full p-3 h-[500px] overflow-scroll text-black bg-white shadow-md font-bold  bg-clip-border mt-8">
    {data.length > 0 ? <>
  <table class="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Id đơn
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Ngày mua
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Sản phẩm
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Trạng thái
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Địa chỉ giao
          </p>
        </th>
        <th class="p-4 border border-blue-gray-100 bg-blue-gray-50 text-center align-middle">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 ">
            Huỷ đơn
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(
          (val,key) => {
            return (
              <tr key={key}> 
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    #{val.donMuaSach.idDonMuaSach}
                  </p>
                </td>
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {formatDate(val.donMuaSach.ngayMua)}
                  </p>
                </td>
                <td class="p-4 border border-blue-gray-50">
                  {
                    val.sachs.map(
                      (val1,key1) => {
                        return (
                          <p key={key1} class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                           - {val1.tenSach} x {val1.soLuong} cuốn
                          </p>
                        )
                      }
                    )
                  }
                  
                </td>
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai1===1?"Chờ duyệt":""}
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai1===2?"Đang giao":""}
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai1===3?"Đã giao":""}
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {val.donMuaSach.trangThai1===4?"Đã huỷ":""}
                    </p>
                    
                </td>
                <td class="p-4 border border-blue-gray-50">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {val.donMuaSach.diaChiGiao}
                  </p>
                </td>
                <td class="p-4 border border-blue-gray-50 text-center align-middle">
                  {
                    val.donMuaSach.trangThai1===4?
                    <p class="block font-sans text-sm antialiased font-normal leading-normal  text-red-600 italic">
                      Đơn hàng đã bị huỷ
                    </p>
                    :
                    (val.choPhepHuy?
                     <button
                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={()=> handleHuyDon(val.donMuaSach.idDonMuaSach)}
                        >    
                            <img src={cancel} alt='Logo' className='h-10 w-auto' />
                        </button>
                        :
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Đã hết thời hạn huỷ
                    </p>)
                  }
                  
                </td>
            </tr>
            )
          }
        )
      }

    </tbody>
  </table>
  <p class="my-2 block font-sans text-base antialiased font-normal leading-normal text-red-600 italic">
    * Chỉ có thể huỷ những đơn hàng chưa giao trong thời hạn 2 ngày.
  </p> 
  </> : 
  <p class="ml-6 block font-sans text-lg antialiased font-normal leading-normal text-black">
  - Bạn chưa đặt mua sách nào.
</p> 
}
</div>
    
{openAlert && <Alert  message={message} onClose={()=>setOpenAlert(false)} type={typeAlert}/> }
                <ConfirmForm title={'Xác nhận huỷ đơn mua sách'}
                    isOpen={openConfirmForm}
                        content={content}
                        onClose1={()=>setOpenConfirmForm(false)}
                        onClose2={()=>handleHuyDon1()}
                />
    </div>
  )
}

export default QuanTriDonMuaSach
