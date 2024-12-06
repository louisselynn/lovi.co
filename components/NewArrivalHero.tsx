import React from 'react';
import ProductCard from './ProductCard';


const NewArrivalHero = () => {
  const products = [
    {
      image: "https://store.taylorswift.com/cdn/shop/files/dKa9PRgf5GD9cYJAAjF6.png?v=1687282789",
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      onSale: false
    },
    {
      image: "https://www.pngplay.com/wp-content/uploads/12/Jeans-PNG-Pic-Background.png",
      name: "Skinny Fit Jeans",
      price: 240,
      rating: 3.5,
      onSale: true,
      salePercent: 20,
      originalPrice: 260
    },
    {
      image: "https://www.kuiu.com/cdn/shop/files/15052-RB-FrontMannequin-FieldFlannel-2024_1200x.png?v=1727123711",
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      onSale: false
    },
    {
      image: "https://rapanuiclothing.com/cdn/shop/files/mens-striped-t-shirt-634221.png?v=1724442602&width=1445",
      name: "Sleeve Striped T-Shirt",
      price: 130,
      rating: 4.5,
      onSale: true,
      salePercent: 30,
      originalPrice: 160
    }
  ]
  return (
    <section className=' flex justify-center h-full'>
      <div className='w-[85vw] border-b-2 border-neutral-200'>
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
      </div>
    </section>
  )
}

export default NewArrivalHero