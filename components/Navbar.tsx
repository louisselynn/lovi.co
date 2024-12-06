import Link from 'next/link'
import React from 'react'
import Dropdown from './Dropdown'
import UserCart from './UserCart'
import UserMenu from './UserMenu'


const Navbar = () => {

  return (
    <header className='px-5 bg-white shadow-sm font-poppins-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
            <h1 className='font-italiana-serif text-[40px] px-5 text-stroke text-stroke-black'>LOVI.co</h1>
        </Link>

        <div className="flex items-center gap-5 text-black">
					<Dropdown />
          <Link href="/on-sale">
            On Sale
          </Link>
          <Link href="/new-arrivals">
            New Arrivals
          </Link>
          <Link href="/brands">
            Brands
          </Link>
          <UserCart />
          <UserMenu />
        </div>
      </nav>
    </header>
  )
}

export default Navbar