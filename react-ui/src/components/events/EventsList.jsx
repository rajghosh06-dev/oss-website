import React, { useState } from 'react';
import events from './eventsData.json';
import EventCard from './EventCard';
import EventDetailsModal from './EventDetailsModal';
import './EventsList.css'; // Optional styling

function EventsList() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="events-list-container">
      <h2>OSS CLUB Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} onClick={setSelectedEvent} />
        ))}
      </div>

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}

export default EventsList;