import React from 'react';
import events from './eventsData.json';
import './EventsTimeline.css';

function EventsTimeline()
{
  return(
    <div className="timeline-container">
      <h2>Events & Activities</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsTimeline;
