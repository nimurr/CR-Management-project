import React from 'react';

const MakeClassManagement = () => {
    return (
        <div className='my-10'>
            <div className='container px-5 mx-auto rounded-xl overflow-hidden  bg-[url("/Images/HomePage/crm-contact/banner.png")] bg-no-repeat w-full bg-center bg-cover lg:px-20 py-5 lg:py-32 space-y-5 lg:flex items-center justify-between'>
                <div className=''>
                    <h2 className='text-white text-3xl lg:text-5xl'>Make Class Management Smarter with <span className='text-blue-600'>OUR CR</span></h2>
                    <p className='text-gray-300 mt-3'>Join hundreds of Class Representatives and students already simplifying their daily academic life.From announcements to assignments — manage everything in one easy, organized platform.</p>
                </div>
                <div className='lg:flex lg:min-w-1/3 space-y-2 justify-end gap-5'>
                    <button className='px-10 py-3 text-center rounded-lg cursor-pointer transition hover:bg-blue-700 text-white bg-blue-600 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]'>
                        Login as CR
                    </button>

                    <button className='px-10 py-3 text-center rounded-lg cursor-pointer transition hover:bg-blue-700 text-white bg-blue-600 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]'>
                        Join as Student
                    </button>
                </div>

            </div>
        </div>
    );
}

export default MakeClassManagement;
