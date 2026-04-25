const quiz = {
  id: "internet-security-quiz",
  title: "Internet Security",
  questions: [
    {
      question: "In the CIA Triad of Cyber Security, what does the 'I' stand for?",
      options: [
        "Internet",
        "Integration",
        "Integrity",
        "Isolation"
      ],
      correctIndex: 2,
      hint: "It implies data must not be tampered with.",
      explanation: "The CIA Triad stands for Confidentiality, Integrity, and Availability. Integrity ensures data remains accurate and unaltered."
    },
    {
      question: "Which type of malware locks a user's data and demands payment for the decryption key?",
      options: [
        "Spyware",
        "Trojan Horse",
        "Ransomware",
        "Worm"
      ],
      correctIndex: 2,
      hint: "The name implies demanding a ransom.",
      explanation: "Ransomware maliciously encrypts your files or entire hard drives and demands an untraceable cryptocurrency ransom to unlock them."
    },
    {
      question: "What kind of attack involves artificially overloading a system with traffic until it crashes?",
      options: [
        "Phishing",
        "SQL Injection",
        "Man-in-the-Middle",
        "Denial-of-Service (DoS)"
      ],
      correctIndex: 3,
      hint: "It denies service to legitimate users.",
      explanation: "A Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) abruptly overload servers, rendering them unresponsive."
    },
    {
      question: "What is 'Phishing' primarily used for?",
      options: [
        "Deceiving users into sharing sensitive information through fraudulent messages",
        "Cracking passwords using automated brute-force scripts",
        "Overheating a server by spamming it with bad software",
        "Bypassing firewalls mathematically"
      ],
      correctIndex: 0,
      hint: "They masquerade as legitimate entities.",
      explanation: "Phishing uses deceptive emails or messages that appear legitimate to trick individuals into divulging passwords or private financial data."
    },
    {
      question: "Which security tool creates a highly secure, encrypted communication tunnel over the public internet?",
      options: [
        "Antivirus Software",
        "Intrusion Detection System (IDS)",
        "Virtual Private Network (VPN)",
        "Firewall"
      ],
      correctIndex: 2,
      hint: "It masks your public IP address and tunnels your traffic.",
      explanation: "A Virtual Private Network (VPN) encrypts your data tunnel over open/public networks, keeping your communications entirely private."
    }
  ]
};

export default quiz;
