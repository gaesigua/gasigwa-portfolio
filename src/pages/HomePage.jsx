import React from "react";
import { Github, ArrowRight, Target, Zap, Globe, ShieldCheck } from "lucide-react";
import { lessons } from "../data/lessons";
import LessonCard from "../components/LessonCard";
import Layout from "../components/Layout";

const HomePage = () => {
  const universityLogos = [
    "/adventist-university-of-central-africa-logo.png",
    "/african-leadership-university-logo.png",
    "/catholic-university-of-rwanda-logo.png",
    "/kepler-college-logo.png",
    "/kigali-independent-university-logo.png",
    "/mount-kigali-university-logo.png",
    "/rwanda-polytechnic-logo.jpeg",
    "/university-of-health-equity-logo.png",
    "/university-of-kigali-logo.png",
    "/university-of-rwanda-logo.png"
  ];

  const projectCardClass =
    "bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-[#6ab3ea] hover:shadow-md transition-all duration-200 flex flex-col h-full";
  const projectTitleClass = "text-2xl font-semibold text-slate-900 mb-3";
  const projectBodyClass = "text-slate-600 mb-4 flex-grow";
  const projectMetaClass = "mt-auto flex justify-between items-center text-slate-500";
  const projectLinkClass =
    "text-[#2f7fb5] hover:text-[#21628d] hover:underline flex items-center";

  return (
    <Layout>
      <div className="min-h-screen bg-white text-slate-800 antialiased">
        {/* Full-width Hero Wrapper */}
        <div className="relative bg-gradient-to-b from-slate-50 to-[#e6f3fb] pt-16 pb-32 md:pb-48">
          <div className="container mx-auto px-4 relative z-10">
            {/* Home/Hero Section */}
            <section id="home" className="pt-8 md:pt-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Welcome back, <span className="text-[#2f7fb5]">Alien</span>.
                </h1>
                {/* <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
                  A Java & Springboot Developer with a passion for building robust
                  applications and sharing programming knowledge in Rwanda.
                </p> */}
                <p className="text-base md:text-2xl text-slate-600 max-w-lg mx-auto md:mx-0 mb-8">
                  Let's learn together at our own pace. Build at our own speed.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a
                    href="#learn-with-me"
                    className="bg-[#6ab3ea] hover:bg-[#4a9ed9] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a
                    href="#projects"
                    className="bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-lg border border-slate-300 hover:border-[#6ab3ea] shadow-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                  >
                    View my projects
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
                Courses
              </h2>
              <p className="text-slate-500 text-center max-w-xl">
                Structured, self-paced learning paths designed for university students in Rwanda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* TouchType Academy Custom Card */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-[#6ab3ea] hover:shadow-md transition-all duration-200 flex flex-col h-full">
                <div className="h-20 w-20 mx-auto mb-4 bg-[#e0f0fa] text-[#4a9ed9] rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>
                </div>
                <h3 className='text-2xl font-semibold text-slate-900 mb-3 text-center'>TouchType Academy</h3>
                <p className='text-slate-600 mb-4 flex-grow'>
                  Master the keyboard with our interactive 20-step curriculum. Build muscle memory and typing fluency from scratch.
                </p>
                <div className='mt-auto flex justify-between items-center text-slate-500'>
                  <span className='text-sm'>Typing Lessons, Typing Games</span>
                  <a href="/typing-academy" className='text-[#2f7fb5] hover:text-[#21628d] border border-slate-200 hover:border-[#2f7fb5] hover:bg-slate-50 px-3 py-1.5 rounded-lg flex items-center transition-all duration-200'>
                    Start Course <ArrowRight className='ml-1 w-4 h-4' />
                  </a>
                </div>
              </div>

              {lessons.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          </section>

          {/* Why Learn With Us Section */}
          <section className="mb-24 md:mb-36 py-16 md:py-20 bg-gradient-to-br from-[#f8fcff] to-white rounded-[2rem] p-8 md:p-16 border border-[#e6f3fb] shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

              {/* Illustration */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/undraw_education_1.png"
                  alt="Education illustration"
                  className="w-full max-w-sm object-contain drop-shadow-md"
                />
              </div>

              {/* Text + Feature Cards */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Why Learn With Us?</h2>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  We tailor every experience to help you learn faster, retain more, and build real skills.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e6f3fb] shadow-sm hover:shadow-md hover:border-[#6ab3ea] transition-all duration-200 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] group-hover:bg-[#2f7fb5] group-hover:text-white transition-colors duration-200">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Personalized Learning</h3>
                      <p className="text-sm text-slate-500 leading-snug">Tailored to your level, abilities, and aptitudes.</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e6f3fb] shadow-sm hover:shadow-md hover:border-[#6ab3ea] transition-all duration-200 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] group-hover:bg-[#2f7fb5] group-hover:text-white transition-colors duration-200">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Interactive & Engaging</h3>
                      <p className="text-sm text-slate-500 leading-snug">Multimedia lessons and quizzes that improve retention.</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e6f3fb] shadow-sm hover:shadow-md hover:border-[#6ab3ea] transition-all duration-200 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] group-hover:bg-[#2f7fb5] group-hover:text-white transition-colors duration-200">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">24/7 Access</h3>
                      <p className="text-sm text-slate-500 leading-snug">Learn anytime, anywhere — no geographical limits.</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e6f3fb] shadow-sm hover:shadow-md hover:border-[#6ab3ea] transition-all duration-200 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e6f3fb] flex items-center justify-center text-[#2f7fb5] group-hover:bg-[#2f7fb5] group-hover:text-white transition-colors duration-200">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Private & Secure</h3>
                      <p className="text-sm text-slate-500 leading-snug">Strict privacy protections and responsible data handling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 md:mb-36 py-12 md:py-16">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
                My Projects
              </h2>
              <p className="text-slate-500 text-center max-w-xl">
                A selection of what I've built — from backend APIs to AI-powered tools.
              </p>
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

        {/* Trusted By Section */}
        <section className="w-full bg-[#6ab3ea] py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              Trusted by Students at Top Universities in Rwanda
            </h2>
          </div>
          
          <div className="relative w-full flex overflow-hidden group">
            {/* Gradient masks for smooth fade effect at edges */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#6ab3ea] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#6ab3ea] to-transparent pointer-events-none"></div>
            
            <div className="animate-marquee flex items-center">
              {/* First set of logos */}
              {universityLogos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex-shrink-0 flex items-center justify-center w-40 h-24 md:w-56 md:h-32 bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mx-4 md:mx-6">
                  <img src={logo} alt={`University Logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
              {/* Duplicate set for seamless looping */}
              {universityLogos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex-shrink-0 flex items-center justify-center w-40 h-24 md:w-56 md:h-32 bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mx-4 md:mx-6">
                  <img src={logo} alt={`University Logo ${index + 1}`} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
