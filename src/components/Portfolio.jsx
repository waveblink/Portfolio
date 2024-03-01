import React from 'react';
import { Card, Image, Text, SimpleGrid } from '@mantine/core';
export default function Portfolio() {
  const projects = [
    { title: 'Byte-Sized Recipes', description: "Byte-sized Recipes is a full-stack application that transforms culinary exploration with ChefAI, a virtual assistant that recommends recipes based on user-selected cuisines. Users can save their favorite AI-curated recipes, experiment with them, and then share their tested creations along with ratings on a public database, inviting community engagement. This platform not only personalizes recipe discovery but also fosters a collaborative food enthusiast community, where users can publish, comment, and exchange culinary insights, enriching the collective cooking experience.", img: '/images/ByteSizedImg.jpg' },
    { title: 'Non Profit E-Commerse', description: 'Developed a fully functional e-commerce website for a non-profit organization, employing ASP.NET, Bootstrap, and C# to ensure robust backend functionality and responsive design. ', img: '/images/nonProfit2.png' },
    { title: 'EJS Weather App', description: 'Developed basic weather app using mostly EJS and using the OpenWeatherApp API. Currently the Icons dynamically change based on what weather is currently happening in the given city.', img: '/images/WeatherAppTest.png' },
  ];

  return (
    <div id='projects'>
      <div className="px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="card card-bordered card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={project.img} alt="Project" className="project-image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
          }
