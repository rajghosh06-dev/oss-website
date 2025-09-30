# Events & Activities Timeline

This module displays a chronological timeline of OSS CLUB events, meetups, and hackathons.

## Folder Structure
- `EventsTimeline.jsx` – Main React component
- `eventsData.json` – Event metadata (title, date, description, image, link)
- `EventsTimeline.css` – Styling for timeline layout
- `assets/` – Posters and images for events

## How to Add a New Event
1. Open `eventsData.json`
2. Add a new object with:
   - `title`
   - `date`
   - `description`
   - `image` (path relative to `assets/`)
   - `link` (optional)

## Technologies Used

This module is built using:

- **React.js** – For building the EventsTimeline component and rendering dynamic content.
- **JSON** – Used to store and manage event data in a structured format (`eventsData.json`).
- **CSS** – For styling the timeline layout and cards.

## How It All Links Together

1. **Component (`EventsTimeline.jsx`)**
   - Imports and maps data from `eventsData.json`.
   - Renders each event as a timeline card with image, title, date, description, and link.

2. **Data (`eventsData.json`)**
   - Acts as a centralized source for all event metadata.
   - Easy to update—just add a new object to the array.

3. **Styling (`EventsTimeline.css`)**
   - Controls layout, spacing, and responsiveness.
   - Can be replaced or extended with Tailwind classes if preferred.

4. **Assets (`assets/`)**
   - Stores event posters and images referenced in the JSON.
   - Linked via relative paths like `"assets/devcon2025.jpg"`.

5. **Routing**
   - The component is rendered via a route like `/events` (configured in `App.jsx` or equivalent).
   - This allows users to visit a dedicated page for the timeline.

6. **Contribution Workflow**
   - Members fork the repo, create a branch, add events, and raise a pull request.
   - Maintainers review and merge changes into the main branch.

## Preview
Visit the `/events` route to view the timeline.

## Contribution Tips
- Keep image sizes optimized
- Use consistent formatting in JSON
- Test layout responsiveness before pushing

---