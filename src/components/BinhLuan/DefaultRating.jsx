import { useState } from 'react';

export function DefaultRating({ selectedRating = 0, readonly = false, onRatingSelect }) {
  const [rating, setRating] = useState(selectedRating);
  const [hoverRating, setHoverRating] = useState(0);
  const colorBorder = readonly ? "none" : "white"
  const handleRating = (index) => {
    if (!readonly) {
      const newRating = index + 1;
      setRating(newRating);
      if (onRatingSelect) {
        onRatingSelect(newRating);
      }
    }
  };

  const handleMouseEnter = (index) => {
    if (!readonly) {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div className="grid place-items-start overflow-x-scroll rounded-lg lg:overflow-visible">
      <div className="inline-flex items-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={!readonly ? 'cursor-pointer' : ''}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={index < (hoverRating || rating) ? 'currentColor' : colorBorder}
              className={`w-6 h-6 ${
                index < (hoverRating || rating) ? 'text-yellow-700' : 'text-blue-gray-500'
              }`}
              stroke={index < (hoverRating || rating) ? colorBorder : 'currentColor'}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
