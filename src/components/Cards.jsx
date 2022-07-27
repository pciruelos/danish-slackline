import React from 'react'
import F2 from '../assets/minilogo.png'
import F3 from '../assets/minilogo.png'
import F4 from '../assets/minilogo.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* CARD */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={F2} alt="1" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single Membership</h2>
                <p className='text-center text-4xl font-bold'>$150</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-5'>100gb</p>
                    <p className='py-2 border-b mx-8 '>Nada</p>
                    <p className='py-2 border-b mx-8 '>Gear unlimited</p>
                </div>
                <button className='bg-[#c02222] w-[200px] rounded-md font my-6 mx-auto py-3 hover:bg-red-900 text-white'>Get Started</button>
            </div>
            {/* Finish CARD */}
            {/* CARD */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={F2} alt="1" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>++ Member</h2>
                <p className='text-center text-4xl font-bold'>$250</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-5'>100gb</p>
                    <p className='py-2 border-b mx-8 '>Nada</p>
                    <p className='py-2 border-b mx-8 '>Gear unlimited</p>
                </div>
                <button className='bg-[#c02222] w-[200px] rounded-md font my-6 mx-auto py-3 hover:bg-red-900 text-white'>Get Started</button>
            </div>
            {/* Finish CARD */}
            {/* CARD */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={F2} alt="1" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Premium Member</h2>
                <p className='text-center text-4xl font-bold'>$350</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-5'>100gb</p>
                    <p className='py-2 border-b mx-8 '>Nada</p>
                    <p className='py-2 border-b mx-8 '>Gear unlimited</p>
                </div>
                <button className='bg-[#c02222] w-[200px] rounded-md font my-6 mx-auto py-3 hover:bg-red-900 text-white'>Get Started</button>
            </div>
            {/* Finish CARD */}
        </div>
    </div>
  )
}

export default Cards