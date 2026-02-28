# Donezo Dashboard

A task management dashboard built with React for the Frontend Intern assignment. Features JWT authentication, live API data, and a fully responsive layout that matches the provided Dribbble design.

**Live Demo:** [https://donezo-dashboard.vercel.app/]  
**Design Reference:** [Dribbble](https://dribbble.com/shots/25241984-Task-Management-Dashboard)  
**API:** https://task-api-eight-flax.vercel.app

---

## Features

- **JWT Authentication** — Login with token stored in `localStorage`, auto-logout on session expiry
- **Private Routes** — Dashboard is protected and only accessible after login
- **Live API Data** — All dashboard widgets populated from the REST API
- **Responsive Layout** — Mobile sidebar drawer + desktop sticky sidebar
- **Animated UI** — Framer Motion entrance animations on all cards and widgets

## Tech Stack

| Category | Library |
|---|---|
| Framework | React 19 + Vite |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Charts | Recharts |
| Animations | Framer Motion |
| HTTP Client | Axios |
| Icons | Lucide React |

## Getting Started

**1. Clone and install:**
```bash
git clone <https://github.com/abubakkar-js-dev/donezo-dashboard>
cd donezo-dashboard
npm install
```

**2. Create a `.env` file in the root:**
```env
VITE_API_BASE_URL=https://task-api-eight-flax.vercel.app
```

**3. Run the development server:**
```bash
npm run dev
```

## Demo Credentials

```
Email:    user1@example.com
Password: password123
```

## API Endpoints Used

| Endpoint | Description |
|---|---|
| `POST /api/login` | Authenticate and receive JWT |
| `GET /api/dashboard` | All dashboard data (overview, users, analytics, products) |

## Project Structure

```
src/
├── api/            # Axios instance + API functions
├── components/
│   ├── dashboard/  # All dashboard widgets (Sidebar, Topbar, StatCards, etc.)
│   └── shared/     # Shared components (Loading)
├── context/        # Auth context
├── hooks/          # useAuth, useDashboard
├── Layouts/        # Main and DashboardLayout
├── pages/          # LoginPage, NotFound
├── provider/       # AuthProvider
└── routes/         # AppRoutes, PrivateRoutes
```