# Finance Dashboard

A clean and interactive finance dashboard built using React.
This project focuses on intuitive UI design, structured component architecture, and efficient state management to simulate a real-world financial tracking interface.

---

## Objective

To design a simple and intuitive dashboard that allows users to:

- View financial summaries
- Explore and manage transactions
- Analyze spending patterns
- Interact with data dynamically

---

## Concept Overview

```
User → Views Summary → Explores Transactions → Gains Insights → Takes Action
```

---

## Application Structure

```
App
 ├── Dashboard
 │     ├── Summary Cards
 │     ├── Charts (Line + Pie)
 │     ├── Transactions Table
 │     └── Insights
 ├── Role Management (Viewer/Admin)
 └── Global State (Context API)
```

---

## Features

### Dashboard Overview

- Displays total balance, income, and expenses
- Line chart for financial trends over time
- Pie chart for category-wise spending distribution

### Transactions

- Transaction list (date, amount, category, type)
- Search and category-based filtering
- Column-based sorting (click on headers)
- Add, edit, and delete functionality (Admin only)

### Role-Based UI

- Viewer: read-only access
- Admin: full control (add/edit/delete)

### Insights

- Total expenses calculation
- Highest spending category
- Average spend per transaction

### Dark Mode

- Toggle between light and dark themes
- Consistent styling across components

### Data Persistence

- Data stored in localStorage
- Retains changes after refresh

---

## Technical Stack

- React (Vite) for UI development
- Tailwind CSS for styling
- Recharts for data visualization
- CContext API for global state management
- localStorage for persistence

---

## How It Works

- `dummyData.js` provides initial data
- React state manages all updates
- CRUD operations modify state dynamically
- localStorage persists data across sessions

---

## Run Locally

```
npm install
npm run dev
```

---

## Key Design Decisions

- Focused on clarity and usability over complexity
- Implemented dynamic filtering and sorting
- Used role-based UI to simulate real-world behavior
- Structured components for scalability and maintainability

---

## Author

Shrishti Pandey
