import React from 'react'
import F2 from '../assets/2.png'
import F3 from '../assets/3.png'
import F4 from '../assets/4.png'

const Blog = () => {
  return (
    <div className='w-full bg-red-800 py-16 px-4'>
        <h1 className="text-left text-4xl pb-8 text-white font-bold font-sans italic mt-[-25px] ">Blog</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* CARD */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img src={F2} alt="1" className='mx-auto bg-white'/>
                <h2 className='text-2xl font-bold py-2'>WaterLines at Reffen!</h2>
                <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora quod fuga perspiciatis dolore cupiditate ipsa, voluptates nemo eos nihil.</p>
               
                <button className='text-blue-900 w-[100px] rounded-md font-bold my-3 py-3'>Read More</button>
            </div>
            {/* Finish CARD */}
            {/* CARD */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img src={F3} alt="1" className='mx-auto bg-white'/>
                <h2 className='text-2xl font-bold py-2'>Wednesday weekly meetings!</h2>
                <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora quod fuga perspiciatis dolore cupiditate ipsa, voluptates nemo eos nihil.</p>
               
                <button className='text-blue-900 w-[100px] rounded-md font-bold my-3 py-3'>Read More</button>
            </div>
            {/* Finish CARD */}
            {/* CARD */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img src={F4} alt="1" className='mx-auto bg-white'/>
                <h2 className='text-2xl font-bold py-2'>Highlines at UrbanCamp!</h2>
                <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora quod fuga perspiciatis dolore cupiditate ipsa, voluptates nemo eos nihil.</p>
               
                <button className='text-blue-900 w-[100px] rounded-md font-bold my-3 py-3'>Read More</button>
            </div>
            {/* Finish CARD */}

        </div>
    </div>
  )
}

export default Blog