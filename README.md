# Reservations Dashboard

A modern reservations management dashboard built with React, Vite, TypeScript, ShadCN, and Tailwind CSS. This application displays a grid of reservation cards with details such as guest information, status, dates, and payment details, featuring a dark theme and interactive UI components.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Complete Code](#complete-code)
  - [lib/utils.ts](#libutilsts)
  - [components/ui/Button.tsx](#componentsuibuttontsx)
  - [components/ui/Popover.tsx](#componentsuipopovertsx)
  - [components/ui/Select.tsx](#componentsuiselecttsx)
  - [components/ui/Input.tsx](#componentsuiinputtsx)
  - [components/ui/Badge.tsx](#componentsuibadgetsx)
  - [components/ui/Card.tsx](#componentsuicardtsx)
  - [data/reservations.ts](#datareservationsts)
  - [components/ReservationCard.tsx](#componentsreservationcardtsx)
  - [components/Dashboard.tsx](#componentsdashboardtsx)
  - [App.tsx](#apptsx)
  - [main.tsx](#maintsx)
  - [index.css](#indexcss)
  - [tailwind.config.js](#tailwindconfigjs)
  - [vite.config.ts](#viteconfigts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Responsive 3x3 grid layout for reservation cards.
- Dynamic reservation data with TypeScript typing.
- Customizable badges for status indicators (Pending, Confirmed, Canceled).
- Interactive header with search, filters, and date picker.
- Dark theme support using Tailwind CSS.
- Reusable UI components powered by ShadCN.
- Integration with Lucide React for icons.

## Prerequisites
- Node.js (v16.x or higher)
- npm (v8.x or higher) or Yarn
- Git (optional, for cloning the repository)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/reservations-dashboard.git
cd reservations-dashboard

```

```bash
npm install

```
# 3. Additional Dependencies
Ensure the following dependencies are installed:

 - @radix-ui/react-slot
 - class-variance-authority
 - clsx
 - lucide-react
 - tailwind-merge
 - @types/clsx (for TypeScript support)
 - Install them with:


# 5. Initialize ShadCN
If not already initialized, set up ShadCN components:

```bash 

npx shadcn-ui@latest init
```
- Add all necessary components from shadcn
- Example: shadcn@latest add button

```bash
npm run dev
```


 ## Open your browser and navigate to http://localhost:5173 (or the port displayed in the terminal).

# Folder strcture
```bash
reservations-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx         # Main grid component
│   │   ├── ReservationCard.tsx   # Individual reservation card
│   │   └── ui/                   # ShadCN UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Popover.tsx
│   │       ├── Select.tsx
│   │       ├── Input.tsx
│   │       └── Badge.tsx
│   ├── data/
│   │   └── reservations.ts       # Reservation data
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Tailwind CSS
│   └── ...
├── package.json                 # Project dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite configuration
└── README.md                    # This file
```
