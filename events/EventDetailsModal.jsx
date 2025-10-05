import React from 'react';
import './EventDetailsModal.css'; // Optional styling

function EventDetailsModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={event.image || 'assets/default.png'} alt={event.title} />
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Type:</strong> {event.type}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer">Register / Learn More</a>}
      </div>
    </div>
  );
}

export default EventDetailsModal;