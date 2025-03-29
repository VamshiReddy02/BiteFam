import React from 'react'
import FoodPng from './../assets/food/food.png'
import Fries from './../assets/food/fries.png'
import Leaf from './../assets/food/Leaf.png'
import { IoCartOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <main>
        <div className="container min-h-[600px] flex justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-50 place-items-center justify-between'>
                {/* Text content */}
                <div className='space-y-8 mt-14 text-center md:text-left md:mt-0'>
                    <h1 className='relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent'>Yummy 
                        <img src={Leaf} alt='' className='absolute w-[50px] top-0 right-0 md:right-[100px]'/>
                    </h1>
                    <h1 className='text-5xl lg:text-7xl xl:text-8xl font-bold uppercase'>
                        BREAKFAST
                    </h1>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure labore, quasi placeat minus at.
                    </p>
                    <button className='btn-primary inline-block !mt-10'>
                        <IoCartOutline className='inline mr-2' />
                        Order Now
                    </button>
                </div>
                {/* Image content */}
                <div>
                    <img src={FoodPng} alt="" className='w-[450px] h-[450px] lg:w-[500px] lg:h-[500px] img-shadow'/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero