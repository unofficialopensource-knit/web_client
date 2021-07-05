import './layout.css';
import React from 'react';
import Particle from './particleeffect.jsx';

const layout = () => (
  <>
    <div className="rectangle">
      <Particle height="100%" val={150} />
    </div>
    <div className="main" />
    <div className="footer">
      <Particle height="3rem" val={30} />
    </div>
  </>
);

export default layout;
