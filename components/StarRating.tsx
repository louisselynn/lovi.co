import { FaStar, FaStarHalf } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

  return (
    <div className="flex items-center gap-1">
      {/* Render full stars */}
      {Array.from({ length: filledStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-500" />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalf className="text-yellow-500" />}
      
    </div>
  );
};

export default StarRating;
