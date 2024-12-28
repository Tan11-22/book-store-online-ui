import React, { useEffect } from 'react';

const Alert = ({ message, onClose, type = 'success' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
  }, [onClose]);

  const alertStyles = {
    success: 'bg-green-500 text-black',
    error: 'bg-red-600 text-white',
  };

  return (
    <div
      role="alert"
      data-dismissible="alert"
      className={`fixed bottom-4 right-4 z-50 flex w-auto px-4 py-4 text-base rounded-lg font-regular shadow-lg max-w-96 min-w-64 ${alertStyles[type]}`}
    >
      <div className="shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          {type === 'success' ? (
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          ) : (
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75S6.615 21.75 12 21.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 18a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5zm0-11.625a.75.75 0 00-.75.75v3.75a.75.75 0 001.5 0v-3.75a.75.75 0 00-.75-.75zm0 6.75a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75z"
              clipRule="evenodd"
            ></path>
          )}
        </svg>
      </div>
      <div className="ml-3 mr-12">
        <h5 className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal">
          {type === 'success' ? 'Success' : 'Error'}
        </h5>
        <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed">
          {message}
        </p>
      </div>
      <button
        data-dismissible-target="alert"
        className="!absolute top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={onClose}
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Alert;
