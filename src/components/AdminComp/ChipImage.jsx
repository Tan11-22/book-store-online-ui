import React, {useState, useEffect} from 'react'

function ChipImage({file, onDelete}) {

    const [imageSrc, setImageSrc] = useState(null);
    useEffect(() => {
        if (file && onDelete) {
          const objectUrl = URL.createObjectURL(file);
          setImageSrc(objectUrl);
    
          // Hủy URL đối tượng khi component bị unmount hoặc file thay đổi
          return () => URL.revokeObjectURL(objectUrl);
        }
      }, [file]);
  return (
    <div
      data-dismissible="chip"
      className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-zinc-300 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white mx-1 my-1 inline-block"
    >
        {imageSrc && <img src={imageSrc} alt={file.name} className="h-12 w-12 mr-5 rounded" />}
      {/* <span className="mr-5 p-3">{file.name}</span> */}
      {
        onDelete ?
          <button
          data-dismissible-target="chip"
          className="!absolute top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={onDelete}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
        :
        <img src={`http://localhost:8080/api/quan-ly-sach-service/hinh-anh/get?name=${file?file:"default.png"}`}
        alt={file.name} className="h-12 w-12 mr-5 rounded" />
      }

    </div>
  )
}

export default ChipImage
