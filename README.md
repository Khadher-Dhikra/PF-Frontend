# PFE — Plateforme de Gestion de Projets de Fin d'Études

A full-stack web application for managing end-of-study projects (PFE), built with a **PHP backend** and a **React frontend**.

---
## 🎨 Frontend — PF-Frontend

A React SPA built with Vite, featuring role-based dashboards for Students, Tutors, Coordinators, and Jury members.

### Stack
- **React** + **JSX**
- **Vite** (build tool)
- **Axios** (HTTP client)
- **React Router** (routing)

### Directory Structure

```
PF-Frontend/
├── public/
├── src/
│   ├── api/
│   │   └── axios.js                  # Axios instance & interceptors
│   ├── app/
│   │   ├── RedirectByRole.jsx        # Role-based redirect logic
│   │   └── Router.jsx                # App routes
│   ├── assets/                       # Static images
│   ├── Auth/
│   │   ├── AuthContext.jsx
│   │   ├── AuthProvider.jsx
│   │   └── useAuth.js
│   ├── components/
│   │   ├── coordinator/
│   │   │   ├── coordQuickAction.jsx
│   │   │   └── coordRecentlyCreatedAccounts.jsx
│   │   ├── dashboard/
│   │   │   ├── HeaderBar.jsx
│   │   │   ├── SideBar.jsx
│   │   │   └── StatCard.jsx
│   │   ├── student/
│   │   │   ├── ProjectInformation.jsx
│   │   │   └── ProjectProgress.jsx
│   │   ├── tutor/
│   │   ├── InfoPanel.jsx
│   │   └── PrivateRoute.jsx
│   ├── config/
│   │   ├── sidebar.config.js
│   │   └── statCard.config.js
│   ├── Layouts/
│   │   ├── AuthLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── password reset/
│   │   │   │   ├── ForgotPassword.jsx
│   │   │   │   └── resetPassword.jsx
│   │   │   ├── login.jsx
│   │   │   └── register.jsx
│   │   ├── coordinator/
│   │   │   └── CoordinatorDashboard.jsx
│   │   ├── jury/
│   │   │   └── JuryDashboard.jsx
│   │   ├── Student/
│   │   │   ├── StudentDashboard.jsx
│   │   │   ├── StudentDefense.jsx
│   │   │   ├── StudentDeliverables.jsx
│   │   │   ├── StudentProjects.jsx
│   │   │   ├── StudentReports.jsx
│   │   │   └── StudentSettings.jsx
│   │   └── tutor/
│   │       └── TutorDashboard.jsx
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── coordinator.service.js
│   │   ├── stat.service.js
│   │   ├── student.service.js
│   │   └── tutor.service.js
│   ├── styles/
│   │   ├── Auth.css
│   │   └── DashboardStyle.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

### Setup

1. **Install dependencies**
   ```bash
   cd PF-Frontend
   npm install
   ```

2. **Configure API base URL**  
   Edit `src/api/axios.js` and set your backend URL:
   ```js
   baseURL: 'http://localhost/PFE/PF-Backend'
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 👥 User Roles

| Role          | Description                                      |
|---------------|--------------------------------------------------|
| **Student**   | View project info, deliverables, reports, defense schedule |
| **Tutor**     | Supervise assigned students                      |
| **Coordinator** | Manage accounts, view stats, oversee all projects |
| **Jury**      | Evaluate student defenses                        |

---

## 🔐 Authentication Flow

1. User logs in via `/api/login.php` → receives **JWT access token** + **refresh token**
2. Protected routes use `AuthMiddleware.php` to validate the JWT
3. Expired tokens are renewed via `/api/refresh-token.php`
4. Password reset is handled via email using PHPMailer

---
## 🔗 Related Repository

- **Backend (PF-Backend)**: [github.com/Khadher-Dhikra/PF-Backend](https://github.com/Khadher-Dhikra/PF-Backend)

## 📄 License

This project was developed as part of an end-of-study project (PFE).
