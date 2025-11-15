import FeaturedEvents from '@/Components/Landing/HomePage/FeaturedEvents';
import Hero from '@/Components/Landing/HomePage/Hero';
import HowItWorks from '@/Components/Landing/HomePage/HowItWorks';
import KeyFeatures from '@/Components/Landing/HomePage/KeyFeatures';
import React from 'react';

const Page = () => {
    return (
        <div >
            <Hero />
            <KeyFeatures />
            <FeaturedEvents />
            <HowItWorks />
        </div>
    );
}

export default Page;
