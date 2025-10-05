import React from 'react';
import EventsGrid from './components/events/EventsGrid';
import EventsTimeline from './components/events/EventsTimeline';
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
