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
        {/* Full-width Hero Wrapper */}
        <div className="relative bg-gradient-to-b from-slate-50 to-[#e6f3fb] pt-16 pb-32 md:pb-48">
          <div className="container mx-auto px-4 relative z-10">
            {/* Home/Hero Section */}
            <section id="home" className="pt-8 md:pt-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Welcome back, <span className="text-[#2f7fb5]">MKU Alien</span>.
                </h1>
                {/* <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                  A Java & Springboot Developer with a passion for building robust
                  applications and sharing programming knowledge in Rwanda.
                </p> */}
                <p className="text-base md:text-2xl text-slate-600 max-w-lg mx-auto md:mx-0 mb-8">
                  Let's learn together at our own pace. Build at our own speed.</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="#projects"
                    className="bg-[#6ab3ea] hover:bg-[#4a9ed9] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
                  >
                    View my projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img 
                  src="/hero_illustration_9_SCENE.svg" 
                  alt="Minimalist vector illustration of learning to code" 
                  className="w-full max-w-md object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </section>
          </div>
        </div>

        {/* Wave Divider placed right after the Hero Wrapper */}
        <div className="w-full overflow-hidden leading-[0] bg-white -mt-[1px]">
          <svg
            className="relative block w-full h-[60px] md:h-[120px] lg:h-[160px] rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#e6f3fb"
              fillOpacity="1"
              d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,181.3C672,213,768,235,864,213.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              /* d="0,288L48,256C96,224,192,160,288,128C384,96,480,96,576,106.7C672,117,768,139,864,170.7C960,203,1056,245,1152,224C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" */
            ></path>
          </svg>
          </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Learn to Code Section */}
          <section id="learn-with-me" className="mb-24 md:mb-36 py-12 md:py-16">
            <div className="flex flex-col items-center justify-center mb-12">
              {/* Decorative Icon/Illustration Placeholder */}
              {/* <div className="w-24 h-24 mb-6 bg-[#f0f7fc] rounded-full border-2 border-dashed border-[#cde6f9] flex flex-col items-center justify-center text-[#2f7fb5] hover:border-[#6ab3ea] transition-colors cursor-pointer">
                <span className="text-xs font-semibold text-center px-2">Spot<br/>Image</span>
              </div> */}
              
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
                Courses
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          </section>

          {/* About/Philosophy Section Placeholder */}
          <section className="mb-24 md:mb-36 py-16 md:py-20 bg-gradient-to-br from-[#f8fcff] to-white rounded-[2rem] p-8 md:p-16 border border-[#e6f3fb] shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="md:w-1/2 flex justify-center">
                {/* Large Illustration Placeholder */}
                <div className="w-full max-w-sm aspect-square bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:border-[#6ab3ea] transition-colors cursor-pointer group">
                  <svg className="w-16 h-16 mb-4 opacity-50 group-hover:text-[#6ab3ea] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {/* <span className="text-sm font-medium group-hover:text-[#6ab3ea] transition-colors">Add Scene Illustration</span> */}
                  <img src="/undraw_education_1.png"/>
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Learn With Us?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We tailor learning to each student's specific level, abilities, and aptitudes to optimize their educational experience.<br></br>
                  We Deliver interactive, multimedia, and enjoyable learning experiences that improve student retention.<br></br>
                  We Provide 24/7 access to education, bridging geographical gaps and supporting diverse learning needs.<br></br>
                  We Assure users of strict privacy protections and secure, responsible, and compliant data handling.
                  </p>
                <ul className="text-left space-y-5 text-slate-600 max-w-md mx-auto md:mx-0">
                  <li className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] font-bold">1</div>
                    <span className="font-medium text-lg">Interactive quizzes and practice</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] font-bold">2</div>
                    <span className="font-medium text-lg">Learn at your own pace</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] font-bold">3</div>
                    <span className="font-medium text-lg">Build real-world projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 md:mb-36 py-12 md:py-16">
            <div className="flex flex-col items-center justify-center mb-12">
              {/* Decorative Icon/Illustration Placeholder */}
              {/* <div className="w-24 h-24 mb-6 bg-[#f0f7fc] rounded-full border-2 border-dashed border-[#cde6f9] flex flex-col items-center justify-center text-[#2f7fb5] hover:border-[#6ab3ea] transition-colors cursor-pointer">
                <span className="text-xs font-semibold text-center px-2">Spot<br/>Image</span>
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
                My Projects
              </h2>
            </div>
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
