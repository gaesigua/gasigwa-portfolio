# Chapter 2: Web Basics

<div class="intro-box">
  <h2>Overview</h2>
  <p>This chapter explores the fundamental concepts behind the World Wide Web. We will differentiate the Internet from the WWW and dive into core web technologies, modern web development models, deployment practices, and essential web security protocols.</p>
</div>

## 2.1 Introduction

<div class="definition-card">
  <h4>World Wide Web (WWW)</h4>
  <p>A service that operates over the internet, consisting of interlinked web pages and documents accessed via browsers over HTTP/HTTPS protocols.</p>
</div>

<div class="definition-card">
  <h4>Web Browser</h4>
  <p>A software application (e.g., Chrome, Firefox, Safari) used to access, retrieve, and display web pages on the client side.</p>
</div>

<div class="definition-card">
  <h4>Web Server</h4>
  <p>A computer system and software that stores, processes, and delivers web pages to clients whenever they request them via their browsers.</p>
</div>

## 2.2 Core Web Technologies

Building for the web typically involves technologies divided into two main categories: **Frontend** and **Backend**.

### a. Frontend (Client-side)

Technologies that run in the browser and control what the user sees and interacts with.

<table class="data-table">
  <thead>
    <tr>
      <th>Technology</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>HTML</strong> (HyperText Markup Language)</td>
      <td>Provides the fundamental structure and content of web pages.</td>
    </tr>
    <tr>
      <td><strong>CSS</strong> (Cascading Style Sheets)</td>
      <td>Handles the styling, layout, aesthetics, and responsiveness of the page.</td>
    </tr>
    <tr>
      <td><strong>JavaScript</strong></td>
      <td>Adds logic, functionality, and interactivity to make web pages dynamic.</td>
    </tr>
    <tr>
      <td><strong>Frameworks & Libraries</strong></td>
      <td>Advanced tools like React, Angular, Vue.js, and Svelte that streamline building complex UIs.</td>
    </tr>
  </tbody>
</table>

### b. Backend (Server-side)

Technologies that run on the server, handling business logic, user authentication, and databases.

<table class="data-table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Programming Languages</strong></td>
      <td>Node.js (JavaScript), Python (Django, Flask), PHP, Ruby, Java, C#, Go</td>
    </tr>
    <tr>
      <td><strong>Frameworks</strong></td>
      <td>Express, Laravel, Spring Boot, ASP.NET Core</td>
    </tr>
    <tr>
      <td><strong>Databases</strong></td>
      <td>MySQL, PostgreSQL, MongoDB, Redis, Oracle</td>
    </tr>
  </tbody>
</table>

## 2.3 Web Development Models

Web development has evolved drastically over the years. Modern web applications usually fall into one of the following structural models:

<div class="concept-card">
  <div class="concept-header">
    <span class="concept-name">Static Websites</span>
  </div>
  <p>Fixed content delivered exactly as stored on the server. Often built with just plain HTML and CSS, ideal for simple informational pages.</p>
</div>

<div class="concept-card">
  <div class="concept-header">
    <span class="concept-name">Dynamic Websites</span>
  </div>
  <p>Content is typically generated on the fly using backend logic and databases before being sent to the client.</p>
</div>

<div class="concept-card">
  <div class="concept-header">
    <span class="concept-name">Single Page Applications (SPA)</span>
  </div>
  <p>JavaScript-heavy applications (like React or Vue apps) that dynamically update parts of the current page without reloading the entire page.</p>
</div>

<div class="concept-card">
  <div class="concept-header">
    <span class="concept-name">Progressive Web Apps (PWA)</span>
  </div>
  <p>Web apps enhanced with modern browser features that offer offline capabilities, push notifications, and a mobile app-like performance and experience.</p>
</div>

## 2.4 Web Hosting & Deployment

To make a website accessible to the world, its files need to be stored on a server and reachable constantly.

<ul class="key-points">
  <li><strong>Web Hosting Services:</strong> Platforms that provide server space and infrastructure. Common providers include AWS, Azure, Google Cloud, Netlify, Vercel, and classic shared hosting panels like cPanel.</li>
  <li><strong>Version Control:</strong> Crucial tools like Git (and platforms like GitHub or GitLab) to keep track of code changes collaboratively.</li>
  <li><strong>CI/CD (Continuous Integration/Continuous Deployment):</strong> Automated pipelines configured to automatically test and deploy your code to the host every time a change is pushed.</li>
</ul>

## 2.5 Web Security

Since the web spans across the globe, protecting user data and ensuring secure communication is paramount.

<div class="warning">
  <strong>Key Security Principles:</strong>
  <ul>
    <li><strong>HTTPS (SSL/TLS):</strong> Ensures all communication between a browser and a server is encrypted. Avoid typing sensitive data on unencrypted HTTP domains.</li>
    <li><strong>Authentication & Authorization:</strong> Mechanisms like OAuth and JWT to verify who a user is and determine what they are allowed to do.</li>
    <li><strong>Common Threats:</strong> Must be specifically guarded against. Notable vulnerabilities include XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), and SQL Injection.</li>
  </ul>
</div>
