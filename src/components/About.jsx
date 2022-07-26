import React from 'react'
import F1 from '../assets/1.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h1 className="text-center text-4xl pb-8 text-[#c02222] font-bold font-sans italic mt-[-25px] ">About Us</h1>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 justify-center'>
            <img className='mx-auto' src={F1} alt="slack danish" />
            <div className='flex flex-col justify-center px-5'>
            <p className='text-[#c02222] font-bold font-sans italic py-2'>SlackLine Danish Association</p>
            <h1 className='text-2xl font-bold'>who we are are? and which are our goals?</h1>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti asperiores officia tenetur a numquam! Perspiciatis eaque deserunt vitae rem commodi ut exercitationem, in odio illo perferendis, necessitatibus nulla? Architecto fuga maxime. <br/> <br/>
             asperiores temporibus dolorem qui, quasi, totam cum harum aliquam nulla earum! Deserunt, illum recusandae ducimus distinctio error quae natus!</p>
            </div>
        </div>

    </div>
  )
}

export default About