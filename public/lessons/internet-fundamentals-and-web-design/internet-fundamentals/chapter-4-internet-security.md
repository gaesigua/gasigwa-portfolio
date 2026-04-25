# Chapter 4: Internet Security

<div class="intro-box">
  <h2>Overview</h2>
  <p>With an interconnected world comes an absolute need to safeguard data and protect digital infrastructure. In this chapter, we explore the foundations of cyber security, the goals behind defending networks, common severe threats, and best practices to maintain internet safety.</p>
</div>

## 4.1 Introduction to Cyber Security

<div class="note">
  <strong>Cyber Security:</strong> Involves protecting computers, networks, programs, and data from unauthorized access, attacks, damage, or theft. It firmly focuses on safeguarding digital assets in an ever-growing connected world.
</div>

## 4.2 Goals of Cyber Security (The CIA Triad)

A secure system fundamentally stands on three major objectives, universally known as the **CIA** Triad:

<div class="comparison-grid">
  <div class="comparison-card">
    <h5>Confidentiality</h5>
    <p>Ensures that information is concealed and accessible <strong>only</strong> to authorized users. Unwanted individuals should not be able to read intercepted communications.</p>
  </div>
  <div class="comparison-card">
    <h5>Integrity</h5>
    <p>Ensures that data is maintained accurately entirely. Information in transit or at rest must not be tampered with or maliciously altered.</p>
  </div>
  <div class="comparison-card">
    <h5>Availability</h5>
    <p>Ensures that systems, servers, and data are consistently accessible and functionally available to authorized users when needed without downtime.</p>
  </div>
</div>

## 4.3 Types of Cyber Threats

Cyber attacks come in various sophisticated forms. Knowing your enemy is half the battle.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Malware</span></div>
  <ul class="key-points">
    <li><strong>Virus:</strong> Attaches to legitimate files/executables and uncontrollably spreads.</li>
    <li><strong>Worm:</strong> Highly dangerous; self-replicates and aggressively spreads via networks without host files.</li>
    <li><strong>Trojan Horse:</strong> Disguised as legitimate, safe software to trick the user into installing it.</li>
    <li><strong>Ransomware:</strong> Rapidly encrypts and locks your files or entire drive, then demands an anonymous cryptocurrency ransom for the unlock key.</li>
    <li><strong>Spyware:</strong> Secretly installs itself to monitor activity, steal passwords, and track keystrokes without user consent.</li>
  </ul>
</div>

<div class="module">
  <h3>Other Severe Attack Vectors</h3>
  <ul>
    <li><strong>Phishing:</strong> Deceptive, fraudulent emails or messages engineered to trick users into willingly sharing sensitive information like passwords or credit card numbers.</li>
    <li><strong>Man-in-the-Middle (MITM) Attack:</strong> A threat actor silently intercepts and alters the communication between two parties who believe they are communicating directly.</li>
    <li><strong>Password Attacks:</strong> Includes brute force (testing billions of passwords sequentially), dictionary attacks, or credential stuffing (trying passwords leaked from other breaches).</li>
    <li><strong>Denial-of-Service (DoS/DDoS):</strong> Highly coordinated attacks where networks are artificially overloaded with malicious traffic until the system completely crashes or becomes unresponsive to legitimate users.</li>
    <li><strong>SQL Injection:</strong> Injecting malicious SQL commands through insecure input fields to directly manipulate backend databases, exposing all data.</li>
    <li><strong>Social Engineering:</strong> Tricking and manipulating people via conversation or trust to bypass security altogether.</li>
  </ul>
</div>

## 4.4 Cyber Security Techniques & Tools

Defenders utilize rigorous technologies to prevent, isolate, and respond to threats.

<div class="steps">
  <div class="step">
    <strong>Encryption</strong>
    Converts sensitive data into an unreadable ciphered format to prevent unauthorized access.
  </div>
  <div class="step">
    <strong>Firewalls</strong>
    Systems designed to strictly filter and selectively block unauthorized or suspicious network traffic based on rules.
  </div>
  <div class="step">
    <strong>Antivirus / Anti-Malware</strong>
    Specialized software designed to detect, quarantine, and definitively remove malicious software from devices.
  </div>
  <div class="step">
    <strong>Multi-Factor Authentication (MFA)</strong>
    Requires an extra step beyond a password to verify an identity (e.g., an SMS code, authenticator app, or hardware token).
  </div>
  <div class="step">
    <strong>Virtual Private Networks (VPNs)</strong>
    Creates incredibly secure, strongly encrypted connection tunnels over the raw open internet.
  </div>
  <div class="step">
    <strong>IDS and IPS</strong>
    Intrusion Detection Systems uniquely detect unusual network behavior. Intrusion Prevention Systems physically block detected threats automatically.
  </div>
</div>

## 4.5 Best Cyber Security Practices

<div class="success">
  <strong>Personal Vigilance Practices:</strong>
  <ul>
    <li>Use incredibly strong, uniquely generated passwords for every service.</li>
    <li>Turn on Multi-Factor Authentication universally.</li>
    <li>Ensure operating systems and software are updated regularly to patch holes.</li>
    <li>Never blindly click suspicious links received in unexpected emails.</li>
    <li>Back up irreplaceable data frequently, keeping a copy disconnected from the network (Cold Storage).</li>
    <li>Use trusted VPNs when handling sensitive info over public Wi-Fi access points.</li>
  </ul>
</div>
