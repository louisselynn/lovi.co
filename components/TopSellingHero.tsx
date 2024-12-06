import React from 'react';
import ProductCard from './ProductCard';


const TopSellingHero = () => {
  const products = [
    {
      image: "https://images.squarespace-cdn.com/content/v1/580cf7ce6b8f5b3576a3da9f/1686417817306-XCKWT87K4HHVN4X652OF/pziHiSN.png?format=1000w",
      name: "Vertical Striped Shirt",
      price: 212,
      rating: 4.5,
      onSale: true,
      salePercent: 20,
      originalPrice: 232
    },
    {
      image: "https://setfiya.com/cdn/shop/products/orange-f-courage_large.png?v=1464370579",
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      onSale: false
    },
    {
      image: "https://assets.timberland.eu/images/t_img/f_auto,h_650,w_650/e_sharpen:60/dpr_2.0/v1702445586/TB0A6DZBA11-ALT5/Denim-Shorts-for-Men-in-Blue.png",
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      onSale: false
    },
    {
      image: "https://pngimg.com/uploads/jeans/jeans_PNG5752.png",
      name: "Faded Skinny Jeans",
      price: 210,
      rating: 4.5,
      onSale: false
    }
  ]
  return (
    <section className='h-full'>
      <div className='flex justify-center pt-10 pb-5'>
        <h1 className='font-bold text-[50px] uppercase'>New Arrivals</h1>
      </div>
      <div className='flex justify-center'>
      {
        products?.length > 0 ? (
          products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))
        ) : (
          null
        )
      }
      </div>

        <div className='flex justify-center pt-3 pb-10 '>
          <span>
            <button className='px-14 py-2 border-neutral-200 border-2 rounded-full hover:bg-neutral-200'>
              <p>View All</p>
            </button>
          </span>
      </div>
    </section>
  )
}

export default TopSellingHero;