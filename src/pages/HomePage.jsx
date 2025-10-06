import React from "react";
import { Link } from "react-router-dom";
import { Github, ArrowRight } from "lucide-react";
import { lessons } from "../data/lessons";
import LessonCard from "../components/LessonCard";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-neutral-950 text-neutral-200 font-mono antialiased">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Commenting out the old navigation bar, because I copied directly the classes into the Layout file */}
          {/* Navigation - For now I will just add Home, Projects, and Learn links. I might update later */}
          {/* <nav className="flex justify-between items-center mb-12 md:mb-24"> */}
            {/* // Tailwind classes for sizing and styling */}
            {/* <Link to="/">
              <img
                src="/gasigwa-logo.png"
                alt="Gasigwa.dev Home"
                className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover"
              />
            </Link> */}
            {/* <ul className="flex space-x-2 md:space-x-4">
              // <li>
              //   <Link to="/" className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium">
              //     home
              //   </Link>
              // </li>
              // <li>
              //   <a
              //     href="#learn-with-me"
              //     className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
              //   >
              //     learn
              //   </a>
              // </li>
              // <li>
              //   <a
              //     href="#projects"
              //     className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium"
              //   >
              //     {/* This can remain an `a` tag for now as it's an in-page link */}
              {/* projects */}
                 {/* </a> */}
              {/* </li> */}
              {/* <li> */}
              {/* <a */}
                   {/* href="#learn-with-me" */}
                   {/* className="block py-2 px-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-neutral-50 transition-colors duration-200 font-medium" */}
                 {/* > */}
                   {/* learn */}
                 {/* </a> */}
               {/* </li> */}
               {/* </ul> */}
               {/* </nav> */}
               {/* </ul> */}
               {/* </nav> */}

          {/* Home/Hero Section */}
          <section id="home" className="text-center mb-24 md:mb-36 pt-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-50 mb-6 leading-tight">
              hello, i'm <span className="text-blue-400">gasigwa</span>.
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-8">
              a java & springboot developer with a passion for building robust
              applications and teaching programming in Rwanda.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
              >
                view my projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              {/* Removed 'Get in Touch' button as Contact section was removed as well */}
            </div>
          </section>

          {/* Learn to Code Section */}
          <section id="learn-with-me" className="mb-24 md:mb-36 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 text-center mb-12">
              learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          </section>
          {/* Projects Section */}
          <section id="projects" className="mb-24 md:mb-36 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 text-center mb-12">
              my projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  bank of kicukiro
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  Spring Boot API backend: a robust RESTful API built with
                  Spring Boot, demonstrating best practices in microservices
                  architecture, data persistence with JPA, and secure
                  authentication.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">Java, Spring Boot, MySQL</span>
                  <a
                    href="https://github.com/gaesigua/bank-of-kicukiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  college student management system
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  a system designed to manage college student data, built with
                  Spring Boot for a robust RESTful API. It includes
                  functionalities for student enrollment, course management, and
                  uses Postman for API testing.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">
                    java, Spring Boot, REST API, Postman
                  </span>
                  <a
                    href="https://github.com/gaesigua/college-student-management-system-springboot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  ijisho
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  React frontend application: a responsive single-page
                  application developed with React and Tailwind CSS, consuming
                  data from an external API to display dynamic content.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">React, Tailwind CSS, REST API</span>
                  <a
                    href="https://github.com/gaesigua/your-repo-name-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 4 */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  kinyarwandAI voice translator
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  an ongoing Python project to develop an AI-powered voice
                  translator focusing on Kinyarwanda. this system transcribes
                  spoken kinyarwanda, translates it into english, and then
                  converts the english text into speech in multiple languages,
                  bridging communication gaps.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">
                    Python, AI/ML models, Gradio, STT, TTS
                  </span>
                  <a
                    href="https://github.com/gaesigua/Kinyarwanda-AI-Voice-Translator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 5 - To add more as needed */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  urugo
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  e-commerce front & backend service: a microservice for an
                  e-commerce platform handling product catalog and order
                  management, focusing on scalability and transaction integrity.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">Spring Boot, Kafka, MongoDB</span>
                  <a
                    href="https://github.com/gaesigua/your-repo-name-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 6 - To add more as needed */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  underSchool
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  teaching platform prototype: an early prototype for a learning
                  platform designed for aspiring programmers in Rwanda,
                  featuring course progress tracking and interactive lessons.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">React, Node.js, Express</span>
                  <a
                    href="https://github.com/gaesigua/your-repo-name-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 7 - To add more as needed */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  iwacu java library
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  a custom Java utility library, inspired by Google's Guava.
                  this project aims to provide a collection of common helper
                  functions and data structures to streamline development,
                  focusing on robust, reusable, and efficient code patterns.
                  library developed in Java.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">Java</span>
                  <a
                    href="https://github.com/gaesigua/iwacu-java-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 8 */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  hangman game
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  a classic hangman game implementation, developed in Java. this
                  project features a command-line interface for interactive
                  gameplay, including word selection, guess tracking, and
                  win/loss conditions.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">Java, command-line interface</span>
                  <a
                    href="https://github.com/gaesigua/HangmanGame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 9 */}
              <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-neutral-50 mb-3">
                  wordle game
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  a Java implementation of the popular word-guessing game,
                  Wordle. this project features interactive gameplay where users
                  attempt to guess a hidden five-letter word within a limited
                  number of tries, providing feedback on letter correctness and
                  placement.
                </p>
                <div className="mt-auto flex justify-between items-center text-neutral-400">
                  <span className="text-sm">Java, command-line interface</span>
                  <a
                    href="https://github.com/gaesigua/Wordle-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* I am commenting out this footer that we originally created before creating the Layout file which has its Footer */}
          {/* Footer */}
          {/* <footer className="text-center text-neutral-500 text-sm mt-16 pt-8 border-t border-neutral-800">
            <p>
              &copy; {new Date().getFullYear()} gasigwa. all rights reserved.
            </p>
          </footer> */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
