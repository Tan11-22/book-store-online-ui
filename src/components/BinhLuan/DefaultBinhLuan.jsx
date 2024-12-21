import React from 'react'
import { DefaultRating } from './DefaultRating'

function DefaultBinhLuan({data}) {
  return (
    <div>
      <div className="grid grid-cols-10 gap-2 mx-5 my-5">
                                <div className="row-span-3 mx-auto my-auto">
                                    <img
                                        src={`http://localhost:8080/api/sach-service/hinh-anh/getUser?name=${data.hinhAnh}`}
                                        alt="avatar"
                                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                                    />
                                </div>
                                <div className="col-span-2 col-start-2 row-start-1 ">
                                    <h6 className="text-slate-800 font-semibold">
                                    {data.hoTen}
                                    </h6>
                                    <DefaultRating selectedRating={data.diem} readonly/>
                                    </div>
                                {/* <div className="col-start-3 row-start-1">sao danh gia</div> */}
                                <div className="col-span-3 col-start-4 row-start-1 ">{data.ngay}</div>
                                <div className="col-span-9 col-start-2 row-start-2 h-[1px] w-full bg-black"></div>
                                <div className="col-span-9 row-span-4 col-start-2 row-start-2 rounded-xl bg-white mt-2">
                                    <p className='mx-5 min-h-14'>
                                   - {data.noiDung}
                                    </p>
                       
                                </div>
                                <div className="col-span-10 mx-2 h-[2px] w-full bg-black"></div>
                            </div>          
    </div>
  )
}

export default DefaultBinhLuan
