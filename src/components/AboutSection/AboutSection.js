import React from 'react';

import "./AboutSection.css";


const AboutSection = () => {
    return (
        <div className="about-section">
            <h1>About Our IT Community</h1>
            <p>Connecting Innovators, Developers, and IT Enthusiasts</p>
            <div className="content">
                <img src="/photo/WhatsApp Image 2024-12-17 at 18.38.42_87ba1eb2.jpg" alt="Community Collaboration" />
                <p>Welcome to our IT Community! Our mission is to bring together individuals who are passionate about
                    technology, software development, and IT innovations. Whether you're a seasoned developer, a budding
                    enthusiast, or just curious about the IT world, you'll find a place here.</p>

                <p>We provide resources, forums, and events to foster learning, networking, and collaboration. From coding
                    bootcamps to hackathons, our community offers endless opportunities to grow your skills and make
                    connections with like-minded professionals.</p>

                <p>Join us today and become part of a vibrant community that shapes the future of technology!</p>
                
            
            </div>
        </div>
    );
};

export default AboutSection;

