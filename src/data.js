const questions = [
  {
    id: 1,
    title: 'What is JavaScript?',
    info: 'JavaScript is a high-level programming language mainly used for making web pages interactive. It can update the DOM, handle events, fetch data from APIs, and is supported by all modern browsers.',
  },
  {
    id: 2,
    title: 'What is asynchronous JavaScript?',
    info: 'Asynchronous JavaScript allows code to run without blocking the main thread. Examples are setTimeout, Promises, and async/await. It’s useful for tasks like fetching data or waiting for user input.',
  },
  {
    id: 3,
    title: 'What is React?',
    info: 'React is a JavaScript library created by Facebook for building fast, reusable, and interactive user interfaces. It uses components, a virtual DOM for efficient updates, and supports single-page applications (SPAs).',
  },
  {
    id: 4,
    title: 'What is a component in React?',
    info: 'A component is the building block of a React app. It’s a function or class that returns JSX and represents part of the UI, like a button, navbar, or form. Components can be reused across the app.',
  },
  {
    id: 5,
    title: 'What is routing in React?',
    info: 'Routing in React is handled by libraries like React Router, which allow navigation between components/pages without reloading the entire webpage. This makes apps behave like single-page applications (SPAs).',
  },
  {
    id: 6,
    title: 'What is Next.js?',
    info: 'Next.js is a React framework that provides server-side rendering, static site generation, file-based routing, and built-in optimizations to build fast, scalable web apps.',
  },
  {
    id: 7,
    title: 'How does routing work in Next.js?',
    info: 'In Next.js, routing is file-based: every file inside the pages/ folder automatically becomes a route. For example, pages/index.js = /, and pages/about.js = /about, without needing React Router.',
  },
];
export default questions;
