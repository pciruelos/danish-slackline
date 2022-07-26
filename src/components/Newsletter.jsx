import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-5">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold py-2">
            Join us in our magical trip and get the news!
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, delectus!s
          </p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flew-row items-center justify-between w-full">
                <input className='p-3 flex w-[250px] rounded-md text-black' type="email" placeholder="Enter Email" />
                <button className='bg-[#c02222] w-[250px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-red-900'>Subscribe</button>
            </div>
        <p className="text-sm">We care about the protection of your data. Read our <span className="text-[#c02222]">Privacy polities</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
