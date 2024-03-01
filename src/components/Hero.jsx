import React from 'react';

function Hero() {
    return (
        <div className="relative min-h-screen bg-primary text-background font-custom flex flex-col justify-center items-center">
            {/* Navigation bar and logo placeholder */}
            <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-5 text-secondary">
                {/* Hexagonal icon or logo */}
                <div className="logo">
                    {/* Place an SVG or image here */}
                </div>

                {/* Navigation */}
                <nav className="flex items-center space-x-4">
                    <a href="#about" className="hover:text-accent">01. About</a>
                    <a href="#projects" className="hover:text-accent">02. Work</a>
                    <a href="#contact" className="hover:text-accent">03. Contact</a>
                    <a href="/MaxwellHahnResume.pdf" className="bg-accent text-primary py-2 px-4 rounded hover:bg-accent-hover inline-flex items-center justify-center" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >Resume</a>
                </nav>
            </header>

            {/* Image */}
            <img src="/images/portrait.jpeg" className="mask mask-circle w-48 h-48 mb-4" alt="Maxwell Hahn" />

            {/* Main Content */}
            <div className="text-center p-5">
                <p className="text-sm uppercase tracking-widest text-secondary">Hi, my name is</p>
                <h1 className="text-5xl font-bold text-background">Maxwell Hahn</h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-secondary mt-4">I'm currently an aspiring web developer.</h2>
                <p className="mt-4 max-w-lg mx-auto text-secondary">With a passion for AI!</p>
                <a href="#projects" className="mt-5 inline-block bg-accent hover:bg-accent-hover text-primary font-bold py-3 px-6 rounded">
                    Check out my work!
                </a>
            </div>
        </div>
    );
}

export default Hero;
