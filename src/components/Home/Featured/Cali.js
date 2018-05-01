import React from 'react';
import {Link} from 'react-router-dom';

const Cali = () => {
  return (
    <div className="featured-state">
      <h3>Explore California</h3>
      <div className="featured-park-wrapper">
        <div className="featured-park-block">
          <span>Redwood</span>
          <p>Most people know Redwood as home to the tallest trees on Earth. The parks also protect vast prairies, oak woodlands, wild riverways, and nearly 40 miles of rugged coastline.</p>
          <Link to="/redwood">LEARN MORE</Link>
        </div>
        <div className="featured-park-block">
          <span>Death Valley</span>
          <p>In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast.</p>
          <Link to="/death-valley">LEARN MORE</Link>
        </div>
        <div className="featured-park-block">
          <span>Joshua Tree</span>
          <p>Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park.</p>
          <Link to="/joshua-tree">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default Cali;