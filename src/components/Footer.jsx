import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#c02222]'>
                Danish Slack Association.
            </h1>
            <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ex.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaInstagram size={30}/>
                <FaInstagram size={30}/>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-4'>
            <div>
                <h6 className='font-medium text-gray-500'>More:</h6>
                <ul>
                    <li className='py-2 text-sm'>Spot Map</li>
                    <li className='py-2 text-sm'>Calendar</li>
                    <li className='py-2 text-sm'>News</li>
                    <li className='py-2 text-sm'>Tutorials</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-500'>Info:</h6>
                <ul>
                    <li className='py-2 text-sm'>Members</li>
                    <li className='py-2 text-sm'>Sponsors</li>
                    <li className='py-2 text-sm'>Community & Chat</li>
                    <li className='py-2 text-sm'>Slack Friends</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-500'>Contact:</h6>
                <ul>
                    <li className='py-2 text-sm'>Contact Form</li>
                    <li className='py-2 text-sm'>Site Map</li>
                    <li className='py-2 text-sm'>Unknow</li>
                    <li className='py-2 text-sm'>Unknow</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-500'>Legal:</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer