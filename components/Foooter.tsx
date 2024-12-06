import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

const Foooter = () => {
  return (
    <section className='bg-neutral-200 h-full'>
      <div >
        <div className='h-20 bg-white flex justify-center'>
          <div className='bg-black w-[80%] rounded-3xl h-40 flex items-center justify-around'>
            <h3 className='text-4xl text-white leading-none uppercase font-bold font-poppins-sans'>
          stay up to date about<br/>our latest offers</h3>

            <form className='flex flex-col gap-3'>
            <Input
            placeholder='email address'
            className='bg-white w-80 rounded-full'
            />
            <Button className='bg-white w-80 rounded-full text-black hover:text-white'>
            Subscribe to Newsletter
            </Button>
            </form>
          </div>
        </div>
        <div className='flex justify-center pt-28 '>
          <div className='w-[80%] flex justify-between gap-10 pb-10 border-neutral-300 border-b-2'>

            <div className='w-1/5 flex flex-col justify-between'>
              <Link href="/">
                  <h1 className='font-italiana-serif text-3xl text-stroke text-stroke-black'>LOVI.co</h1>
              </Link>
              <p className='text-neutral-600 font-light text-xs'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
              <div className='flex gap-3'>
                <button className='footer-social_btn'>
                <FaXTwitter className='m-auto'/>
                </button>
                <button className='footer-social_btn'>
                <FaFacebookF className='m-auto'/>
                </button>
                <button className='footer-social_btn'>
                <FaInstagram className='m-auto'/>
                </button>
                <button className='footer-social_btn'>
                <FaTiktok className='m-auto'/>
                </button>
              </div>
            </div>

            <div className='footer-col'>
              <h3 className='text-m'>COMPANY</h3>
              <p className='footer-text'>About</p>
              <p className='footer-text'>Features</p>
              <p className='footer-text'>Works</p>
              <p className='footer-text'>Career</p>
            </div>
            <div className='footer-col'>
              <h3 className='text-m'>HELP</h3>
              <p className='footer-text'>Customer Support</p>
              <p className='footer-text'>Delivery Details</p>
              <p className='footer-text'>Terms & Conditions</p>
              <p className='footer-text'>Privacy Policy</p>
            </div>
            <div className='footer-col'>
              <h3 className='text-m'>FAQ</h3>
              <p className='footer-text'>Account</p>
              <p className='footer-text'>Manage Deliveries</p>
              <p className='footer-text'>Orders</p>
              <p className='footer-text'>Payments</p>
            </div>
            <div className='footer-col'>
              <h3 className='text-m'>RESOURCES</h3>
              <p className='footer-text'>Free eBooks</p>
              <p className='footer-text'>Development Tutorial</p>
              <p className='footer-text'>How to-Blog</p>
              <p className='footer-text'>Youtube Playlist</p>
            </div>

          </div>
        </div>
        <div className='flex justify-center py-5'>

        <div className='h-[80px] flex justify-between w-[80%]'>
          <p className='footer-text'>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className='flex gap-3'>
            <img src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png" alt="visa" className='h-9 bg-white rounded-md' />
            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="mastercard" className='h-9 bg-white rounded-md' />
            <img src="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png" alt="paypal" className='h-9 bg-white rounded-md' />
            <img src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png" alt="apple pay" className='h-9 bg-white rounded-md' />
            <img src="https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png" alt="google pay" className='h-9 bg-white rounded-md' />

          </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Foooter