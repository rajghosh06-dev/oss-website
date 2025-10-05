# OSS Club Milestones Timeline

This module displays the OSS Club's milestones in a chronological timeline using React and JSON data. It is part of the `react-ui` frontend workspace.

## Folder Structure

- `MilestonesTimeline.jsx`: Main component for rendering milestones.
- `MilestonesTimeline.css`: Scoped styling for milestone layout.
- `milestonesData.json`: Structured data for all milestones.
- `assets/`: Optional images or icons used in milestone entries.

## Feature

- Declarative rendering of milestones using React.
- Data-driven layout powered by `milestonesData.json`.
- Modular styling for clean visual hierarchy.
- Easy to extend with new milestone entries or styles.

## Integration

All files have been migrated to the `react-ui/src/` workspace:
- Component → `src/components/milestones/MilestonesTimeline.jsx`
- Data → `src/data/milestonesData.json`
- Styles → `src/components/milestones/MilestonesTimeline.css`

## Usage

Import and render the timeline in `App.jsx`:

```jsx
import MilestonesTimeline from './components/milestones/MilestonesTimeline';
import milestonesData from './data/milestonesData.json';

<MilestonesTimeline milestones={milestonesData} />
```

## Notes

- Ensure correct relative paths for JSON and CSS imports.
- Designed for future enhancements including filtering and accessibility.
