const dsInformationTechnologies = {
  id: "ds-information-technologies",
  title: "Information Technologies Quiz",
  questions: [
    {
      question: "What is Information Technology (IT)?",
      options: [
        "The study of electrical circuits and hardware design",
        "The use of computers, networks, storage, and software to manage, process, and distribute information",
        "A programming language for web development",
        "The science of manufacturing computer chips"
      ],
      correctIndex: 1,
      hint: "IT is broader than just computers.",
      explanation: "IT encompasses the use of computers, networks, storage devices, and software to collect, store, process, and disseminate information for individuals and organizations."
    },
    {
      question: "Which of these is the 'Hardware' component of IT?",
      options: [
        "The Windows operating system",
        "A Python script for data analysis",
        "A database management system",
        "A server storing employee data"
      ],
      correctIndex: 3,
      hint: "Hardware = physical devices you can touch.",
      explanation: "Hardware refers to physical devices: computers, servers, monitors, keyboards, printers. A server storing employee data is a concrete example of hardware in an IT system."
    },
    {
      question: "What is the difference between system software and application software?",
      options: [
        "System software is faster; application software is slower",
        "System software manages hardware and provides environment (e.g., OS); application software performs user tasks (e.g., Word, Excel)",
        "Application software requires internet; system software does not",
        "System software is written in C; application software is written in Python"
      ],
      correctIndex: 1,
      hint: "One runs the machine; the other runs on top of it.",
      explanation: "System software (OS, device drivers) manages hardware and provides a platform for other software. Application software (Word, databases, browsers) performs specific user-facing tasks on top of the OS."
    },
    {
      question: "What does LAN stand for?",
      options: [
        "Large Area Network",
        "Linked Application Node",
        "Local Area Network",
        "Logical Access Node"
      ],
      correctIndex: 2,
      hint: "It connects devices in a small area like an office.",
      explanation: "LAN = Local Area Network. It connects computers and devices within a limited area (office, school, home). A WAN (Wide Area Network) covers larger geographic areas — including the Internet."
    },
    {
      question: "Which IT component refers to raw facts and figures that are processed into meaningful information?",
      options: ["Networks", "Hardware", "Software", "Data"],
      correctIndex: 3,
      hint: "Numbers and text before they are interpreted.",
      explanation: "Data refers to raw, unprocessed facts (numbers, text, images). When organized and interpreted meaningfully, data becomes information. Storing and processing data is a core function of IT systems."
    },
    {
      question: "Which Python module allows a program to get CPU and OS information?",
      options: ["os.cpu", "sys", "platform", "psutil.hardware"],
      correctIndex: 2,
      hint: "It tells you about the 'platform' (OS, architecture, processor).",
      explanation: "The 'platform' module provides platform-specific information: platform.processor() returns CPU info, platform.system() returns the OS name, platform.release() returns the OS version."
    },
    {
      question: "An employee login system that prints 'Welcome [name], you are logged in as [role]' is an example of which IT component interacting with the system?",
      options: ["Hardware", "Networks", "People", "Data"],
      correctIndex: 2,
      hint: "It involves user interaction.",
      explanation: "The 'People' component of IT includes end-users interacting with systems. A login system that welcomes users by name and role directly represents this human-IT interaction."
    }
  ]
};

export default dsInformationTechnologies;
