import React from 'react'
import StarRating from './StarRating'

const ReviewCard = ({review}) => {
  return (
    <div className="flex flex-col gap-2 w-[350px] h-44 rounded-lg border-2 border-neutral-200 p-3">
      <StarRating rating={review.rating}/>
      <h3 className="text-xl font-medium">{review.name}</h3>
      <div className=" max-h-[70px] overflow-hidden">
        <p className="text-xs font-light text-gray-600">"{review.comment}"</p>
      </div>
    </div>
  )
}

export default ReviewCard