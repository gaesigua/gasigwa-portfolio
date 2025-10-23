export const lessons = [
  {
    slug: "digital-electronics-and-electrical-circuits",
    title: "Digital Electronics and Electrical Circuits",
    summary:
      "before you dive deep into programming, first learn core concepts of digital electronics and electrical circuits.",
    tags: "digital systems, electric circuits",
    logo: "/digital-electronics-logo.png",
    sections: [
      {
        slug: "digital-electronics",
        title: "Digital Electronics",
        summary:
          "Introduction to digital systems, number systems, code conversion, binary addition and subtraction, and more",
        pages: [
          {
            slug: "introduction-to-digital-electronics",
            title: "Introduction to Digital Electronics",
            summary:
              "Digital Electronics is the field of electronics that deals with electronic circuits that operate using discrete, typically two, voltage levels.",
          },
          {
            slug: "analog-vs-digital-systems",
            title: "Analog vs Digital Systems",
            summary:
              "Understanding the differences between analog and digital systems, including their advantages and disadvantages.",
          },
          {
            slug: "evolution-of-digital-electronics",
            title: "Evolution of Digital Electronics",
            summary:
              "A brief history of the development and advancements in digital electronics over the years.",
          },
          {
            slug: "advantages-of-digital-technology",
            title: "Advantages of Digital Technology",
            summary:
              "Exploring the benefits of digital technology, such as noise immunity, data compression, and ease of storage and transmission.",
          },
          {
            slug: "number-systems-introduction",
            title: "Number Systems",
            summary:
              "Understanding different number systems used in digital electronics, including binary, decimal, octal, and hexadecimal.",
          },
          {
            slug: "number-systems-types-decimal",
            title: "Types of Number Systems: Decimal",
            summary:
              "Detailed overview of the decimal (base-10) number system.",
          },
          {
            slug: "number-systems-types-binary",
            title: "Types of Number Systems: Binary",
            summary: "Detailed overview of the binary (base-2) number system.",
          },
          {
            slug: "number-systems-types-octal",
            title: "Types of Number Systems: Octal",
            summary: "Detailed overview of the octal (base-8) number system.",
          },
          {
            slug: "number-systems-types-hexadecimal",
            title: "Types of Number Systems: Hexadecimal",
            summary:
              "Detailed overview of the hexadecimal (base-16) number system.",
          },
          {
            slug: "number-systems-conversions-from-decimal",
            title: "Converting FROM DECIMAL",
            summary:
              "Techniques for converting decimal numbers to binary, octal, and hexadecimal systems.",
          },
          {
            slug: "number-systems-conversions-from-binary",
            title: "Converting FROM BINARY",
            summary:
              "Techniques for converting binary numbers to decimal, octal, and hexadecimal systems.",
          },
          {
            slug: "number-systems-conversions-from-octal",
            title: "Converting FROM OCTAL",
            summary:
              "Techniques for converting octal numbers to decimal, binary, and hexadecimal systems.",
          },
          {
            slug: "number-systems-conversions-from-hexadecimal",
            title: "Converting FROM HEXADECIMAL",
            summary:
              "Techniques for converting hexadecimal numbers to decimal, binary, and octal systems.",
          },
          {
            slug: "number-systems-conversions-reference",
            title: "Conversion Reference Guide",
            summary:
              "A quick reference guide for converting numbers between different bases.",
          },
          {
            slug: "number-systems-conversions-exercises",
            title: "Conversion Exercises",
            summary:
              "Practice exercises to reinforce your understanding of number system conversions.",
          },
          {
            slug: "number-systems-conversions-binary-coded-decimal-basics",
            title: "Binary Coded Decimal (BCD) Basics",
            summary: "Understanding the BCD Encoding and Conversions.",
          },
          {
            slug: "number-systems-conversions-binary-coded-decimal-encoding-table",
            title: "BCD Digit Encoding Table",
            summary:
              "A table showing the BCD representation of decimal digits 0-9.",
          },
          // {
          //   slug: "number-systems-conversions-binary-coded-decimal-conversions-decimal-to-bcd",
          //   title: "BCD Conversions: Decimal to BCD",
          //   summary:
          //     "Techniques for converting decimal numbers to Binary Coded Decimal (BCD).",
          // },
          // {
          //   slug: "number-systems-conversions-binary-coded-decimal-conversions-bcd-to-decimal",
          //   title: "BCD Conversions: BCD to Decimal",
          //   summary:
          //     "Techniques for converting Binary Coded Decimal (BCD) numbers to decimal.",
          // },
          {
            slug: "logic-gates-introduction",
            title: "Logic Gates Introduction",
            summary:
              "Basic building blocks of digital circuits that perform logical operations.",
          },
          {
            slug: "logic-gates-basic-gates",
            title: "Basic Logic Gates",
            summary:
              "Introduction to basic logic gates: AND, OR, NOT, NAND, NOR, XOR, and XNOR.",
          },
          {
            slug: "combinational-circuits",
            title: "Combinational Circuits",
            summary:
              "Circuits whose output is a pure function of the present input only.",
          },
          {
            slug: "code-conversion",
            title: "Code Conversion",
            summary:
              "Techniques for converting numbers between different bases.",
          },
          {
            slug: "binary-arithmetic",
            title: "Binary Arithmetic",
            summary:
              "Performing addition and subtraction using binary numbers.",
          },
          {
            slug: "sequential-circuits",
            title: "Sequential Circuits",
            summary:
              "Circuits whose output depends on the present input and the past sequence of inputs.",
          },
          {
            slug: "flip-flops",
            title: "Flip-Flops",
            summary: "Basic memory elements in sequential logic circuits.",
          },
          {
            slug: "counters",
            title: "Counters",
            summary:
              "Sequential circuits that go through a predetermined sequence of states.",
          },
          {
            slug: "shift-registers",
            title: "Shift Registers",
            summary:
              "Registers that can shift their stored data in a specified direction.",
          },
          {
            slug: "memory-devices",
            title: "Memory Devices",
            summary: "Components used to store data in digital systems.",
          },
          {
            slug: "digital-to-analog-conversion",
            title: "Digital to Analog Conversion",
            summary:
              "Process of converting digital signals into analog signals.",
          },
          {
            slug: "analog-to-digital-conversion",
            title: "Analog to Digital Conversion",
            summary:
              "Process of converting analog signals into digital signals.",
          },
        ],
      },
      {
        slug: "electrical-circuits",
        title: "Electrical Circuits",
        summary:
          "Introduction to electrical circuits, understanding electric current, Ohm's law, types of current, electric charge, and more ",
        pages: [
          {
            slug: "introduction-to-electrical-circuits",
            title: "Introduction to Electrical Circuits",
            summary:
              "An electrical circuit is a path in which electrons from a voltage or current source flow.",
          },
          {
            slug: "electrical-circuits-what-is-electricity",
            title: "What Is Electricity",
            summary:
              "electricity is a form of energy resulting from the presence and flow of electric charge",
          },
          {
            slug: "electrical-circuits-what-is-electric-charge",
            title: "What Is Electric Charge",
            summary:
               "electric charge is a fundamental property of matter",
          },
          {
            slug: "electrical-circuits-conductors-vs-insulators",
            title: "Conductors vs Insulators",
            summary:
               "materials that allow electric charge to flow easily and materials that resist the flow of electric charge",
          },
          {
            slug: "electrical-circuits-semiconductors",
            title: "Semiconductors",
            summary:
                "materials with conductivity between conductors and insulators",
          },
          {
            slug: "electrical-circuits-what-is-electric-circuit",
            title: "Electric Circuit",
            summary:
               "An electric circuit is an interconnection of electrical elements linked together in a closed path so that an electric current may flow continuously.",
          },
          {
            slug: "electrical-circuits-direct-current-vs-alternating-current",
            title: "Direct Current (DC) vs Alternating Current (AC)",
            summary:
               "Understanding the differences between direct current (DC) and alternating current (AC).",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-current",
            title: "The Four Fundamental Quantities: CURRENT",
            summary: 
                 "overview on electrical current",
          },
          {
            slug: "electrical-circuits-calculations-current",
            title: "Electrical Circuits Calculations: CURRENT",
            summary:
                   "understanding electrical circuits calculations of current",
          },
          {
            slug: "electrical-circuits-calculations-current-examples",
            title: "Electric Current Examples",
            summary:
                   "example problems on electrical circuits calculations of current",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-resistance",
            title: "The Four Fundamental Quantities: RESISTANCE",
            summary: 
                 "overview on electrical resistance",
          },
          {
            slug: "electrical-circuits-calculations-resistance",
            title: "Electrical Circuits Calculations: RESISTANCE",
            summary:
                  "understanding electrical circuits calculations of resistance",
          },
          {
            slug: "electrical-circuits-calculations-resistance-examples",
            title: "Electric Resistance Examples",
            summary:
                  "example problems on electrical circuits calculations of resistance",
          },
          {
            slug: "electrical-circuits-calculations-resistors-series-and-parallel",
            title: "Resistors in Series and Parallel",
            summary:
                  "understanding how to calculate equivalent resistance for resistors connected in series and parallel configurations",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-voltage",
            title: "The Four Fundamental Quantities: VOLTAGE",
            summary: 
                 "overview on electrical voltage",
          },
          {
            slug: "electrical-circuits-calculations-voltage",
            title: "Electrical Circuits Calculations: VOLTAGE",
            summary:
                 "understanding electrical circuits calculations of voltage",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-power",
            title: "The Four Fundamental Quantities: POWER",
            summary: 
                 "overview on electrical power",
          },
          {
            slug: "electrical-circuits-calculations-power",
            title: "Electrical Circuits Calculations: POWER",
            summary: 
                 "understanding electrical circuits calculations of power",
          },
          {
            slug: "electrical-circuits-circuit-symbols",
            title: "Circuit Symbols",
            summary:
                 "understanding circuit diagrams requires knowing standard symbols"
          },
          {
            slug: "electrical-circuits-measurements",
            title: "Measurements",
            summary:
                "various electrical quantities can be measured using different instruments",
          },
          {
            slug: "electrical-circuits-practice-problems",
            title: "Practice Problems",
            summary:
                "solve practice problems on electrical circuits",
          },
          {
            slug: "electrical-circuits-definitions",
            title: "Definitions",
            summary:
                "important definitions in electrical circuits",
          },
          {
            slug: "electric-current",
            title: "Electric Current",
            summary:
              "The flow of electric charge, typically measured in amperes (A).",
          },
          {
            slug: "ohms-law",
            title: "Ohm's Law",
            summary:
              "A fundamental principle that relates voltage (V), current (I), and resistance (R) in an electrical circuit.",
          },
          {
            slug: "types-of-current",
            title: "Types of Current",
            summary:
              "Understanding the differences between direct current (DC) and alternating current (AC).",
          },
          {
            slug: "electric-charge",
            title: "Electric Charge",
            summary:
              "A property of matter that causes it to experience a force when placed in an electromagnetic field.",
          },
          {
            slug: "resistance",
            title: "Resistance",
            summary:
              "A measure of the opposition to the flow of electric current, measured in ohms (Ω).",
          },
          {
            slug: "capacitance",
            title: "Capacitance",
            summary:
              "The ability of a component or circuit to store and release electrical energy in the form of an electric field.",
          },
          {
            slug: "inductance",
            title: "Inductance",
            summary:
              "The property of a conductor by which a change in current flowing through it induces an electromotive force (voltage) in both the conductor itself and in any nearby conductors.",
          },
          {
            slug: "circuit-elements",
            title: "Circuit Elements",
            summary:
              "Basic components used in electrical circuits, such as resistors, capacitors, inductors, and power sources.",
          },
          {
            slug: "series-and-parallel-circuits",
            title: "Series and Parallel Circuits",
            summary:
              "Understanding how components are connected in series or parallel configurations.",
          },
          {
            slug: "kirchhoffs-laws",
            title: "Kirchhoff's Laws",
            summary:
              "Two fundamental laws that deal with the conservation of charge and energy in electrical circuits.",
          },
        ],
      },
    ],
  },
  {
    slug: "effective-communication",
    title: "Effective Communication",
    summary:
      "learn to communicate appropriately with your peers, colleagues, friends, and family and build better relationships with your team and the world around you.",
    tags: "communication skills",
    logo: "/effective-communication-logo.png",
    sections: [
      {
        slug: "communication-skills",
        title: "Communication Skills",
        summary:
          "Learn the fundamentals of effective communication, including its definition, objectives, elements, cycle, qualities, and barriers.",
        pages: [
          {
            slug: "introduction-to-communication",
            title: "Introduction to Communication",
            summary:
              "Communication is the process of exchanging information, ideas, thoughts, and feelings between individuals or groups through verbal, non-verbal, or written means.",
          },
          {
            slug: "administrative-communication",
            title: "Administrative Communication",
            summary:
              "Administrative communication is a process involving the transmission and accurate replication of ideas, ensured by feedback, for the purpose of eliciting actions which will accomplish organizational goals.",
          },
          {
            slug: "main-aspects-of-communication",
            title: "Main Aspects of Communication",
            summary:
              "The main aspects of communication include the sender, message, medium, receiver, feedback, and context.",
          },
          {
            slug: "importance-of-communication",
            title: "Importance of Communication",
            summary:
              "Effective communication is essential for building relationships, resolving conflicts, making decisions, and achieving goals in both personal and professional settings.",    
          },
          {
            slug: "definition-of-communication",
            title: "Definition of Communication",
            summary:
              "Communication is the process of transmitting information and understanding from one person to another.",
          },
          {
            slug: "objectives-of-communication",
            title: "Objectives of Communication",
            summary:
              "The main objectives of communication are to inform, persuade, motivate, and build relationships.",
          },
          {
            slug: "elements-of-communication",
            title: "Elements of Communication",
            summary:
              "The key elements of communication include the sender, message, medium, receiver, feedback, and context.",
          },
          {
            slug: "the-communication-cycle",
            title: "The Communication Cycle",
            summary:
              "The communication cycle consists of the following stages: idea generation, encoding, transmission, decoding, and feedback.",
          },
          {
            slug: "qualities-of-effective-communication-the-6-c",
            title: "Qualities of Effective Communication: The 6 C's",
            summary:
              "The 6 C's of effective communication are clarity, conciseness, coherence, consistency, courtesy, and credibility.",
          },
          {
            slug: "barriers-to-communication",
            title: "Barriers to Communication",
            summary:
              "Common barriers to effective communication include physical barriers, language barriers, emotional barriers, cultural barriers, and perceptual barriers.",
          },
        ],
      },
    ],
  },
  {
    slug: "computer-basics",
    title: "Computer Basics",
    summary:
      "start your programming journey with computer basics, understand foundational concepts of computer hardware, software, electronic devices, operating systems, and more.",
    tags: "computer parts, internet basics",
    logo: "/computer-basics-logo.png",
    sections: [
      {
        slug: "what-is-a-computer",
        title: "What is a Computer?",
        summary:
          "Learn the definition of a computer and its basic functions: storing, retrieving, and processing data.",
      },
      {
        slug: "hardware-and-software",
        title: "Hardware and Software",
        summary:
          "Discover the difference between the physical components (hardware) and the instructions that run on them (software).",
      },
      {
        slug: "operating-systems",
        title: "Operating Systems",
        summary:
          "An introduction to the most important software on a computer, which manages all other programs.",
      },
    ],
  },
  {
    slug: "touch-typing",
    title: "Touch Typing",
    summary:
      "learn to touch type with all your fingers and become a typing pro and write code faster.",
    tags: "typing tests, typing lessons, games",
    logo: "/touch-typing-logo.png",
  },
  {
    slug: "english-for-programmers",
    title: "English for Programmers",
    summary:
      "learn the english language with a focus on programming and technology-related vocabulary and concepts.",
    tags: "grammar, vocabulary, reading, writing",
    logo: "/english-for-programmers-logo.png",
    sections: [
      {
        slug: "level-a1",
        title: "Level A1",
        summary:
          "Beginner level focusing on basic phrases and expressions related to programming.",
        pages: [
          {
            slug: "introduction-at-the-office",
            title: "Introduction at the Office",
            summary:
              "Learn how to introduce yourself and others in a professional setting.",
          },
          {
            slug: "your-first-online-meeting",
            title: "Your First Online Meeting",
            summary:
              "Learn how to introduce yourself and others, and get comfortable with the vocabulary and phrases used in virtual meetings.",
          },
          {
            slug: "daily-routine",
            title: "Daily Routine",
            summary:
              "Learn to describe your daily work routine and common tasks.",
          },
          {
            slug: "describing-your-job",
            title: "Describing Your Job",
            summary:
              "Learn how to talk about your job responsibilities and tasks.",
          },
          {
            slug: "programming-languages",
            title: "Programming Languages",
            summary:
              "Learn vocabulary related to popular programming languages.",
          },
          {
            slug: "basic-coding-terms",
            title: "Basic Coding Terms",
            summary: "Familiarize yourself with essential coding terminology.",
          },
          {
            slug: "common-software-tools",
            title: "Common Software Tools",
            summary:
              "Learn about frequently used software tools in programming.",
          },
          {
            slug: "basic-debugging-phrases",
            title: "Basic Debugging Phrases",
            summary: "Understand common phrases used in debugging code.",
          },
          {
            slug: "basic-email-writing",
            title: "Basic Email Writing",
            summary:
              "Understand the structure and common phrases used in professional emails.",
          },
        ],
      },
      {
        slug: "level-a2",
        title: "Level A2",
        summary:
          "Elementary level focusing on everyday communication and work-related scenarios.",
        pages: [
          {
            slug: "scheduling-meetings",
            title: "Scheduling Meetings",
            summary:
              "Learn how to arrange and confirm meetings professionally.",
          },
          {
            slug: "collaborating-with-teams",
            title: "Collaborating with Teams",
            summary:
              "Understand phrases and vocabulary for effective teamwork.",
          },
          {
            slug: "describing-projects",
            title: "Describing Projects",
            summary:
              "Learn to talk about project goals, timelines, and progress.",
          },
          {
            slug: "giving-and-receiving-feedback",
            title: "Giving and Receiving Feedback",
            summary: "Learn how to provide and accept constructive feedback.",
          },
          {
            slug: "technical-documentation",
            title: "Technical Documentation",
            summary:
              "Understand the structure and common terms used in technical documents.",
          },
          {
            slug: "advanced-coding-terms",
            title: "Advanced Coding Terms",
            summary:
              "Expand your vocabulary with more complex coding terminology.",
          },
          {
            slug: "software-development-lifecycle",
            title: "Software Development Lifecycle",
            summary:
              "Learn about the stages of software development and related vocabulary.",
          },
          {
            slug: "version-control-systems",
            title: "Version Control Systems",
            summary:
              "Familiarize yourself with terms related to version control and collaboration.",
          },
          {
            slug: "intermediate-email-writing",
            title: "Intermediate Email Writing",
            summary:
              "Learn to write more complex and detailed professional emails.",
          },
        ],
      },
      {
        slug: "level-b1",
        title: "Level B1",
        summary:
          "Intermediate level focusing on more complex work scenarios and technical topics related to programming.",
        pages: [
          {
            slug: "problem-solving-at-work",
            title: "Problem Solving at Work",
            summary:
              "Learn phrases and strategies for addressing challenges in the workplace.",
          },
          {
            slug: "presenting-ideas",
            title: "Presenting Ideas",
            summary:
              "Understand how to effectively present your ideas and projects.",
          },
          {
            slug: "negotiating-deals",
            title: "Negotiating Deals",
            summary:
              "Learn vocabulary and phrases for negotiating terms and agreements.",
          },
          {
            slug: "handling-conflicts",
            title: "Handling Conflicts",
            summary:
              "Learn strategies and phrases for resolving workplace conflicts.",
          },
          {
            slug: "agile-methodologies",
            title: "Agile Methodologies",
            summary:
              "Understand the principles and vocabulary related to Agile development.",
          },
          {
            slug: "design-patterns",
            title: "Design Patterns",
            summary:
              "Learn about common design patterns and their terminology.",
          },
          {
            slug: "database-management",
            title: "Database Management",
            summary:
              "Familiarize yourself with terms related to database systems and management.",
          },
          {
            slug: "api-development",
            title: "API Development",
            summary:
              "Understand the vocabulary and concepts related to building and using APIs.",
          },
          {
            slug: "advanced-email-writing",
            title: "Advanced Email Writing",
            summary:
              "Learn to write clear, concise, and professional emails for various situations.",
          },
        ],
      },
      {
        slug: "level-b2",
        title: "Level B2",
        summary:
          "Upper-intermediate level focusing on advanced work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "leading-teams",
            title: "Leading Teams",
            summary:
              "Learn vocabulary and phrases for effective team leadership and management.",
          },
          {
            slug: "strategic-planning",
            title: "Strategic Planning",
            summary:
              "Understand how to discuss and implement strategic plans in a business context.",
          },
          {
            slug: "managing-projects",
            title: "Managing Projects",
            summary:
              "Learn terms and phrases related to project management and execution.",
          },
          {
            slug: "business-negotiations",
            title: "Business Negotiations",
            summary:
              "Learn advanced vocabulary and strategies for high-stakes negotiations.",
          },
          {
            slug: "cloud-computing",
            title: "Cloud Computing",
            summary:
              "Understand the concepts and terminology related to cloud services and architecture.",
          },
          {
            slug: "cybersecurity",
            title: "Cybersecurity",
            summary: "Learn about key cybersecurity concepts and vocabulary.",
          },
          {
            slug: "machine-learning",
            title: "Machine Learning",
            summary:
              "Familiarize yourself with terms and concepts in machine learning and AI.",
          },
          {
            slug: "big-data",
            title: "Big Data",
            summary:
              "Understand the vocabulary and concepts related to big data technologies and analysis.",
          },
          {
            slug: "professional-email-writing",
            title: "Professional Email Writing",
            summary:
              "Master the art of writing polished and effective professional emails.",
          },
        ],
      },
      {
        slug: "level-c1",
        title: "Level C1",
        summary:
          "Advanced level focusing on complex work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "executive-communication",
            title: "Executive Communication",
            summary:
              "Learn how to communicate effectively with senior management and executives.",
          },
          {
            slug: "corporate-strategy",
            title: "Corporate Strategy",
            summary:
              "Understand how to discuss and implement corporate strategies.",
          },
          {
            slug: "financial-management",
            title: "Financial Management",
            summary:
              "Learn vocabulary and concepts related to managing finances in a business context.",
          },
          {
            slug: "global-business",
            title: "Global Business",
            summary:
              "Learn terms and phrases related to international business and trade.",
          },
          {
            slug: "blockchain-technology",
            title: "Blockchain Technology",
            summary:
              "Understand the principles and terminology of blockchain and cryptocurrencies.",
          },
          {
            slug: "internet-of-things",
            title: "Internet of Things",
            summary: "Learn about IoT concepts and related vocabulary.",
          },
          {
            slug: "quantum-computing",
            title: "Quantum Computing",
            summary:
              "Familiarize yourself with the basics and terminology of quantum computing.",
          },
          {
            slug: "advanced-software-architecture",
            title: "Advanced Software Architecture",
            summary:
              "Understand complex software architecture patterns and their terminology.",
          },
          {
            slug: "executive-email-writing",
            title: "Executive Email Writing",
            summary:
              "Master the art of writing high-level professional emails for executive communication.",
          },
        ],
      },
      {
        slug: "level-c2",
        title: "Level C2",
        summary:
          "Proficiency level focusing on mastering work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "thought-leadership",
            title: "Thought Leadership",
            summary:
              "Learn how to establish yourself as a thought leader in your industry.",
          },
          {
            slug: "innovation-management",
            title: "Innovation Management",
            summary:
              "Understand how to manage and foster innovation within an organization.",
          },
          {
            slug: "organizational-change",
            title: "Organizational Change",
            summary:
              "Learn vocabulary and strategies for managing change in a business context.",
          },
          {
            slug: "sustainability-in-business",
            title: "Sustainability in Business",
            summary:
              "Learn about sustainable business practices and related terminology.",
          },
          {
            slug: "advanced-cybersecurity",
            title: "Advanced Cybersecurity",
            summary:
              "Deepen your understanding of cybersecurity concepts and advanced terminology.",
          },
          {
            slug: "artificial-intelligence",
            title: "Artificial Intelligence",
            summary:
              "Explore advanced AI concepts and their associated vocabulary.",
          },
          {
            slug: "data-science",
            title: "Data Science",
            summary:
              "Understand complex data science techniques and related terminology.",
          },
          {
            slug: "software-innovation",
            title: "Software Innovation",
            summary:
              "Learn about cutting-edge software development practices and their terminology.",
          },
          {
            slug: "mastering-email-writing",
            title: "Mastering Email Writing",
            summary:
              "Perfect your email writing skills for all professional scenarios.",
          },
        ],
      },
    ],
  },
  {
    slug: "german-for-programmers",
    title: "German for Programmers",
    summary:
      "learn the german language with a focus on programming and technology-related vocabulary and concepts.",
    tags: "grammar, vocabulary, reading, writing",
    logo: "/german-for-programmers-logo.png",
    sections: [
      {
        slug: "level-a1",
        title: "Level A1",
        summary:
          "Beginner level focusing on basic phrases and expressions related to programming.",
        pages: [
          {
            slug: "introduction-at-the-office",
            title: "Introduction at the Office",
            summary:
              "Learn how to introduce yourself and others in a professional setting.",
          },
          {
            slug: "your-first-online-meeting",
            title: "Your First Online Meeting",
            summary:
              "Learn how to introduce yourself and others, and get comfortable with the vocabulary and phrases used in virtual meetings.",
          },
          {
            slug: "daily-routine",
            title: "Daily Routine",
            summary:
              "Learn to describe your daily work routine and common tasks.",
          },
          {
            slug: "describing-your-job",
            title: "Describing Your Job",
            summary:
              "Learn how to talk about your job responsibilities and tasks.",
          },
          {
            slug: "programming-languages",
            title: "Programming Languages",
            summary:
              "Learn vocabulary related to popular programming languages.",
          },
          {
            slug: "basic-coding-terms",
            title: "Basic Coding Terms",
            summary: "Familiarize yourself with essential coding terminology.",
          },
          {
            slug: "common-software-tools",
            title: "Common Software Tools",
            summary:
              "Learn about frequently used software tools in programming.",
          },
          {
            slug: "basic-debugging-phrases",
            title: "Basic Debugging Phrases",
            summary: "Understand common phrases used in debugging code.",
          },
          {
            slug: "basic-email-writing",
            title: "Basic Email Writing",
            summary:
              "Understand the structure and common phrases used in professional emails.",
          },
        ],
      },
      {
        slug: "level-a2",
        title: "Level A2",
        summary:
          "Elementary level focusing on everyday communication and work-related scenarios.",
        pages: [
          {
            slug: "scheduling-meetings",
            title: "Scheduling Meetings",
            summary:
              "Learn how to arrange and confirm meetings professionally.",
          },
          {
            slug: "collaborating-with-teams",
            title: "Collaborating with Teams",
            summary:
              "Understand phrases and vocabulary for effective teamwork.",
          },
          {
            slug: "describing-projects",
            title: "Describing Projects",
            summary:
              "Learn to talk about project goals, timelines, and progress.",
          },
          {
            slug: "giving-and-receiving-feedback",
            title: "Giving and Receiving Feedback",
            summary: "Learn how to provide and accept constructive feedback.",
          },
          {
            slug: "technical-documentation",
            title: "Technical Documentation",
            summary:
              "Understand the structure and common terms used in technical documents.",
          },
          {
            slug: "advanced-coding-terms",
            title: "Advanced Coding Terms",
            summary:
              "Expand your vocabulary with more complex coding terminology.",
          },
          {
            slug: "software-development-lifecycle",
            title: "Software Development Lifecycle",
            summary:
              "Learn about the stages of software development and related vocabulary.",
          },
          {
            slug: "version-control-systems",
            title: "Version Control Systems",
            summary:
              "Familiarize yourself with terms related to version control and collaboration.",
          },
          {
            slug: "intermediate-email-writing",
            title: "Intermediate Email Writing",
            summary:
              "Learn to write more complex and detailed professional emails.",
          },
        ],
      },
      {
        slug: "level-b1",
        title: "Level B1",
        summary:
          "Intermediate level focusing on more complex work scenarios and technical topics related to programming.",
        pages: [
          {
            slug: "problem-solving-at-work",
            title: "Problem Solving at Work",
            summary:
              "Learn phrases and strategies for addressing challenges in the workplace.",
          },
          {
            slug: "presenting-ideas",
            title: "Presenting Ideas",
            summary:
              "Understand how to effectively present your ideas and projects.",
          },
          {
            slug: "negotiating-deals",
            title: "Negotiating Deals",
            summary:
              "Learn vocabulary and phrases for negotiating terms and agreements.",
          },
          {
            slug: "handling-conflicts",
            title: "Handling Conflicts",
            summary:
              "Learn strategies and phrases for resolving workplace conflicts.",
          },
          {
            slug: "agile-methodologies",
            title: "Agile Methodologies",
            summary:
              "Understand the principles and vocabulary related to Agile development.",
          },
          {
            slug: "design-patterns",
            title: "Design Patterns",
            summary:
              "Learn about common design patterns and their terminology.",
          },
          {
            slug: "database-management",
            title: "Database Management",
            summary:
              "Familiarize yourself with terms related to database systems and management.",
          },
          {
            slug: "api-development",
            title: "API Development",
            summary:
              "Understand the vocabulary and concepts related to building and using APIs.",
          },
          {
            slug: "advanced-email-writing",
            title: "Advanced Email Writing",
            summary:
              "Learn to write clear, concise, and professional emails for various situations.",
          },
        ],
      },
      {
        slug: "level-b2",
        title: "Level B2",
        summary:
          "Upper-intermediate level focusing on advanced work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "leading-teams",
            title: "Leading Teams",
            summary:
              "Learn vocabulary and phrases for effective team leadership and management.",
          },
          {
            slug: "strategic-planning",
            title: "Strategic Planning",
            summary:
              "Understand how to discuss and implement strategic plans in a business context.",
          },
          {
            slug: "managing-projects",
            title: "Managing Projects",
            summary:
              "Learn terms and phrases related to project management and execution.",
          },
          {
            slug: "business-negotiations",
            title: "Business Negotiations",
            summary:
              "Learn advanced vocabulary and strategies for high-stakes negotiations.",
          },
          {
            slug: "cloud-computing",
            title: "Cloud Computing",
            summary:
              "Understand the concepts and terminology related to cloud services and architecture.",
          },
          {
            slug: "cybersecurity",
            title: "Cybersecurity",
            summary: "Learn about key cybersecurity concepts and vocabulary.",
          },
          {
            slug: "machine-learning",
            title: "Machine Learning",
            summary:
              "Familiarize yourself with terms and concepts in machine learning and AI.",
          },
          {
            slug: "big-data",
            title: "Big Data",
            summary:
              "Understand the vocabulary and concepts related to big data technologies and analysis.",
          },
          {
            slug: "professional-email-writing",
            title: "Professional Email Writing",
            summary:
              "Master the art of writing polished and effective professional emails.",
          },
        ],
      },
      {
        slug: "level-c1",
        title: "Level C1",
        summary:
          "Advanced level focusing on complex work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "executive-communication",
            title: "Executive Communication",
            summary:
              "Learn how to communicate effectively with senior management and executives.",
          },
          {
            slug: "corporate-strategy",
            title: "Corporate Strategy",
            summary:
              "Understand how to discuss and implement corporate strategies.",
          },
          {
            slug: "financial-management",
            title: "Financial Management",
            summary:
              "Learn vocabulary and concepts related to managing finances in a business context.",
          },
          {
            slug: "global-business",
            title: "Global Business",
            summary:
              "Learn terms and phrases related to international business and trade.",
          },
          {
            slug: "blockchain-technology",
            title: "Blockchain Technology",
            summary:
              "Understand the principles and terminology of blockchain and cryptocurrencies.",
          },
          {
            slug: "internet-of-things",
            title: "Internet of Things",
            summary: "Learn about IoT concepts and related vocabulary.",
          },
          {
            slug: "quantum-computing",
            title: "Quantum Computing",
            summary:
              "Familiarize yourself with the basics and terminology of quantum computing.",
          },
          {
            slug: "advanced-software-architecture",
            title: "Advanced Software Architecture",
            summary:
              "Understand complex software architecture patterns and their terminology.",
          },
          {
            slug: "executive-email-writing",
            title: "Executive Email Writing",
            summary:
              "Master the art of writing high-level professional emails for executive communication.",
          },
        ],
      },
      {
        slug: "level-c2",
        title: "Level C2",
        summary:
          "Proficiency level focusing on mastering work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "thought-leadership",
            title: "Thought Leadership",
            summary:
              "Learn how to establish yourself as a thought leader in your industry.",
          },
          {
            slug: "innovation-management",
            title: "Innovation Management",
            summary:
              "Understand how to manage and foster innovation within an organization.",
          },
          {
            slug: "organizational-change",
            title: "Organizational Change",
            summary:
              "Learn vocabulary and strategies for managing change in a business context.",
          },
          {
            slug: "sustainability-in-business",
            title: "Sustainability in Business",
            summary:
              "Learn about sustainable business practices and related terminology.",
          },
          {
            slug: "advanced-cybersecurity",
            title: "Advanced Cybersecurity",
            summary:
              "Deepen your understanding of cybersecurity concepts and advanced terminology.",
          },
          {
            slug: "artificial-intelligence",
            title: "Artificial Intelligence",
            summary:
              "Explore advanced AI concepts and their associated vocabulary.",
          },
          {
            slug: "data-science",
            title: "Data Science",
            summary:
              "Understand complex data science techniques and related terminology.",
          },
          {
            slug: "software-innovation",
            title: "Software Innovation",
            summary:
              "Learn about cutting-edge software development practices and their terminology.",
          },
          {
            slug: "mastering-email-writing",
            title: "Mastering Email Writing",
            summary:
              "Perfect your email writing skills for all professional scenarios.",
          },
        ],
      },
    ],
  },
  {
    slug: "html-fundamentals",
    title: "HTML Fundamentals",
    summary:
      "learn the basics of HyperText Markup Language (HTML), and build your first website.",
    tags: "html basics, webpages, tutorials",
    logo: "/html-logo.png",
  },
  {
    slug: "css-fundamentals",
    title: "CSS Fundamentals",
    summary:
      "learn the basics of cascading style sheets (css), and style your first html website.",
    tags: "css basics, css flexbox, css grid",
    logo: "/css-logo.png",
  },
  {
    slug: "java-programming-fundamentals",
    title: "Java Fundamentals",
    summary:
      "start your programming journey with Java, a powerful and versatile language. learn core concepts, object-oriented programming, and build your first applications.",
    tags: "java, springboot, tutorials",
    logo: "/java-logo.png",
  },
  {
    slug: "python-programming-fundamentals",
    title: "Python Fundamentals",
    summary:
      "dive into Python, a highly versatile language perfect for web development, data science, and automation. learn syntax, data structures, and foundational programming concepts.",
    tags: "python, beginners, scripting",
    logo: "/python-logo.png",
  },
  {
    slug: "mysql-fundamentals",
    title: "MySQL Fundamentals",
    summary:
      "we will explore the fundamentals of MySQL, a popular relational database management system. this section covers database design, SQL queries, data manipulation, and basic administration for effective data storage and retrieval.",
    tags: "mysql, sql, dbm",
    logo: "/mysql-logo.png",
  },
];
