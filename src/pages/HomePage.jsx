import React from "react";
import { Github, ArrowRight } from "lucide-react";
import { lessons } from "../data/lessons";
import LessonCard from "../components/LessonCard";
import Layout from "../components/Layout";

const HomePage = () => {
  const projectCardClass =
    "bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-[#6ab3ea] hover:shadow-md transition-all duration-200 flex flex-col h-full";
  const projectTitleClass = "text-2xl font-semibold text-slate-900 mb-3";
  const projectBodyClass = "text-slate-600 mb-4 flex-grow";
  const projectMetaClass = "mt-auto flex justify-between items-center text-slate-500";
  const projectLinkClass =
    "text-[#2f7fb5] hover:text-[#21628d] hover:underline flex items-center";

  return (
    <Layout>
      <div className="min-h-screen bg-white text-slate-800 font-mono antialiased">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Home/Hero Section */}
          <section id="home" className="text-center mb-24 md:mb-36 pt-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Welcome back, <span className="text-[#2f7fb5]">MKU Alien</span>.
            </h1>
            {/* <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
              A Java & Springboot Developer with a passion for building robust
              applications and sharing programming knowledge in Rwanda.
            </p> */}
            <p className="text-base md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
              Let's learn together at our own pace. Build at our own speed.</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-[#6ab3ea] hover:bg-[#4a9ed9] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
              >
                View my projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </section>

          {/* Learn to Code Section */}
          <section id="learn-with-me" className="mb-24 md:mb-36 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              I want to learn ...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          </section>
          {/* Projects Section */}
          <section id="projects" className="mb-24 md:mb-36 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  Bank of Kicukiro
                </h3>
                <p className={projectBodyClass}>
                  Spring Boot API backend: a robust RESTful API built with
                  Spring Boot, demonstrating best practices in microservices
                  architecture, data persistence with JPA, and secure
                  authentication.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">Java, Spring Boot, MySQL</span>
                  <a
                    href="https://github.com/gaesigua/bank-of-kicukiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  College Student Management System
                </h3>
                <p className={projectBodyClass}>
                  A system designed to manage college student data, built with
                  Spring Boot for a robust RESTful API. It includes
                  functionalities for student enrollment, course management, and
                  uses Postman for API testing.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">
                    Java, Spring Boot, REST API, Postman
                  </span>
                  <a
                    href="https://github.com/gaesigua/college-student-management-system-springboot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  Ijisho
                </h3>
                <p className={projectBodyClass}>
                  React frontend application: a responsive single-page
                  application developed with React and Tailwind CSS, consuming
                  data from an external API to display dynamic content.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">React, Tailwind CSS, REST API</span>
                  <a
                    href="https://github.com/gaesigua/your-repo-name-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 4 */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  KinyarwandAI Voice Translator
                </h3>
                <p className={projectBodyClass}>
                  An ongoing Python project to develop an AI-powered voice
                  translator focusing on Kinyarwanda. this system transcribes
                  spoken kinyarwanda, translates it into english, and then
                  converts the english text into speech in multiple languages,
                  bridging communication gaps.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">
                    Python, AI/ML models, Gradio, STT, TTS
                  </span>
                  <a
                    href="https://github.com/gaesigua/Kinyarwanda-AI-Voice-Translator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 5 - To add more as needed */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  Urugo
                </h3>
                <p className={projectBodyClass}>
                  E-commerce front & backend service: a microservice for an
                  e-commerce platform handling product catalog and order
                  management, focusing on scalability and transaction integrity.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">Spring Boot, Kafka, MongoDB</span>
                  <a
                    href="https://github.com/gaesigua/your-repo-name-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 6 - To add more as needed */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  UnderSchool
                </h3>
                <p className={projectBodyClass}>
                  Teaching platform prototype: an early prototype for a learning
                  platform designed for aspiring programmers in Rwanda,
                  featuring course progress tracking and interactive lessons.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">React, Node.js, Express</span>
                  <a
                    href="https://github.com/gaesigua/your-repo-name-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Card 7 - To add more as needed */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  Iwacu Java Library
                </h3>
                <p className={projectBodyClass}>
                  A custom Java utility library, inspired by Google's Guava.
                  this project aims to provide a collection of common helper
                  functions and data structures to streamline development,
                  focusing on robust, reusable, and efficient code patterns.
                  library developed in Java.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">Java</span>
                  <a
                    href="https://github.com/gaesigua/iwacu-java-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 8 */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  Hangman Game
                </h3>
                <p className={projectBodyClass}>
                  A classic hangman game implementation, developed in Java. this
                  project features a command-line interface for interactive
                  gameplay, including word selection, guess tracking, and
                  win/loss conditions.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">Java, Command-Line Interface</span>
                  <a
                    href="https://github.com/gaesigua/HangmanGame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* Project Card 9 */}
              <div className={projectCardClass}>
                <h3 className={projectTitleClass}>
                  Wordle Game
                </h3>
                <p className={projectBodyClass}>
                  A Java implementation of the popular word-guessing game,
                  Wordle. this project features interactive gameplay where users
                  attempt to guess a hidden five-letter word within a limited
                  number of tries, providing feedback on letter correctness and
                  placement.
                </p>
                <div className={projectMetaClass}>
                  <span className="text-sm">Java, Command-Line Interface</span>
                  <a
                    href="https://github.com/gaesigua/Wordle-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectLinkClass}
                  >
                    view code <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
