# OSS CLUB Milestones Timeline

This module displays a chronological timeline of key milestones in the OSS CLUB's journey, such as founding events, hackathon wins, and major achievements.

## Folder Structure

- `MilestonesTimeline.jsx` – React component that renders the timeline
- `milestonesData.json` – Structured data for each milestone
- `MilestonesTimeline.css` – Styling for layout and responsiveness
- `README.md` – Documentation and contributor guidelines
- `assets/` – Images associated with each milestone

## Technologies Used

- React.js for component rendering
- JSON for milestone data management
- CSS for styling and layout
- GitHub for version control and collaboration

## How It Works

1. `MilestonesTimeline.jsx` imports data from `milestonesData.json`
2. Each milestone is rendered as a card with image, title, date, and description
3. Styling is handled via `MilestonesTimeline.css`
4. Images are stored in the `assets/` folder and referenced via relative paths

## How to Add a New Milestone

1. Open `milestonesData.json`
2. Add a new object with the following structure:
   ```json
   {
     "title": "Example Milestone",
     "date": "YYYY-MM-DD",
     "description": "Brief description of the milestone.",
     "image": "assets/example-image.png"
   }
   ```
3. Place the corresponding image in the `assets/` folder
4. Ensure the image path matches the `image` field in the JSON

## Preview

To view the timeline, import and render `MilestonesTimeline.jsx` in your routing file (e.g., `App.jsx`) and assign it to a route like `/milestones`.

Example:
```jsx
import MilestonesTimeline from './milestones/MilestonesTimeline';

<Route path="/milestones" element={<MilestonesTimeline />} />
```

## Contribution Guidelines

- Keep milestone descriptions concise and factual
- Use consistent formatting in `milestonesData.json`
- Optimize image sizes for performance
- Test layout responsiveness before pushing
- Commit with clear messages and modular structure

## Future Enhancements

- Add vertical timeline indicators
- Enable filtering by year or category
- Integrate GitHub API for dynamic contributor stats
