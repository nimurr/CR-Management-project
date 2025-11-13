import React from 'react';
import { LuBrain } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { LuCalendarCheck } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
import { LuHandshake } from "react-icons/lu";
import { PiPlugsConnectedFill } from "react-icons/pi";


const KeyFeatures = () => {
    const fullData = [
        {
            icon: <FaRegUser className='text-2xl' />,
            heading: "Manage Students Effortlessly",
            content: "Add, edit, or remove students with secure login credentials — keep your class organized in one place.",
            color: "bg-blue-100 border border-blue-500 text-blue-500",
            borderColor: "border-blue-100"
        },
        {
            icon: <LuCalendarCheck className='text-2xl' />,
            heading: "Offline & Online Class Planner",
            content: "Schedule, update, and track both online and offline classes seamlessly, with reminders for everyone.",
            color: "bg-green-100 border border-green-500 text-green-500",
            borderColor: "border-green-100"
        },
        {
            icon: <GrAnnounce className='text-2xl' />,
            heading: "Stay Informed Instantly",
            content: "Post important updates and academic notices that reach every student in seconds.",
            color: "bg-red-100 border border-red-500 text-red-500",
            borderColor: "border-red-100"
        },
        {
            icon: <CgFileDocument className='text-2xl' />,
            heading: "Easy Assignment Handling",
            content: "Upload assignments, share resources, and track submissions without confusion.",
            color: "bg-yellow-100 border border-yellow-500 text-yellow-500",
            borderColor: "border-yellow-100"
        },
        {
            icon: <LuHandshake className='text-2xl' />,
            heading: "Listen & Solve Quickly",
            content: "Students can submit personal issues, and CRs can mark them as resolved — ensuring smooth communication.",
            color: "bg-indigo-100 border border-indigo-500 text-indigo-500",
            borderColor: "border-indigo-100"
        },
        {
            icon: <PiPlugsConnectedFill className='text-2xl' />,
            heading: "Build a Connected Class",
            content: "A dedicated space where students and CRs can discuss classes, share notes, and stay engaged.",
            color: "bg-pink-100 border border-pink-500 text-pink-500",
            borderColor: "border-pink-100"
        },
    ]
    return (
        <div className='container md:px-0 px-5 py-10 md:py-20'>
            <div className='flex flex-col items-center gap-5 max-w-[800px] mx-auto'>
                <button className='flex items-center gap-2 justify-center py-3 text-blue-500 px-10 bg-blue-100 border border-blue-500 rounded-lg'><LuBrain className='text-2xl' /> Key Features</button>
                <h3 className='text-4xl'>Why Choose Management System - <span className='text-blue-500'>CR?</span></h3>
                <p className='text-gray-500 text-center'>From class scheduling to student communication, Our CR gives Class Representatives the power to manage everything effortlessly — all from one simple, intuitive dashboard. Stay organized, stay connected, and focus on what matters most: your class.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 lg:mt-20'>
                {
                    fullData.map((item, index) => {
                        return (
                            <div className={`p-5 space-y-5 border ${item.borderColor} rounded-lg `} key={index}>
                                {/* text-blue-500 bg-blue-200 border border-blue-500 */}
                                <div className={`text-3xl  w-14 h-14 rounded-lg flex items-center justify-center ${item.color}`}>{item.icon}</div>
                                <div>
                                    <h3 className='text-2xl mb-1'>{item.heading}</h3>
                                    <p className='text-gray-500'>{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default KeyFeatures;
