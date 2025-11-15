import React from 'react';

const OurCRinNumbers = () => {
    return (
        <div className='bg-[#4343ff0e]'>
            <div className='container mt-16 md:px-0 px-5 py-10 md:py-20 mx-auto space-y-5 lg:flex items-center gap-20'>
                <div className='lg:w-1/2'>
                    <h2 className='text-5xl font-medium'>Our CR in <span className='text-blue-500'>Numbers</span></h2>
                    <p className='py-2 text-gray-600'>A simple idea that’s making class management smarter. These numbers show how YOUR CR is helping Class Representatives and students stay more connected every day.</p>
                    <button className='px-4 py-3 text-center rounded-lg cursor-pointer transition hover:bg-blue-600 text-white border bg-blue-600 flex items-center gap-2'>Learn more </button>
                </div>
                <div className='lg:w-1/2 grid lg:grid-cols-2 gap-5'>
                    <div className='border border-green-200 shadow py-10 px-5 rounded-lg'>
                        <h2 className='text-3xl font-medium text-green-600'>120+</h2>
                        <h2 className='my-2 text-xl'>Active CRs</h2>
                        <p className='text-gray-500'>Class Representatives using OUR CR to manage their classes.</p>
                    </div>
                    <div className='border border-red-200 shadow py-10 px-5 rounded-lg'>
                        <h2 className='text-3xl font-medium text-red-600'>3,500+</h2>
                        <h2 className='my-2 text-xl'>Connected Students</h2>
                        <p className='text-gray-500'>Students receiving notices, updates, and class info instantly.</p>
                    </div>
                    <div className='border border-blue-200 shadow py-10 px-5 rounded-lg'>
                        <h2 className='text-3xl font-medium text-blue-600'>1,000+</h2>
                        <h2 className='my-2 text-xl'>Announcements Shared</h2>
                        <p className='text-gray-500'>Notices and announcements made clearer and better organized.</p>
                    </div>
                    <div className='border border-orange-200 shadow py-10 px-5 rounded-lg'>
                        <h2 className='text-3xl font-medium text-orange-600'>800+</h2>
                        <h2 className='my-2 text-xl'>Student Issues Solved</h2>
                        <p className='text-gray-500'>Problems resolved efficiently through digital CR–Student communication.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCRinNumbers;
