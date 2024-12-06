import React from 'react'

const Brands = () => {
  return (
    <section>
      <div className='flex justify-evenly items-center sm:columns-3 px-5 h-[11.5vh] bg-black'>
        <img src='/versace.png' alt='' className='h-8 object-contain object-center' />
        <img src='/zara.png' alt='' className='h-8 object-contain object-center' />
        <img src='/gucci.png' alt='' className='h-8 object-contain object-center' />
        <img src='/prada.png' alt='' className='h-8 object-contain object-center' />
        <img src='/calvinklein.png' alt='' className='h-8 object-contain object-center' />
      </div>
    </section>
  )
}

export default Brands