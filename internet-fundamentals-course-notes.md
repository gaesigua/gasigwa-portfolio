FUNDAMENTALS OF THE INTERNET

Summary of the content

⮚ Overview of web technology  
⮚ Understanding the internet and World Wide Web backbone
⮚ Internet protocols, Service providers
⮚ Addressing, domain naming and Registering a domain name.
⮚ Internet software and hardware  
⮚ Communication: email, chatting, chat group, newsgroups and video conferencing.  
⮚ Cyber security

Chapter 1: Introduction to the Internet

1.1. What is the Internet?

"The Internet is a network of computers that links many different types of computers all over the world.
It is a Network of networks sharing a common mechanism for addressing (identifying) computers, and a common set of
communication protocols.”
The term "internet" means "interconnected network." A network is a set of interconnected computer networks that utilize standardized protocols to communicate.
⮚ Interconnectedness − The internet is made up of many networks. Small local area networks (LANs) in homes and businesses
to worldwide networks controlled by ISPs, corporations, and governments are examples of these networks.
These networks are linked by routers, switches, and other networking devices.

1.2 Data transmission via internet

The data or information is transmitted over the computer network using a transmission medium; it can be a wired or
wireless medium.
In wired data transmission, the data is transmitted using some set of cables like coaxial cable, twisted-pair cable,
and fiber optic cable while in wireless communication data transmission; data is transmitted via cellular networks,
Wi-Fi, and satellite communication.

1.3 Architecture of the Internet

The internet's architecture allows devices worldwide to communicate and exchange data. Layers and components make up this intricate structure. The architecture of the Internet is a dynamic and ever evolving system; it is continually adapting to technological advancements and changing demands.
End Devices − End devices include PCs, cellphones, tablets, servers, IoT devices, etc. at the network edge. These devices produce and use data.
Network Infrastructure − Routers, switches, cables, fibre-optic lines, satellites, and wireless access points are all part of the network. Data travels between end devices via network infrastructure.
Protocols − Protocols regulate network data and how it is received. The modern Internet is based on the Internet Protocol Suite (TCP/IP).
Internet Service Providers (ISPs) − ISPs are firms that provide internet connection to customers, companies, and other organisations. They maintain the physical infrastructure and connections that allow people to access the internet.
Fig: Architecture of the Internet

1.4 How does the internet work?

The Internet is operational because it is comprised of a sophisticated network of interconnected networks that enable devices to communicate with one another on a global scale. Two main concepts are fundamental to the way the Internet functions − packets and protocols.
Packets
When data is transmitted over the Internet, it is first divided into smaller packets, which are then converted into bits.  
Different networking equipment, such as routers and switches, route packets to their intended destinations;
when the packets arrive at their destination, the receiving device reassembles them in the proper order before using or
displaying the data.
Packet switching is the transfer of small pieces of data across networks. Packets of data allow faster, more efficient
data transfer. User-sent files are often sent in smaller data packets over networks. A 3MB file will be broken into packets with packet headers that specify the origin IP address, destination IP address, number of packets, and sequence number.
Protocols
The Internet is based on a collection of standardised communication protocols known as the Internet Protocol Suite,
or TCP/IP (Transmission Control Protocol/Internet Protocol). This protocol stack ensures that data packets are
consistently and efficiently sent over the network. In addition to the basic protocol, there are some other protocols
for routing, testing, and encryption.

1.5. Backbone of the Internet

⮚The Internet provides the infrastructure (the roads) for digital communication.

⮚The Internet includes two main components:

Hardware: cables, routers, servers, satellites, cell towers
Protocols: rules for how data is sent (like IP and TCP)
The internet backbone is the central core of the internet that connects different networks and ISPs together.
It consists of high-capacity communication links and routers that enable large amounts of data to be transmitted
quickly and efficiently between different parts of the internet.

⮚Backbone Components:

High-capacity fiber optic cables: Undersea and underground cables that transmit data at very high speeds.
Networks Access Point (NAPs) i.e Core routers and switches: Direct internet traffic efficiently between different networks.
Tier 1 ISPs (Internet Service Providers): Companies like AT&T, CenturyLink, NTT, Tata Communications that own and operate major portions of the internet backbone. Internet Exchange Points (IXPs): Places where different networks connect and share data. ⮚Examples:
Undersea cables between continents like FASTER, SEA-ME-WE, or MAREA carry web data across oceans.
When you access a website hosted in another country, your request travels over this backbone.

Chapter 2. Web Basics
2.1 Introduction

World Wide Web (WWW): A service that operates over the internet, consisting of web pages accessed via browsers.
Web Browser: A software application (e.g., Chrome, Firefox, Safari) used to access web pages.
Web Server: A system that stores, processes, and delivers web pages to clients.

2. 2. Core Web Technologies

a. Frontend (Client-side)

⮚Technologies that run in the browser and control what the user sees and interacts with.
HTML (HyperText Markup  
Language): The structure of web pages.
CSS (Cascading Style Sheets): Styling and layout of web pages. JavaScript: Makes web pages interactive.
Frontend Frameworks/Libraries: React, Angular, Vue.js, Svelte

b. Backend (Server-side)

⮚Technologies that run on the server, handling business logic, databases, and user requests.
Languages: Node.js (JavaScript), Python (Django, Flask), PHP, Ruby, Java, C#, Go
Frameworks: Express, Laravel, Spring, ASP.NET
Databases: MySQL, PostgreSQL, MongoDB, Redis

2.3. Web Development Models

⮚Static Websites: Fixed content, often just HTML/CSS.
⮚Dynamic Websites: Content generated on the fly using backend logic.
⮚Single Page Applications (SPA): JavaScript-driven pages that dynamically update without reloading.
⮚Progressive Web Apps (PWA): Web apps with offline capabilities and mobile-like performance.

2.4. Web Hosting & Deployment

Web Hosting Services: AWS, Azure, Netlify, Vercel, Heroku, etc.
Version Control: Git, GitHub, GitLab
CI/CD: Continuous Integration/Continuous Deployment for automated testing and deployment.

2.5. Web Security

•HTTPS (SSL/TLS)
•Authentication & Authorization (OAuth, JWT)
•Common Threats: XSS, CSRF, SQL Injection

Chapter 3. Internet Protocols and Internet Service Providers
3.1. Introduction

⮚ Internet protocols define how data is formatted, addressed, transmitted, routed, and received across a network.
⮚ They ensure that different devices and systems can communicate reliably.
⮚ Protocols are set of rules and standards for devices to communicate with each other, ensuring seamless and efficient data transmission. ⮚ Internet protocols are vital for global communication.
⮚ TCP/IP is the core suite of protocols.
⮚ Each protocol has a specific role, from routing to encryption to file transfer.
⮚ Protocols are layered for modularity and efficiency.

3.1 Internet protocols  
3.1.1 Definition

► Internet protocols define how data is formatted, addressed, transmitted, routed, and received across a network.
► They ensure that different devices and systems can communicate reliably.
► Protocols are set of rules and standards for devices to communicate with each other, ensuring seamless and efficient data transmission.
► Internet protocols are vital for global communication.
► TCP/IP is the core suite of protocols.
► Each protocol has a specific role, from routing to encryption to file transfer. ► Protocols are layered for modularity and efficiency.

3.1.2. Functions of Protocols

1. Addressing: Internet protocols provide addressing mechanisms to identify devices and route data.
2. Data transmission: Protocols ensure reliable and efficient Data Transmission.  
   3.Error correction and correction: Protocols detect and correct errors during data transmission.
3. Security: Some protocols, like HTTPS provide encryption and security features.

3.1.3. Types of Internet protocols

1.Core Protocols

► IP (Internet Protocol)
► Handles addressing and routing of data packets.
► Versions:
► IPv4: 32-bit address (e.g., 192.168.0.1)
► IPv6: 128-bit address (e.g., 2001:0db8::1)
► TCP (Transmission Control Protocol)
► Reliable, connection-oriented.
► Ensures data is delivered in order and without errors. ► Used for: HTTP, FTP, email.
► UDP (User Datagram Protocol)
► Connectionless and faster but less reliable.
► Used for: video streaming, VoIP, DNS.

2. Application Layer Protocols

► HTTP/HTTPS (Hypertext Transfer Protocol / Secure) ► Foundation of web communication.
► HTTPS uses SSL/TLS for encryption.
► FTP (File Transfer Protocol)
► Used to transfer files between computers.
► Variants: SFTP (Secure), FTPS.
► SMTP (Simple Mail Transfer Protocol)
► Sends emails from a client to a server or between servers. ► IMAP/POP3 (Email Retrieval)
► IMAP: Access emails from multiple devices.
► POP3: Downloads and removes emails from the server.
► DNS (Domain Name System)
► Translates domain names (e.g., google.com) into IP addresses.

3. Network Management Protocols

► ICMP (Internet Control Message Protocol)
► Used for error messages and diagnostics (e.g., ping).
► SNMP (Simple Network Management Protocol)
► Manages and monitors network devices like routers and switches.

4. Security-Related Protocols

• TLS/SSL (Transport Layer Security / Secure Sockets Layer)
Encrypts data for secure communication (used in HTTPS).
• IPSec (Internet Protocol Security)
Secures IP communications by authenticating and encrypting each IP packet.

3.1.4. How Protocols Work Together – The TCP/IP Model

Layer
Protocols Used
Function
Application
HTTP, FTP, DNS, SMTP, IMAP, etc.
User interaction & data generation
Transport
TCP, UDP
Ensures reliable/unreliable delivery
Internet
IP, ICMP, ARP
Addressing & routing
Network Access
Ethernet, Wi-Fi
Hardware transmission

3.2. Internet service providers

1. Introduction

An Internet Service Provider (ISP) is a company or organization that provides individuals and businesses with access to
the internet and related services.

Examples: Airtel, Jio, Vodafone-Idea, BSNL, AT&T, Verizon, etc.

2. Functions of an ISP

A. Internet Access

Broadband (DSL, Cable, Fiber–Optic) Mobile Data (3G/4G/5G)
Dial-up connections (older technology) Satellite internet

B. Web Services
Web hosting
Domain name registration Email hosting

C. Network Services Leased lines
Virtual Private Networks (VPNs)
Cloud services
Technical support

D. Security Services: Firewalls, Antivirus filters, Spam filtering, Parental control features

3. Types of ISPs

A. Dial-up ISPs
Use telephone lines Very slow (up to 56 kbps) Rare today

B. Broadband ISPs
DSL (Digital Subscriber Line) – uses phone lines Cable Internet – via TV cables
Fiber Optic Internet – very high speed, stable Wireless Broadband – radio signals

C. Mobile Network Operators (MNOs)
Provide internet through mobile networks (4G/5G)

D. Satellite ISPs
Internet via satellite; useful in remote areas

E. Virtual ISPs
Resell internet services from larger ISPs

4. Equipment Used by ISPs

•Modem – connects to ISP’s network
•Router – distributes internet within home/office
•Optical Network Terminal (ONT) – used for fiber connections •Servers – store and manage ISP services
•Switches and Routers (ISP side) – manage user connections

Chapter 4. Internet Security

4.1 Introduction to cyber security
Cyber security involves protecting computers, networks, programs, and data from unauthorized access, attacks, damage, or
theft. It focuses on safeguarding digital assets in a connected world.

4.2. Goals of Cyber Security

A. Confidentiality: Ensures information is accessible only to authorized users.  
B. Integrity: Ensures data is accurate and not tampered with.
C. Availability: Ensures systems and data are available when needed.

4.3. Types of Cyber Threats

A. Malware: Virus – attaches to files and spreads. Worm – self-replicates; spreads via networks. Trojan Horse – disguised as legitimate software. Ransomware – locks/encrypts data and demands ransom. Spyware – secretly monitors activity.
B. Phishing: Fraudulent emails/messages trick users into sharing sensitive information.
C. Man-in-the-Middle (MITM) Attack: Attackers intercept communication between two parties.
D. Password Attacks: Brute force, dictionary attacks, credential stuffing.
E. Denial-of-Service (DoS/DDoS): Attackers overload systems to make them unavailable.
F. SQL Injection: Malicious SQL queries target databases through insecure input fields.
G. Zero-Day Exploits: Attacks exploiting unknown vulnerabilities.
H. Social Engineering: Manipulating people into revealing information or performing actions.

4.4. Cyber Security Techniques & Tools

A. Encryption: Converts data into unreadable format to prevent unauthorized access.
B. Firewalls: Filter and block suspicious network traffic.
C. Antivirus / Anti-Malware: Detect and remove malicious software.
D. Multi-Factor Authentication (MFA): Adds extra steps to verify user identity.
E. Virtual Private Networks (VPNs): Secure, encrypted connections over the internet.
F. Intrusion Detection System (IDS): Detects unusual network activity.
G. Intrusion Prevention System (IPS): Blocks detected threats automatically.
H. Security Information and Event Management (SIEM): Centralized monitoring and analysis of security logs.

4.5. Best Cyber Security Practices

For individuals: Use strong and unique passwords, Update software regularly, Avoid to click suspicious links,
Back up data frequently, use seucre wi-fi or VPN.
