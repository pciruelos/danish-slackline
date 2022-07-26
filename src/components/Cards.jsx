import React from 'react'
import F2 from '../assets/minilogo.png'
import F3 from '../assets/minilogo.png'
import F4 from '../assets/minilogo.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-col-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={F2} alt="1" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>single user</h2>
                <p className='text-center text-4xl font-bold'>$300</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>100gb</p>
                    <p className='py-2 border-b mx-8 '>nada</p>
                    <p className='py-2 border-b mx-8 '>gear unlimited</p>
                </div>
                <button>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Cards