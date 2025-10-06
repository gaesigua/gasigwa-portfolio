import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans antialiased flex flex-col">
    {/* Header */}
    <header className="bg-neutral-900 border-b border-neutral-800 py-4 px-6 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-bold text-blue-400 hover:text-blue-300"
      >
        <img
          src="/gasigwa-logo.png"
          alt="Gasigwa.dev Home"
          className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover"
        />
      </Link>
      <nav className="flex space-x-2 md:space-x-4">
        <Link
          to="/"
          className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
        >
          home
        </Link>
<<<<<<< HEAD
        {/* I am commenting out the links, for now we will use a to use href;  `a` tags for now because they are in-page links */}
        {/* <Link to="/lessons" className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium">
          lessons
        </Link> */}
        <a
          href="/#learn-with-me"
          className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
        >
          learn
        </a>
        {/* <Link
          to="/projects"
          className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
        >
          projects
        </Link> */}
        <a
          href="/#projects"
          className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
        >
          projects
        </a>
      </nav>

      {/* This nav is the old code */}
      {/* <nav className="space-x-6"> */}
      {/* <Link to="/" className="text-neutral-300 hover:text-blue-400">
          home
        </Link> */}
      {/* <Link to="/lessons" className="text-neutral-300 hover:text-blue-400">
          lessons
        </Link> */}
      {/* Add more links as needed */}
      {/* </nav> */}
=======
        <Link to="/lessons" className="text-neutral-300 hover:text-blue-400">
          learn
        </Link>
        <Link to="/projects" className="text-neutral-300 hover:text-blue-400">
          projects
        </Link>
        {/* Add more links as needed */}
      </nav>
      
>>>>>>> 89c2891 (trying to commit)
    </header>

    {/* Main Content */}
    <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
      {children}
    </main>

    {/* Footer */}
    <footer className="bg-neutral-900 border-t border-neutral-800 py-4 px-6 text-center text-neutral-400 text-sm">
      &copy; {new Date().getFullYear()} gasigwa. all rights reserved.
    </footer>
  </div>
);

export default Layout;
