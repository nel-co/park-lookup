import React from 'react';
import {Link} from 'react-router-dom';

const Colorado = () => {
  return (
    <div className="featured-state">
      <h3>Explore Colorado</h3>
      <div className="featured-park-wrapper">
        <div className="featured-park-block">
          <span>Mesa Verde</span>
          <p>Mesa Verde, Spanish for green table, offers a spectacular look into the lives of the Ancestral Pueblo people who made it their home for over 700 years, from AD 600 to 1300.</p>
          <Link to="/mesa-verde">LEARN MORE</Link>
        </div>
        <div className="featured-park-block">
          <span>Great Sand Dunes</span>
          <p>The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra.</p>
          <Link to="/great-sand-dunes">LEARN MORE</Link>
        </div>
        <div className="featured-park-block">
          <span>Rocky Mountains</span>
          <p>Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments.</p>
          <Link to="/rocky-mountain">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default Colorado;