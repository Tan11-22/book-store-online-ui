import React, {useState} from 'react'
const images = {
    'img1' : "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
    'img2': "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
    'img3': "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80",
    'img4': "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80",
    'img5':"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80" ,
    'img6': "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80",
}
function ChiTietSach() {
  const [image, setImage] = useState('img1')
  const handleClickImage = (image1) => {
    setImage(image1)
  }
  return (
    <div className='bg-zinc-300 h-full py-2'>
      <div className='grid grid-cols-2 gap-x-8 max-w-6xl mx-auto px-2 bg-white'>
        <div className='my-4'>
          <div className="grid gap-4">
            <div className='flex justify-center'>
              <img className="h-auto w-3/4 max-w-full rounded-lg object-cover object-center md:h-[400px]"
                src={images[image]}
                alt="" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img
                  src={images["img2"]}
                  className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image"
                  onClick={()=>{handleClickImage("img2")}} />
              </div>
            <div>
              <img
                src={images["img3"]}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage("img3")}}/>
            </div>
            <div>
              <img
                src={images["img4"]}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage("img4")}}/>
            </div>
            <div>
              <img
                src={images["img5"]}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage("img5")}}/>
            </div>
            <div>
              <img
                src={images["img6"]}
                class="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" 
                onClick={()=>{handleClickImage("img6")}}/>
            </div>
            </div>
          </div>

          </div>
        <div className='my-4'>
            <p>Lorem</p>
        </div>
      </div>
    </div>
  )
}

export default ChiTietSach


