import React, {useState} from 'react'
import { DefaultRating } from './DefaultRating';
import { binhLuan } from '../../context/BinhLuanService';

function FormBinhLuan({isbn, refresh}) {
  const username = localStorage.getItem('username')
  const hoTen = localStorage.getItem('hoTen')
  const avatar = localStorage.getItem('hinhAnh')
    const [formData, setFormData] = useState({
        user: username,
        maSach: isbn,
        diem: 1,
        binhLuan: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    const handleRatingSelect = (rating) => {
        setFormData((prevData) => ({
            ...prevData,
            diem: rating,
          }));
      };

      const handleSubmit = (e) => {
        // e.preventDefault();
        console.log('Form data submitted:', formData);
        const fetchData = async () => {
            try {
              const result = await binhLuan(formData);
              // console.log(result.code,result.status)
              if (result.code === 201) {
                console.log("abbccc")
                refresh()
                setFormData({
                  user: username,
                  maSach: isbn,
                  diem: 1,
                  binhLuan: '',
                })
              }
            } catch (error) {
              console.log(error)
            }
        };
        fetchData(); 
      };
  return (
    <div>
        <div className="grid grid-cols-10  gap-2 mx-5 my-5 p-2 border border-black rounded-xl bg-gray-900 min-h-64">
                   {username ?
                   <>
                   <div className="row-span-2 mx-auto my-auto">
                                    <img
                                        src={`http://localhost:8080/api/sach-service/hinh-anh/getUser?name=${avatar?avatar:"default.png"}`}
                                        alt="avatar"
                                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                                    />
                                </div>
                                <div className="col-span-2 col-start-2 row-start-1">
                                    <h6 className="text-slate-800 font-semibold text-white">
                                    {hoTen}
                                    </h6>
                                    <DefaultRating selectedRating={formData.diem} onRatingSelect={handleRatingSelect}/>
                                    </div>
                                <div className="col-span-9 row-span-4 col-start-2 row-start-2 rounded-xl bg-gray-900">
                                    {/* <input type='text' className='mx-5 my-5 min-w-2.5 min-h-32'>
                                    
                                    </input> */}
                                    <textarea className=' mx-5 w-[90%] min-h-32 p-2 border border-black'
                                      name="binhLuan"
                                      value={formData.binhLuan}
                                      onChange={handleChange}
                                    ></textarea>
                                    
                                </div>
                                <div className='max-w-44 col-span-2 col-start-9 row-start-6'>
                                    <button
                                        className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                                        hover:shadow-gray-900/20 block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none "
                                        type="button"
                                        onClick={()=> handleSubmit()}
                                        >
                                        Bình luận
                                        </button>
                                    </div>
                                    </>
                                    :
                                    <>
                                       <div className='max-w-72 col-span-10 mx-auto my-auto row-start-1 '>
                                       <h6 className="text-slate-800 font-semibold text-xl text-white">
                                        Bạn cần phải đăng nhập để bình luận về cuốn sách này!
                                        </h6>
                                        </div>
                                        {/* <div className=' col-span-10 mx-auto  row-start-2 '>
                                    <button
                                        className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                                        hover:shadow-gray-900/20 block max-w-44 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none
                                        mx-auto "
                                        type="button"
                                        // onClick={()=> handleSubmit()}
                                        >
                                        Đăng nhập
                                        </button>
                                    </div> */}
                                    <div className="col-span-10 mx-auto row-start-2 flex">
                                        {/* Mũi tên màu cam dài gấp đôi */}
                                        <div className="mr-2 flex ">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 60 24"
                                            strokeWidth={2}
                                            stroke="orange"
                                            className="w-20 h-10 -mr-2"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M2 12H50M50 12L44 6M50 12L44 18"
                                            />
                                          </svg>
                                        </div>

                                        {/* Nút "Đăng nhập" */}
                                        <button
                                        className="bg-orrange-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 
                                        hover:shadow-gray-900/20 block max-w-44 max-h-10 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none
                                        mx-auto "
                                        type="button">
                                          Đăng nhập
                                        </button>
                                      </div>

                                    </>
                                  }
                            </div> 

    </div>
  )
}

export default FormBinhLuan
