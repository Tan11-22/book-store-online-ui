import React from 'react'
import { DefaultRating } from './DefaultRating'
// import { useState } from 'react';
function BinhLuan() {
    const handleRatingSelect = (rating) => {
        console.log('Selected rating:', rating);
      };
  return (
    <div>
      <h1>Day la trang test</h1>
        <div className="grid grid-cols-4 grid-rows-6 gap-3 mx-5">
            <div className="col-span-3 row-span-5 bg-zinc-300">
                {/* <div className="grid grid-cols-1 grid-rows-2 gap-3"> */}
                    <div >                        
                            <div className="grid grid-cols-10  gap-2 mx-5 rounded-xl">
                                <div className="row-span-2 mx-auto my-auto">
                                    <img
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        alt="avatar"
                                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                                    />
                                </div>
                                <div className="col-span-2 col-start-2 row-start-1">
                                    <h6 className="text-slate-800 font-semibold">
                                    Tania Andrew
                                    </h6>
                                    <DefaultRating onRatingSelect={handleRatingSelect}/>
                                    </div>
                                <div className="col-span-9 row-span-4 col-start-2 row-start-2 rounded-xl bg-white">
                                    <p className='mx-5 my-5'>
                                    Xem phim
                                Monkey D. Luffy, 1 cậu bé rất thích Đảo hải tặc có ước mơ tìm được kho báu One Piece và trở thành Vua hải tặc - Pirate King. Lúc nhỏ, Luffy tình cờ ăn phải trái quỉ (Devil Fruit) Gomu Gomu, nó cho cơ thể cậu khả năng co dãn đàn hồi như cao su nhưng đổi lại cậu sẽ không bao giờ biết bơi. Sau đó Luffy lại được Shank cứu thoát tuy nhiên ông ta bị mất 1 cánh tay. Sau đấy Shank chia tay Luffy và để lại cho cậu cái mũ rơm (Straw Hat) và nói rằng: Sau này bao giờ thành cướp biển hãy gặp ta và trả lại nó. Chính lời nói này đã thúc đầy Luffy trở thành 1 cướp biển thật sự.Hãy cùng theo dõi xem liệu Luffy có thể trở thành đạt được kho báu One Piece và trở thành Vua Hải Tặc không nhé.
                                    </p>
                       
                                </div>
                            </div>          
                    </div>
                    <div >
                    <div className="grid grid-cols-10  gap-2 mx-5">
                                <div className="row-span-3 mx-auto my-auto">
                                    <img
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        alt="avatar"
                                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                                    />
                                </div>
                                <div className="col-span-2 col-start-2 row-start-1">
                                    <h6 className="text-slate-800 font-semibold">
                                    Tania Andrew
                                    </h6>
                                    <DefaultRating selectedRating={3} readonly/>
                                    </div>
                                {/* <div className="col-start-3 row-start-1">sao danh gia</div> */}
                                <div className="col-span-3 col-start-4 row-start-1">10:40 12/11/2024</div>
                                <div className="col-span-9 row-span-4 col-start-2 row-start-2 rounded-xl bg-white">
                                    <p className='mx-5 my-5'>
                                    Xem phim
                                Monkey D. Luffy, 1 cậu bé rất thích Đảo hải tặc có ước mơ tìm được kho báu One Piece và trở thành Vua hải tặc - Pirate King. Lúc nhỏ, Luffy tình cờ ăn phải trái quỉ (Devil Fruit) Gomu Gomu, nó cho cơ thể cậu khả năng co dãn đàn hồi như cao su nhưng đổi lại cậu sẽ không bao giờ biết bơi. Sau đó Luffy lại được Shank cứu thoát tuy nhiên ông ta bị mất 1 cánh tay. Sau đấy Shank chia tay Luffy và để lại cho cậu cái mũ rơm (Straw Hat) và nói rằng: Sau này bao giờ thành cướp biển hãy gặp ta và trả lại nó. Chính lời nói này đã thúc đầy Luffy trở thành 1 cướp biển thật sự.Hãy cùng theo dõi xem liệu Luffy có thể trở thành đạt được kho báu One Piece và trở thành Vua Hải Tặc không nhé.
                                    </p>
                       
                                </div>
                            </div>          
                    </div>
                {/* </div> */}
            </div>
            <div className="row-span-3 col-start-4 bg-black">2</div>
        </div>
    </div>
  )
}

export default BinhLuan
