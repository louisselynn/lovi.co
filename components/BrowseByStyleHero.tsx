/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BrowseByStyleHero = () => {

	const images = {
			casual: "https://adonisresearchoutlet.com/wp-content/uploads/2024/07/hr4-1792x2048.webp",
		
			formal: "https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-black-elegant-suit-fashion-male-posing-studio-near-white-wall_158538-27218.jpg?t=st=1733260238~exp=1733263838~hmac=68e664a7baf8e712b82836bd90dd8ea0e03aa8220e2ae22481a1bb7bded7f5be&w=996",
		
			party: "https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8588.jpg?t=st=1733259470~exp=1733263070~hmac=2c58c3e645e53f7ba6b9cd226f2e5a8617bc3e8549cd6cad32cc5b9685ffcb7a&w=826",
		
			gym: "https://img.freepik.com/free-photo/portrait-young-man-holding-dumbbell_144627-21871.jpg?t=st=1733261206~exp=1733264806~hmac=27e15016997fc754c03ba4c9b5c5e83053a5d56d128ee3ff5e8ebc66bcd10237"
		}
	

return (
	<section className=' flex justify-center h-full'>
		<div className='w-[85vw] rounded-3xl bg-neutral-200'>

			<h1 className='browse-style_title'>browse by dress style</h1>

			<div className='flex justify-center gap-5 px-20 pb-5'>
				<div className='browse-style_container w-[40%]'>
					<h3 className='browse-style_text'>Casual</h3>
					<img 
					src={images.casual}
					className='object-cover object-right h-full w-full rounded-[80px] scale-x-[-1]'/>
				</div>

				<div className='browse-style_container w-[60%]'>
					<h3 className='browse-style_text'>Formal</h3>
					<div className='browse-style_pic-container pt-20'>
						<img 
							src={images.formal}
							className=' object-cover object-left h-[300%] z-10 rounded-[60px] '
						/>
					</div>
				</div>
			</div>


			<div className=' flex gap-5 px-20 pb-10'>
				<div className='browse-style_container w-[60%]'>
					<h3 className='browse-style_text'>Party</h3>
					<div className='browse-style_pic-container'>
						<img src={images.party}
						className='object-cover object-center h-[200%]'/>
					</div>
				</div>

				<div className='browse-style_container w-[40%]'>
					<h3 className='browse-style_text'>Gym</h3>
					<div className='browse-style_pic-container'>
						<img 
							src={images.gym} 
							className='object-cover object-center h-[200%]'/>
					</div>
				</div>
			</div>

		</div>
	</section>
	)
}

export default BrowseByStyleHero