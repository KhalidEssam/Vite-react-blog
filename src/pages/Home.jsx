import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import '../scss/HomePage.css'; // Import CSS for styling

const HomePage = () => {
    return (
        <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
            <div className="overlay">
            <div className="hero-content">
                <h1>Welcome to My Blog</h1>
                <p>Explore the world of blogging with us!</p>
                <div className="icons">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <FaReact size={32} color="#61dafb" />
                </a>
                <a href="https://github.com/KhalidEssam" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} color="#24292e" />
                </a>
                </div>
            </div>
            </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
            <div className="video-overlay">
            <div className="video-content">
                <h2>Discover the World of Blogging</h2>
                <iframe
                title="Blogging Video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example URL, replace with your own
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
        </section>

        {/* About Section */}
        <section className="about-section">
            <div className="about-content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat est id mi condimentum ultrices.</p>
            </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
            <div className="mission-content">
            <h2>Our Mission</h2>
            <p>Sed sed felis vel sapien lobortis tristique. Cras ut justo eu magna laoreet semper.</p>
            </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
            <div className="contact-content">
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            </div>
        </section>
        </div>
    );
};

export default HomePage;
