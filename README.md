# 🏥 Health Care Automation 

## 📌 Overview

**Health Care Automation** is a modern web-based frontend application built to streamline patient interaction and healthcare services using automation and AI. This frontend serves as the client-side interface for features such as patient portals, AI medical chat assistance, and health education.

Built with modern frontend technologies like **React + TypeScript**, **Tailwind CSS**, and **Vite**, the application is modular, responsive, and scalable.

---

## 🚀 Tech Stack

- ⚛️ React (with TypeScript)
- 💨 Tailwind CSS
- ⚡ Vite
- 🧹 ESLint + Prettier
- 🔧 PostCSS
- 🛠️ Node.js

---

## 🛠️ Installation & Development

### Prerequisites

Make sure you have **Node.js** (version 16 or later) installed:  
👉 [Download Node.js](https://nodejs.org/)

### Steps to Run the Project

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HEALTH-B-C

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Visit the app**
   Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
HEALTH-B-C/
├── dist/                          # Build output directory
├── node_modules/                 # Node.js dependencies
├── src/                          # Main source directory
│   ├── components/               # Reusable UI components
│   │   ├── Contact.tsx
│   │   ├── Doctors.tsx
│   │   ├── Footer.tsx
│   │   ├── FooterLogo.tsx
│   │   ├── Hero.tsx
│   │   ├── logo.svg
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── pages/                    # Main page components (routes)
│   │   ├── About.tsx
│   │   ├── AIChat.tsx
│   │   ├── Contact.tsx
│   │   ├── HealthTutorials.tsx
│   │   ├── Home.tsx
│   │   └── PatientPortal.tsx
│   ├── App.tsx                   # Main App component
│   ├── index.css                 # Global CSS
│   ├── main.tsx                  # Entry point
│   └── vite-env.d.ts             # Vite environment types
├── .gitignore                    # Git ignore rules
├── index.html                    # HTML template
├── package.json                  # Project metadata and scripts
├── package-lock.json             # Locked dependency versions
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.app.json             # TypeScript config for the app
├── tsconfig.json                 # Root TypeScript configuration
├── tsconfig.node.json            # TypeScript config for Node tools
└── vite.config.ts                # Vite configuration
```

---

## 📌 Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint to check for code issues

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
