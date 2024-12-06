"use client";

import React, {useState}from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import StarRating from "./StarRating";
import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";




const ReviewsCarousel = () => {
  return (
    <section className="py-20">
        <h2 className="text-5xl uppercase font-bold text-left pl-28 pb-10">our happy customers</h2>

      <div className="w-full flex justify-center">

      <div className="w-[80vw]">
      <Carousel>
        <CarouselContent>
          {reviews.map((review, i) => (
            
            <CarouselItem key={i} className="basis-1/3"><ReviewCard review={review} /></CarouselItem>
          ))
        }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />        
      </Carousel>
        </div>
        </div>
    </section>

  )
};

export default ReviewsCarousel;



