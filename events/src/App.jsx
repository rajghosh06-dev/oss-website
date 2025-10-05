import React from 'react';
import EventsGrid from './components/events/EventGrid';
import EventsTimeline from './components/events/EventTimeline';
import './App.css';

function App() {
  return (
    <div>
      <h1>OSS CLUB Events</h1>
      <EventsGrid />
      <EventsTimeline />
    </div>
  );
}

export default App;
