import Particles from 'react-particles-js';

import React from 'react';

const particleeffect = ({ height, val }) => (
  <Particles
    params={{
      particles: {
        number: {
          value: val,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
    height={height}
  />
);

export default particleeffect;
