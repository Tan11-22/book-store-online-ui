import React from 'react'

function Chip({ label, onDelete }) {
  return (
    <div
      data-dismissible="chip"
      className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-black py-1.5 px-3 font-sans text-xs font-bold uppercase text-white mx-1 my-1 inline-block"
    >
      <span className="mr-5">{label}</span>
        {onDelete&&
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
        }
    </div>
  )
}

export default Chip
