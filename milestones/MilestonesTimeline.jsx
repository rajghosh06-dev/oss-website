import React from 'react';
import milestones from './milestonesData.json';
import './MilestonesTimeline.css';

function MilestonesTimeline()
{
  return (
    <div className="milestones-container">
      <h2>OSS CLUB Milestones</h2>
      <div className="milestone-list">
        {milestones.map((item, index) => (
          <div key={index} className="milestone-card">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilestonesTimeline;
