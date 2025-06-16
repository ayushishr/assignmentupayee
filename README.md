Creative Upaay – Kanban Task Manager
Creative Upaay is a modern Kanban board built with React, Redux, and Firebase Authentication. It enables users to organize tasks into stages like Todo, In Progress, and Done with smooth drag-and-drop interactions, filters, and an activity log for better productivity tracking.

Deployment link --- https://assignmentupayee.vercel.app/

✨ Key Features
🔐 User Authentication
Secure sign-up and login using Firebase

Route protection and session persistence

Basic user profile management

📋 Kanban Workflow
Move tasks between stages via drag-and-drop

Filter tasks by due date or priority

Real-time activity feed to monitor task updates

Create tasks with optional deadlines and priority labels

💅 Interface & Experience
Clean, responsive UI with Tailwind CSS

Smooth transitions and user-friendly components

Visual task history and activity tracker

Modals, dropdowns, and intuitive form inputs

🧰 Tech Stack
React 18

Redux Toolkit – State handling

Firebase Auth – Secure login system

React Router DOM – SPA navigation

Tailwind CSS – Modern, utility-first design

SortableJS – Drag-and-drop functionality

Vite – Lightning-fast bundling and development


1. UI-First Strategy
Crafted reusable UI elements (e.g., TaskCard, NavItem)

Followed atomic design principles for maintainability

Designed with flexibility to allow component expansion

2. State Management
Centralized logic using Redux Toolkit

tasksSlice → Stores and manages task states

activitiesSlice → Logs user interactions

Leveraged localStorage for state persistence

Added real-time updates for task shifts

3. Auth Flow
Built with Firebase Authentication

Used a custom AuthContext to manage user sessions and access control

4. UI/UX Design
Tailwind CSS for rapid styling

Drag-and-drop actions to enhance usability

Timeline UI for tracking user actions

## Approach
- **UI Implementation**: Built using React, Tailwind CSS and Material UI.
- **Task Management**: Managed task state and actions through Redux slices.
- **Filtering**: Implemented dropdown-based task filtering with dynamic updates.
- **Drag and Drop**: Integrated `@dnd-kit/core` for optional drag-and-drop functionality.
- **Authentication**: Configured user authentication using Auth0 React library.
- **Subtasks**: Supported subtasks nested under main tasks.

---

## How to Run the Project Locally

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173`.
