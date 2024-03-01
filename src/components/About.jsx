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
          I'm currently a senior looking to graduate in May at the University of North Texas with a degree in Business Computer Information Systems. I really got into coding in my sophmore semester when I was learning Java and Object Oriented Programming. Thats where I was able to first really feel the euphoric feeling of being able to figure out a hard problem (after wanting to throw my computer out the window first of course). After a couple more coding courses I took my first web development course and immedietly knew that this is what I wanted to do.  One of the major things that I liked from web development was being able to showcase my creativity and see the projects that I am creating. Fast forward a bit and now I am coding and working on projects everyday, wishing I had more time in the day to create more.
Outside of coding, some of my passions are cooking,  going to the gym and gaming. I have been cooking basically ever since I can remember and it has always been something I have loved to do. There was a period where I thought I wanted to be a chef so I went to culinary school, where I realized after working in a kitchen that I would much rather just keep it as a hobby. The gym has also been an integral part of my life for over 10 years at this point, to the point where now I do at least casual bodybuilding and have dreams to be able to step on stage one day for a competition.
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
  