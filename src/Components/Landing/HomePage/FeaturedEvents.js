import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const FeaturedEvents = () => {
    return (
        <div className='container md:px-0 px-5 py-10 md:py-20'>
            <div className='flex items-center justify-between gap-5 flex-wrap'>
                <div>
                    <h2 className='text-3xl font-medium mb-2'>Featured Events</h2>
                    <p>Events promoted by coaches & organizations to reach more families.</p>
                </div>
                <button className='px-4 py-2 text-center rounded-lg cursor-pointer transition hover:bg-blue-600 text-white border bg-blue-600 flex items-center gap-2'>Explore All Events <FaArrowRightLong /></button>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    [...Array(3).map((_, index) => index)].map((item) => (
                        <div className='bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/Images/HomePage/Events/event-1.png")] bg-cover cursor-pointer bg-center rounded-xl overflow-hidden p-5 bg-fill'>
                            <div className='flex items-center gap-3 text-white'>
                                <CiCalendarDate className='text-xl' />
                                <span>June 15–17, 2025</span>
                            </div>
                            <h3 className='text-xl font-medium text-white py-1'>Summer Soccer Camp 2025</h3>
                            <div className='flex items-center gap-3 text-white'>
                                <CiLocationOn className='text-xl' />
                                <span>New York, USA</span>
                            </div>
                            <div className='mt-20 flex items-center justify-between gap-3'>
                                <div className='text-white'>
                                    <h3 className='font-medium'>Ages</h3>
                                    <p className='text-gray-300'>10–14</p>
                                </div>
                                <div className='text-white'>
                                    <h3 className='font-medium'>Reviews</h3>
                                    <p className='text-gray-300 flex items-center gap-1 '><FaStar className='text-yellow-400' />4.9 (24)</p>
                                </div>
                            </div>
                            <button className='px-4 py-2 text-center rounded-lg cursor-pointer transition hover:bg-blue-600 text-white  bg-gray-400 mt-3'>Register Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FeaturedEvents;
