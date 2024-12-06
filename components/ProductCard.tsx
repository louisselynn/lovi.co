import React from 'react'
import StarRating from "./StarRating"
import Link from 'next/link'

const ProductCard = ({product}) => {

  return (
    <div className='flex flex-col p-5 hover:shadow-lg rounded-lg hover:bg-slate-50'>
      <Link href={`products/${product.id}`} >
      <img src={product?.image} className='product-card_image'/>
      <h2 className='text-[22px] font-semibold pt-3 py-2'>{product?.name}</h2>
      <div className='flex'>

      <StarRating rating={product?.rating} />
      <p className='text-sm pl-3'>{product.rating}</p>
      <p className='text-sm text-gray-400'>/5</p>
      </div>
      <div className='flex gap-3 py-2'>
      <h2 className='font-semibold text-3xl'>${product?.price}</h2>
      {
        product?.onSale ? (
          <>
          <h2 className='font-semibold text-3xl text-neutral-400 line-through'>${product?.originalPrice}</h2>
          <p className='flex items-center text-[#ff0000] px-5 rounded-full bg-red-200'>-{product?.salePercent}%</p>
          </>
        ) : (
          null
        )
      }
      </div>
      </Link>
    </div>
  )
}

export default ProductCard