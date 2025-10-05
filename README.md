# 🌐 OSS Club Website

Welcome to the official OSS Club website repository! This is the digital backbone of our club—where we showcase our mission, milestones, events, and community spirit. Built with modular React.js components and optimized for contributor onboarding, this site reflects our commitment to open-source excellence.

---

## Live Preview (needs updation)

> Coming soon: [ossclub.in](https://ossclub.in) (under development)

---

## Folder Structure

```bash
oss-website/
├── apply/
│   ├── public/
│   │   ├── apply_form.png
│   │   └── gcetlogo.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── FormField.jsx
│   │   │   └── Navbar.jsx
│   │   ├── applyform.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── bun.lock
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── bug_report/
│   ├── public/
│   │   ├── bug_report.png
│   │   └── gcetlogo.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── FormField.jsx
│   │   │   └── Navbar.jsx
│   │   ├── bug_report.css
│   │   ├── bugreport.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── bun.lock
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── contact/
│   ├── public/
│   │   ├── contact.png
│   │   └── gcetlogo.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── bun.lock
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── events/
│   ├── EventCard.jsx
│   ├── EventDetailsModal.jsx
│   ├── EventsList.jsx
│   ├── EventsTimeline.css
│   ├── EventsTimeline.jsx
│   ├── README.md
│   └── eventsData.json
│
├── intro/
│   ├── public/
│   │   ├── gcetlogo.svg
│   │   ├── landingvid.mp4
│   │   └── ossimg.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── bun.lock
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── members/
│   ├── public/
│   │   ├── gcetlogo.svg
│   │   ├── landingvid.mp4
│   │   ├── oss-team.png
│   │   └── ossimg.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── HorizontalScrolling.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── bun.lock
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│

[NEED UPDATION]
│   ├── components/
│   │   ├── EventCard.jsx
│   │   ├── EventDetailsModal.jsx
│   │   ├── EventsList.jsx
│   │   ├── EventsTimeline.css
│   │   └── EventsTimeline.jsx
│   ├── data/
│   │   └── eventsData.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
│   └── (folder present, contents not listed)
│

│   └── (folder present, contents not listed)
│
├── milestones/
│   ├── MilestonesTimeline.css
│   ├── MilestonesTimeline.jsx
│   ├── milestonesData.json
│   └── README.md
│
├── react-ui/
│   ├── public/
│   │   ├── vite.svg
│   │   ├── apply/
│   │   │   ├── apply_form.png
│   │   │   └── gcetlogo.svg
│   │   ├── bug_report/
│   │   │   ├── bug_report.png
│   │   │   └── gcetlogo.svg
│   │   ├── contact/
│   │   │   ├── contact.png
│   │   │   └── gcetlogo.svg
│   │   └── Breadcrumbs/
│   │       └── (empty or pending assets)
│   └── src/
│       ├── assets/
│       │   ├── Footer.css
│       │   ├── Footer.jsx
│       │   ├── HorizontalScrolling.jsx
│       │   ├── Navbar.jsx
│       │   └── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── LICENSE
└── README.md
```

---

## Tech Stack (needs updation)

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Tooling**: Node.js, npm
- **Deployment**: GitHub Pages (planned)

---

## Setup Instructions

To set up the project locally:

```bash
git clone https://github.com/GCET-Open-Source-Foundation/oss-website.git
cd oss-website
```

For full setup instructions (Node.js, npm, Vite, Go, folder structure), see:

👉 [`docs/setup/README.md`](./docs/setup/README.md)

---

## Module Highlights

### `apply/`
- Join-the-club interface
- Form structure for new applicants
- Modular layout for future expansion (e.g., eligibility, FAQs)

### `bug_report/`
- Bug reporting form
- Structured input fields for issue details
- Placeholder for backend or GitHub integration

### `contact/`
- Contact form UI
- Input validation and styling
- Placeholder for backend integration (email or webhook)
- Responsive layout with Tailwind

### `events/`
- Horizontal timeline layout
- Reusable event cards
- Responsive styling and layout
- Timeline logic for chronological rendering

### `intro/`
- Landing section with club overview
- Hero text and visuals
- Modular layout for mission, vision, and CTA

### `members/`
- Currently disabled (empty folder)
- Planned for member profiles and contributor highlights
- Will include cards, avatars, and bios

### `milestones/`
- Vertical timeline layout
- Fallback image handling
- Modular milestone cards
- Accessible design with semantic structure

---

## 🧠 Maintainers (needs updation)

- [@user1](https://github.com/user1) – Contributor (needs to be changed)
- [@user2](https://github.com/user2) – Backend & Modular Architecture, OSS Club Lead (needs to be changed)

---

## 🧑‍💻 Contributor Role Overview

Contributors need to actively participate in the platform to help build, improve, and engage with projects. Their role is flexible, collaborative, and designed to encourage open participation.  

### Permissions

- Can **view all projects**: ongoing, past, and upcoming.
- Can **contribute to any project** if permitted by the project’s maintainer.
- Can **participate freely in discussions** (via forums or chat, post-MVP).
- Can **express opinions** openly—no special permissions required for communication.  


### Collaboration

- Contributors are encouraged to engage in project forums and team discussions.
- They may be invited to join projects based on skill tags or availability.
- They do not require approval to share feedback or ideas.

---

### 🚫 Restrictions

- Cannot contribute to **past or upcoming projects** (only active ones).
- Cannot appoint others or manage project roles.
- Must be explicitly added by a maintainer to contribute to a specific project.

---

### Notes

- There is **no limit** to the number of contributions a contributor can make.
- Contributors may be part of multiple projects simultaneously.
- Violations of role boundaries trigger error messages (e.g., unauthorized actions).

---

## Project Structure & Tracking

- Statuses: Idea, In Progress, Completed, Need Updation.
- Recruitment Toggle: Open (accepting members) / Full.
- Skill Tags: Match contributors to relevant projects. (optional/have to be viewed)

---

## 📄 License

[MIT License](./LICENSE).  
Feel free to fork, remix, and contribute!
