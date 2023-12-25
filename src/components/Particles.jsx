import React from 'react';
import Particles from '@tsparticles/react';

const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: ['polygon', 'edge', 'triangle'], // Defining multiple shapes
            polygon: {
              nb_sides: 5, // Number of sides for polygons (hexagons, pentagons, etc.)
            },
          },
          color: {
            value: '#ff7f50', // Orange color for the shapes
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Ensure it's under your content
      }}
    />
  );
};

export default ParticlesBackground;
