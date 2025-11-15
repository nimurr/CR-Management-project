import React from "react";

const steps = [
    {
        id: "01",
        title: "Find What Fits You Best",
        description:
            "Browse Through A Wide Range Of Academic And Skill-Based Courses Designed By Experienced Instructors.",
        img: "🎯",
        align: "right",
    },
    {
        id: "02",
        title: "Quick Enrollment, Instant Access",
        description:
            "Sign Up And Dive Right Into Your Chosen Course With Structured Lessons And Progress Tracking.",
        img: "📲",
        align: "left",
    },
    {
        id: "03",
        title: "Learn By Doing",
        description:
            "Watch Engaging Videos, Solve Quizzes, And Participate In Interactive Sessions To Strengthen Your Understanding.",
        img: "📚",
        align: "right",
    },
    {
        id: "04",
        title: "Celebrate your success",
        description:
            "Earn an official YOUR CR Certificate upon completion and add value to your career or academic profile.",
        img: "🏆",
        align: "left",
    },
];

const HowItWorks = () => {
    return (
        <div className="container mt-16 md:px-0 px-5 py-10 md:py-20 mx-auto">

            {/* Background striped lines */}
            {/* <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#f6f6f6_0_80px,#ffffff_80px_140px)] -z-10"></div> */}

            <h2 className="text-center text-4xl font-semibold mb-2">
                How It Works
            </h2>
            <p className="mb-20 text-center text-gray-500">Discover how our learning process empowers students step-by-step — from exploring courses to achieving success. Simple, guided, and effective.</p>

            <div className="relative ">

                {/* Timeline Line */}
                <div className="absolute lg:block hidden left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 to-purple-400 transform -translate-x-1/2"></div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex items-center mb-24 ${step.align === "right"
                            ? "justify-start"
                            : "justify-end"
                            }`}
                    >
                        {/* Content Card */}
                        <div
                            className={`lg:max-w-md ${step.align === "lg:right" ? "text-left lg:pr-10" : "text-right lg:pl-10"
                                }`}
                        >
                            <span className="text-sm bg-green-100 text-green-600  h-8 w-8 rounded-full flex items-center justify-center font-medium">
                                {step.id}
                            </span>
                            <h3 className="text-2xl font-semibold mt-3">{step.title}</h3>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                                {step.description}
                            </p>
                        </div>

                        {/* Icon */}
                        <div className="text-5xl lg:text-8xl lg:mx-5">{step.img}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
