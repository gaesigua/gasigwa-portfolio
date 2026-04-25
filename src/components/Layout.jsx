import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-white text-slate-800 font-sans antialiased flex flex-col">
    {/* Header */}
    <header className="bg-white/95 backdrop-blur border-b border-slate-200 py-2.5 md:py-1.5 px-6 flex items-center justify-between sticky top-0 z-20">
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
        <img
          src="/gasigwa-logo.png"
          alt="Gasigwa — Learn With Me"
          className="h-12 md:h-16 w-auto object-contain"
        />
      </Link>
      <nav className="flex space-x-2 md:space-x-4">
        <Link
          to="/"
          className="block py-2 px-3 rounded-lg text-slate-600 hover:bg-[#6ab3ea1f] hover:text-[#2f7fb5] transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        {/* I am commenting out the links, for now we will use a to use href;  `a` tags for now because they are in-page links */}
        {/* <Link to="/lessons" className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium">
          lessons
        </Link> */}
        <a
          href="/#learn-with-me"
          className="block py-2 px-3 rounded-lg text-slate-600 hover:bg-[#6ab3ea1f] hover:text-[#2f7fb5] transition-colors duration-200 font-medium"
        >
          Learn
        </a>
        {/* <Link
          to="/projects"
          className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
        >
          projects
        </Link> */}
        <a
          href="/#projects"
          className="block py-2 px-3 rounded-lg text-slate-600 hover:bg-[#6ab3ea1f] hover:text-[#2f7fb5] transition-colors duration-200 font-medium"
        >
          Projects
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
        {/* <Link to="/lessons" className="text-neutral-300 hover:text-blue-400"> */}
          {/* learn */}
        {/* </Link> */}
        {/* <Link to="/projects" className="text-neutral-300 hover:text-blue-400"> */}
          {/* projects */}
        {/* </Link> */}
        {/* Add more links as needed */}
      {/* </nav>*/}
      </header>

    {/* Main Content */}
    <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
      {children}
    </main>

    {/* Footer */}
    <footer className="bg-slate-50 border-t border-slate-200 py-4 px-6 text-center text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} gasigwa. all rights reserved.
    </footer>
  </div>
);

export default Layout;
