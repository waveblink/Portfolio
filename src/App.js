import React from 'react';
import { MantineProvider } from '@mantine/core';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <MantineProvider theme={{
      colorScheme: 'light',
      colors: {
        // Define a complete custom color scheme
        brand: ['#265073'], // primary color
        secondary: ['#2D9596'], // secondary color
        accent: ['#9AD0C2'], // accent color
        background: ['#F1FADA'], // background color
      },
      primaryColor: 'brand',
      // Ensure that the default theme does not override your custom colors
      defaultProps: {
        Button: { color: 'brand' },
        Title: { color: 'brand' },
        Text: { color: 'brand' },
      },
    }}>
      <div>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </MantineProvider>
  );
}

export default App;
