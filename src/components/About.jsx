import React from 'react';
import { Card, Text } from '@mantine/core';

function About() {
    return (
        <div id="about">
      <div className="bg-secondary text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <p className="mb-4">
          I am currently a senior at the University of North Texas, graduating May 2024 with a BS in Business Computer Information Systems. I really got into coding my sophmore year when I was learning Java and Object Oriented Programming. That was where I was able to first feel the gratifying feeling of figuring out a hard problem (after wanting to throw my computer out the window first of course). 
          After a couple more coding courses, I took my first Web Development course and immediately knew that this is what I wanted to do. One of the main things I liked from Web Development was being able to showcase my creativity and see the projects progress as I create them. Fast forward a bit and now I am coding and working on projects everyday, wishing I had more time in the day to create more. Outside of coding, some of my passions are going to the gym, gaming, and cooking. I actually went to culinary school for a year, but realized after working in a real kitchen that I would much rather just keep it as a hobby. The gym has also been an integral part of my life for over 10 years at this point. I have dreams of getting into bodybuilding and to be able to step on stage one day for a competition. 

          </p>
          {/* Any additional content */}
        </div>
        <div className="md:w-1/2 flex justify-center">
        <img src="/images/foodPort.jpg" className="mask mask-circle w-80 h-80 mb-4" alt="Food Pic" />
        </div>
      </div>
    </div>
    </div>
    );
  }
  
  export default About;
  