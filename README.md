
# DevSpace — Blog Platform

DevSpace is a responsive blog platform built with React. It allows users to explore articles across different technology categories and view individual blog details through a clean, modern interface.

## Features

- Responsive blog card layout
- Category-based article filtering
- Individual blog detail pages
- React Router navigation
- Custom 404 Page Not Found screen
- Mobile-friendly navigation menu
- Modern UI with hover effects and styling

## Tech Stack

- React
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harish12366/devspace-blog-platform.git
```

### 2. Navigate to the project folder

```bash
cd devspace-blog-platform
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── CategoryNavbar.jsx
│   ├── BlogCard.jsx
│   ├── BlogDetails.jsx
│   └── NotFound.jsx
├── data/
│   └── BlogsData.js
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── HomePage.jsx
│   └── CategoryPage.jsx
├── App.jsx
├── main.jsx
└── index.css

public/
└── _redirects
```

## Deployment

The application can be deployed using Netlify.

Build command:

```bash
npm run build
```

Publish directory:

```text
dist
```

## Learning Outcomes

- Building reusable React components
- Passing and displaying data through props
- Rendering lists using array methods
- Implementing dynamic routes with React Router
- Filtering content by category
- Creating responsive layouts using CSS
- Handling invalid routes with a custom 404 page


