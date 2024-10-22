import React from 'react';
import OurServices from '../components/OurServices';
import AboutUs from '../components/AboutUs';

function HomePage() {
    return (
        <div className="relative z-10">
            <AboutUs/>
            <OurServices/>
        </div>
    );
}

export default HomePage;
