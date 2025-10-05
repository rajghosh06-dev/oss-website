# 🛠️ OSS Club Website – Full Setup Guide

Welcome to the OSS Club website setup guide! This document walks you through everything needed to run the project locally—from installing dependencies to understanding the modular folder structure.

---

## 1. Prerequisites

Before you begin, make sure the following are installed:

- **Node.js** (v18.x or later) → [Download LTS(Long Term Support) version](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git CLI**
- **Code Editor** (VS Code recommended)

> To verify installation:
```bash
node -v
npm -v
git --version
```

---

## 2. Clone the Repository

Use the official OSS Club organization repo:

```bash
git clone https://github.com/GCET-Open-Source-Foundation/oss-website.git
cd oss-website
```

---

## 3. Install Project Dependencies

```bash
npm install
```

This installs all packages listed in `package.json`, including:
- React.js
- Vite
- Tailwind CSS
- React Router

---

### Run the Development Server

```bash
npm run dev
```

This starts the Vite dev server at `http://localhost:5173`.

---

## 4. Optional: Go Language Setup (if used for future backend)

If backend modules or integrations are added using Go:

- Install Go → [Download](https://go.dev/dl/)
- Verify:
```bash
go version
```

> Currently, no Go files exist in this branch. This is a placeholder for future backend expansion.

---

## 5. Folder Structure Overview

```bash
oss-website/
├── apply/           # Join-the-club form UI
├── bug_report/      # Bug reporting interface
├── contact/         # Contact form and layout
├── events/          # Events timeline module
├── intro/           # Landing section with club overview
├── members/         # Member profiles (currently disabled)
├── milestones/      # Milestones timeline module
└── README.md        # Root-level project overview
```

Each folder contains its own React components and local `README.md` (where applicable).

---

## 6. Optional: VS Code Extensions

Recommended extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens

---

## 7. Troubleshooting Tips

- If `vite` is not recognized, use `npm run dev` instead of `vite dev`.
- For Tailwind issues, check `tailwind.config.js` and `postcss.config.js`.
- Validate import paths and folder names—especially in `events/` and `milestones/`.

---

## You're Ready!

You can now explore, edit, and contribute to the OSS Club website. For contribution guidelines, refer to the root [README.md](./README.md).
