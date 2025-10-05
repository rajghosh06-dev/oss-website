import React from 'react';
import milestones from '../../assets/milestonesData.json';
import './MilestonesTimeline.css';

function MilestonesTimeline()
{
  return (
    <section className="milestones-container">
      <h2>OSS CLUB Milestones</h2>
      <div className="milestone-list">
        {milestones
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((item, index) => (
            <article key={index} className="milestone-card">
              <img
                src={item.image || 'assets/default.png'}
                alt={`Image for milestone: ${item.title}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'assets/default.png';
                }}
              />
              <div>
                <h3>{item.title}</h3>
                <p><strong>Date:</strong> {item.date}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default MilestonesTimeline;