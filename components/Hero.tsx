import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='px-24 flex flex-col justify-center gap-5'>
        <h1 className='uppercase text-[60px] font-extrabold leading-[60px]'>find clothes<br/>that matches<br/>your style</h1>
        <p className='text-neutral-700'>
          Browse through our diverse range of meticulously crafted garments,<br/>
          designed to bring out your individuality and cater to your sense of style.
          </p>
        <div className='py-5'>
          <span>
            <Link href="/shop/all" >
              <button className='hero-boldtext'>
                SHOP NOW
              </button>
            </Link>
          </span>
        </div>
        <div className='flex gap-5'>
          <div className='hero-stats'>
            <h3 className='font-semibold text-[40px] m-auto'>200+</h3>
            <p className='text-neutral-700'>International Brands</p>
          </div>
          <div className='hero-stats'>
            <h3 className='font-semibold text-[40px] m-auto'>2,000+</h3>
            <p className='text-neutral-700'>High-Quality Products</p>
          </div>
          <div className='pr-5 leading-tight'>
            <h3 className='font-semibold text-[40px] m-auto'>30,000+</h3>
            <p className='text-neutral-700'>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className='h-full bg-gradient-to-b from-[#b9b9b9] to-[#bfbfbf]'>
        <Image 
        src="https://i.pinimg.com/736x/b7/f7/4c/b7f74c6e36728ab76d4e6862e1f06d98.jpg" 
        alt="hero" 
        width={570} 
        height={570} 
        className='rounded-tr-[300px] h-[80vh] object-cover object-top pr-10'
        />
      </div>
    </section>
  )
}

export default Hero