/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const ProductDetails = () => {
  const [index, setIndex] = useState(0);

  const product = {
    image: [
      "https://www.pngplay.com/wp-content/uploads/12/Jeans-PNG-Pic-Background.png",
    ],
    name: "Vertical Striped Shirt",
    price: 212,
    rating: 4.5,
    onSale: true,
    salePercent: 20,
    originalPrice: 232
  }
  const mainImage = product?.image[index];
  console.log(mainImage);
  const placeholder = "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png";
  return (
    <section className='flex columns-2 h-full py-10'>
      <div className='flex mx-auto'>
        <div className='flex flex-col justify-between gap-3 px-5'>
          <img 
            src={product?.image || placeholder} alt={product?.name} 
            className='product-details_thumbnail'/>
          <img 
            src={product?.image || placeholder} alt={product?.name} 
            className='product-details_thumbnail'/>
          <img 
            src={product?.image || placeholder} alt={product?.name} 
            className='product-details_thumbnail'
            />
        </div>
        <div>
          <img src={mainImage} className='product-details_image' />
        </div>
      </div>
      
    </section>
  )
}

export default ProductDetails