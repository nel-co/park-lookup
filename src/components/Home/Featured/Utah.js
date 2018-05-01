import React from 'react';
import {Link} from 'react-router-dom';

const Utah = () => {
  return (
    <div className="featured-state">
      <h3>Explore Utah</h3>
      <div className="featured-park-wrapper">
        <div className="featured-park-block">
          <span>Arches</span>
          <p>Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world.</p>
          <Link to="/arches">LEARN MORE</Link>
        </div>
        <div className="featured-park-block">
          <span>Bryce Canyon</span>
          <p>There is no place like Bryce Canyon. Hoodoos can be found on every continent, but here is the largest collection of hoodoos in the world!</p>
          <Link to="/bryce-canyon">LEARN MORE</Link>
        </div>
        <div className="featured-park-block">
          <span>Zion</span>
          <p>Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky.</p>
          <Link to="/zion">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default Utah;