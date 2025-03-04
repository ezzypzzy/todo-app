# Todo App

A sleek, responsive Todo App built with **React**, **TypeScript**, and **Vite**. Manage your tasks by adding, completing, deleting, and filtering them. All your tasks are persisted in localStorage, so your progress is always saved—even after a refresh!

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Features

- **Add Tasks:** Easily add new tasks with a text input.
- **Toggle Completion:** Mark tasks as complete/incomplete with a simple click.
- **Delete Tasks:** Remove tasks with a smooth fade-out and shrink animation.
- **Filter Tasks:** Filter tasks to show all, completed, or pending items.
- **Persistent Data:** Tasks are saved in localStorage and even fetched from the DummyJSON API if no saved data exists.
- **Responsive Design:** Clean, responsive UI built using Tailwind CSS.
- **Notifications:** Toast notifications for task actions using react-hot-toast.

## API Integration

If no tasks are found in localStorage, the app fetches initial tasks from the [DummyJSON Todos API](https://dummyjson.com/docs/todos#todos-a).

## Live Demo

Check out the live app on [Vercel](https://todo-app-eta-navy-68.vercel.app/)
