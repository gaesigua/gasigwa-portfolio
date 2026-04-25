const quiz = {
  id: "internet-web-basics-quiz",
  title: "Web Basics",
  questions: [
    {
      question: "What is the difference between the Internet and the World Wide Web (WWW)?",
      options: [
        "They are strictly exactly the same thing",
        "The WWW is the hardware, the Internet is the software",
        "The Internet is the global network of computers; the WWW is a service operating over the Internet via web pages",
        "The WWW replaces the Internet in modern computers"
      ],
      correctIndex: 2,
      hint: "One is infrastructure, the other runs on top of it.",
      explanation: "The Internet is the underlying network infrastructure, whereas the World Wide Web is a service of interlinked documents (web pages) accessed over the Internet."
    },
    {
      question: "Which of the following is NOT typically considered a Frontend technology?",
      options: [
        "HTML",
        "CSS",
        "JavaScript",
        "PostgreSQL"
      ],
      correctIndex: 3,
      hint: "Frontend runs in the user's browser, what runs on the server?",
      explanation: "PostgreSQL is a backend relational database system used on the server side, whereas HTML, CSS, and JavaScript run on the client side."
    },
    {
      question: "What characterizes a Single Page Application (SPA)?",
      options: [
        "It is a website that only has one single HTML page and zero JavaScript",
        "It dynamically updates parts of the current page without reloading the entire page",
        "It must be hosted statically without any active database connection",
        "It restricts users to scrolling vertically indefinitely"
      ],
      correctIndex: 1,
      hint: "Think about React or Vue apps.",
      explanation: "A Single Page Application relies heavily on JavaScript to fetch data and refresh parts of the UI without performing full page reloads, providing a smooth app-like feel."
    },
    {
      question: "What is the primary role of a Web Server?",
      options: [
        "To allow users to type in domain names to view pages",
        "To store, process, and deliver web pages to clients (browsers) upon request",
        "To write the CSS styling for modern web pages automatically",
        "To guard personal computers against malware"
      ],
      correctIndex: 1,
      hint: "A server 'serves'.",
      explanation: "A Web Server is specifically built to accept incoming network requests (usually HTTP) from clients and return the appropriate web files or data."
    },
    {
      question: "In Web Security, what does HTTPS do differently than HTTP?",
      options: [
        "It makes page loading exponentially faster",
        "It provides encryption using SSL/TLS protocols to secure data in transit",
        "It restricts the page to only be viewed on mobile devices",
        "It removes the need for user passwords altogether"
      ],
      correctIndex: 1,
      hint: "The 'S' stands for Secure.",
      explanation: "HTTPS employs encryption (SSL/TLS) to ensure that the data transmitted between the browser and the web server cannot be intercepted or read by attackers."
    }
  ]
};

export default quiz;
