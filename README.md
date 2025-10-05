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
│   ├── public/
│   │   └── assets/
│   │       ├── hacktoberfest2025.png
│   │       ├── devcon2025.jpg
│   │       └── default.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── eventsData.json
│   │   │   └── EventsTimeline.css
│   │   ├── components/
│   │   │   └── events/
│   │   │       ├── EventCard.jsx
│   │   │       ├── EventCard.css
│   │   │       ├── EventDetailsModal.jsx
│   │   │       ├── EventDetailsModal.css
│   │   │       ├── EventsGrid.jsx
│   │   │       ├── EventGrid.css
│   │   │       ├── EventTimeline.jsx
│   │   │       └── EventTimeline.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── README.md
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
├── milestones/
│   ├── public/
│   │   └── assets/
│   │       ├── oss-club-launch.png
│   │       ├── hackathon-win.png
│   │       └── default.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── milestonesData.json
│   │   │   └── MilestonesTimeline.css
│   │   ├── components/
│   │   │   └── milestones/
│   │   │       └── MilestonesTimeline.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── README.md
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


## Roles & Permissions Overview

Click to expand each role’s details:

<details>
<summary><strong>🧑‍🏫 Admin</strong></summary>

Admins oversee platform operations and manage all roles below them.

**Permissions:**
- Approve or deny project creation requests.
- Create or delete any project.
- Add or remove creators, maintainers, and contributors.

**Restrictions:**
- Cannot manage super admin roles.

**Notes:**
- Full control over project lifecycle and team structure.
- Can view all projects across statuses.

</details>

<details>
<summary><strong>🎨 Creator</strong></summary>

Creators initiate and lead projects with broad control over their own teams.

**Permissions:**
- View all projects and deleted ones they created.
- Create new projects (with admin approval).
- Delete their own projects.
- Appoint maintainers and contributors to their projects.

**Restrictions:**
- Cannot delete projects created by others.
- Cannot manage roles outside their own projects.

**Notes:**
- Maintainers inherit most permissions except deletion.
- Can contribute to any project.

</details>

<details>
<summary><strong>🛠️ Maintainer</strong></summary>

Maintainers help manage specific projects under a creator’s supervision.

**Permissions:**
- View and contribute to assigned projects.
- Appoint or remove contributors (with creator’s permission).
- Participate freely in discussions.

**Restrictions:**
- Cannot create or delete projects.
- Cannot manage roles outside their assigned project.

**Notes:**
- Can maintain multiple projects.
- Do not need approval to be appointed by a creator.

</details>

<details>
<summary><strong>🧑‍💻 Contributor</strong></summary>

Contributors actively participate in ongoing projects.

**Permissions:**
- View all projects: ongoing, past, and upcoming.
- Contribute to ongoing projects if added by a maintainer.
- Freely participate in forums and express opinions.

**Restrictions:**
- Cannot contribute to past or upcoming projects.
- Cannot appoint or manage roles.
- Must be explicitly added by a maintainer.

**Notes:**
- Unlimited contributions.
- Can be part of multiple projects.
- Unauthorized actions trigger error messages.

</details>

<details>
<summary><strong>👀 Viewer</strong></summary>

Viewers include all users, even those without a formal role.

**Permissions:**
- View any listed project.
- Report bugs to any project.

**Restrictions:**
- Cannot contribute or manage roles.

**Notes:**
- Universal access for browsing and feedback.

</details>


---

## Project Structure & Tracking

- Statuses: Idea, In Progress, Completed, Need Updation.
- Recruitment Toggle: Open (accepting members) / Full.
- Skill Tags: Match contributors to relevant projects. (optional/have to be re-viewed)

---

## 📄 License

[MIT License](./LICENSE).  
Feel free to fork, remix, and contribute!
