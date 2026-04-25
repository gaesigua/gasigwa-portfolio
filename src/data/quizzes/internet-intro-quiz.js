const quiz = {
  id: "internet-intro-quiz",
  title: "Introduction to the Internet",
  questions: [
    {
      question: "Which of the following best defines the Internet?",
      options: [
        "A single global computer that stores all websites",
        "A network of networks sharing common addressing mechanisms and protocols",
        "A software application used to view webpages",
        "A private connection between an office and a home"
      ],
      correctIndex: 1,
      hint: "It means 'interconnected network'.",
      explanation: "The Internet is a massive network of interconnected computer networks worldwide, utilizing standardized protocols to communicate."
    },
    {
      question: "Which medium is typically NOT considered a wired data transmission medium?",
      options: [
        "Coaxial cable",
        "Fiber optic cable",
        "Twisted-pair cable",
        "Satellite communication"
      ],
      correctIndex: 3,
      hint: "Look for transmission through the air or space.",
      explanation: "Satellite communication is a type of wireless medium, operating without physical wires unlike coaxial or fiber optic cables."
    },
    {
      question: "What happens to a file when it is transmitted over the Internet?",
      options: [
        "It is sent as a single contiguous continuous block",
        "It is permanently stored on every router in path",
        "It is divided into smaller packets before transmission",
        "It is converted directly into electrical sound waves"
      ],
      correctIndex: 2,
      hint: "Think about packet switching.",
      explanation: "Data is broken down into smaller packets equipped with destination headers so they can traverse the network quickly and be reassembled upon arrival."
    },
    {
      question: "What is the primary function of the Internet Backbone?",
      options: [
        "It provides the user interface for browser applications",
        "It connects different networks and ISPs via high-capacity communication links",
        "It provides the encryption logic for secure websites",
        "It physically manufactures the laptops and phones used today"
      ],
      correctIndex: 1,
      hint: "Think about a highway connecting cities.",
      explanation: "The internet backbone is the central core connecting multiple networks and ISPs via massive high-capacity cables to distribute traffic efficiently globally."
    },
    {
      question: "Which of the following is an example of an Internet Exchange Point (IXP)?",
      options: [
        "Your home Wi-Fi router",
        "A location where different networks connect and share data without solely relying on tier 1 providers",
        "A mobile application used to check internet speed",
        "The standard protocol for emails"
      ],
      correctIndex: 1,
      hint: "It involves 'Exchange' of data.",
      explanation: "Internet Exchange Points (IXPs) are physical locations where different networks and ISPs connect to trade data flows quickly."
    }
  ]
};

export default quiz;
