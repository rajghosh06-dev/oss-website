import React from 'react';
import './EventCard.css'; // Optional: create if you want scoped styles

function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <img src={event.image || 'assets/default.png'} alt={event.title} />
      <div className="event-info">
        <h3>{event.title}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Type:</strong> {event.type}</p>
      </div>
    </div>
  );
}

export default EventCard;