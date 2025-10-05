# OSS Club Events Timeline

This module renders the OSS Club's events timeline using modular React components and structured JSON data. It is part of the `react-ui` workspace built with Vite.

## Folder Structure

- `EventCard.jsx`: Renders individual event cards.
- `EventsList.jsx`: Maps and displays a list of events.
- `EventDetailsModal.jsx`: Displays expanded event details in a modal.
- `EventsTimeline.jsx`: Main timeline component.
- `EventsTimeline.css`: Scoped styling for the timeline layout.
- `eventsData.json`: Structured data for all events.
- `other/`: Empty as of nw.
- `assets/`: Optional images or icons used in event cards.

## Features

- Component-based architecture for reusability and clarity.
- Data-driven rendering using `eventsData.json`.
- Conditional display of registration links and modal interactions.
- Scoped styling for layout and responsiveness.

## Integration

All components and data files have been migrated to the `react-ui/src/` workspace:
- Components → `src/components/events/`
- Data → `src/data/eventsData.json`
- Styles → `src/components/events/EventsTimeline.css`

## Usge

Import and render the timeline in `App.jsx`:

```jsx
import EventsTimeline from './components/events/EventsTimeline';
import eventsData from './data/eventsData.json';

<EventsTimeline events={eventsData} />
```

## Notes

- Ensure correct relative import paths when using JSON or CSS files.
- Designed for future expansion with routing and API integration.
