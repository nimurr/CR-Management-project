import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[url('/Images/HomePage/hero_banner.png')] bg-cover bg-center h-[80vh] md:h-screen lg:pt-20 pt-24">
            <div className='container flex items-center justify-center h-full py-10'>
                <div className=' max-w-[1000px] p-5'>
                    <div className='sm:text-5xl text-3xl lg:text-7xl text-center'>
                        <h2 className='leading-[1.2]'>Manage Your Education </h2>
                        <h2 className='leading-[1.2]'>Smarter with <span className='text-blue-600'> CR</span> Management System</h2>
                    </div>
                    <p className='text-center my-5 text-gray-500'>A simple platform for Class Representatives to organize classes, announcements, and student issues — all in one place.</p>
                    <div className='flex items-center justify-center gap-2 lg:gap-5 flex-wrap'>
                        <button className='py-3 px-10 rounded-md cursor-pointer border border-blue-600 text-blue-600'>Login as CR</button>
                        <button className='py-3 px-10 rounded-md cursor-pointer border bg-blue-600 text-white'>Join as Student</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
