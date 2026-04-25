const quiz = {
  id: "internet-protocols-quiz",
  title: "Internet Protocols and Service Providers",
  questions: [
    {
      question: "Which core Internet protocol ensures data is delivered reliably, completely, and in order?",
      options: [
        "UDP",
        "TCP",
        "IP",
        "ICMP"
      ],
      correctIndex: 1,
      hint: "It's connection-oriented and paired with IP.",
      explanation: "TCP (Transmission Control Protocol) is connection-oriented and ensures data is reliably delivered sequentially without errors."
    },
    {
      question: "What is the primary function of the Domain Name System (DNS)?",
      options: [
        "To encrypt emails in transit",
        "To manage physical routing cables",
        "To translate human-readable domain names into IP addresses",
        "To protect networks from malware infections"
      ],
      correctIndex: 2,
      hint: "It acts like the Internet's phonebook.",
      explanation: "DNS translates memorable domain names like google.com into the IP addresses needed by computers to identify one another."
    },
    {
      question: "In the TCP/IP model, which layer encompasses protocols like HTTP, FTP, and SMTP?",
      options: [
        "Network Access Layer",
        "Internet Layer",
        "Transport Layer",
        "Application Layer"
      ],
      correctIndex: 3,
      hint: "These protocols directly interact with user software applications.",
      explanation: "The Application Layer is the top layer where direct user interaction and high-level data generation occur using HTTP, FTP, SMTP, and more."
    },
    {
      question: "What equipment given by an ISP distributes the internet connection to multiple devices within your home?",
      options: [
        "Modem",
        "Router",
        "Switch",
        "ONT"
      ],
      correctIndex: 1,
      hint: "It 'routes' traffic locally.",
      explanation: "A Router takes the single internet connection from a modem and distributes it securely to various devices on your local network (LAN)."
    },
    {
      question: "Which of the following is an example of an Application Layer protocol strictly used to fetch/receive emails from a server?",
      options: [
        "SMTP",
        "FTP",
        "IMAP",
        "UDP"
      ],
      correctIndex: 2,
      hint: "SMTP is for sending, what is for retrieving?",
      explanation: "IMAP (and POP3) are protocols specifically designed to retrieve/access emails hosted on a remote mail server."
    }
  ]
};

export default quiz;
