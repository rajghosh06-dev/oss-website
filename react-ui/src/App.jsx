import './App.css';

import EventsTimeline from './components/events/EventsTimeline';
import MilestonesTimeline from './components/milestones/MilestonesTimeline';

import eventsData from './data/eventsData.json';
import milestonesData from './data/milestonesData.json';

function App()
{
  return (
    <div className="app-container">
      <header>
        <h1>OSS Club Timeline</h1>
      </header>

      <section>
        <h2>📅 Events</h2>
        <EventsTimeline events={eventsData} />
      </section>

      <section>
        <h2>🏆 Milestones</h2>
        <MilestonesTimeline milestones={milestonesData} />
      </section>
    </div>
  );
}

export default App;