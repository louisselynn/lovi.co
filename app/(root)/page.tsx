import Brands from '@/components/Brands'
import BrowseByStyleHero from '@/components/BrowseByStyleHero'
import Foooter from '@/components/Foooter'
import Hero from '@/components/Hero'
import NewArrivalHero from '@/components/NewArrivalHero'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import TopSellingHero from '@/components/TopSellingHero'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero />
    <Brands />
    <NewArrivalHero />
    <TopSellingHero />
    <BrowseByStyleHero />
    <ReviewsCarousel />
    <Foooter />
    </>
  )
}

export default page