import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const navHandler = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-[#c02222] pt-3">{nav ? '' : 'Danish Slack Association'}</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">News</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={navHandler} className='block md:hidden pt-3'>
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24}/>}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-red-900 h-full ease-in-out duration-500' : 'fixed left-[-100%]' }>
      <h1 className="w-full text-2xl font-bold text-[#c02222] m-4">Danish Slack Association</h1>
      <ul className="p-4 uppercase">
        <li className="p-4 border-b border-red-400">Home</li>
        <li className="p-4 border-b border-red-400">About</li>
        <li className="p-4 border-b border-red-400">News</li>
        <li className="p-4">Contact</li>
      </ul>
      </div>

    </div>
  );
};

export default Navbar;
