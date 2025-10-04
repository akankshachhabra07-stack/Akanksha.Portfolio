import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import profilePic from "./Akanksha.jpg";

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");

  const tagline =
    "Passionate Clinical Research Professional | BDS Graduate | Pharmacovigilance Expert";

  // Typing effect for tagline
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index++;
      if (index === tagline.length) clearInterval(interval);
    }, 50);
  }, []);

  // Slide-in animation for experience cards
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  // Animate skill boxes
  useEffect(() => {
    const skillBoxes = document.querySelectorAll(".skill-box");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
    skillBoxes.forEach((box) => observer.observe(box));
  }, []);

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="floating-bg">
          {/* Optional floating circles for animation */}
          <div className="circle" style={{ top: "20%", left: "10%" }}></div>
          <div className="circle" style={{ top: "40%", left: "70%" }}></div>
          <div className="circle" style={{ top: "65%", left: "30%" }}></div>
          <div className="circle" style={{ top: "80%", left: "80%" }}></div>
        </div>

        <div className="hero-content">
          <img
            src={profilePic}
            alt="Akanksha Chhabra"
            className="profile-pic"
          />
          <h1>Akanksha Chhabra</h1>
          <p className="role">
            Senior Executive Safety Medical Writer & Reviewer
          </p>
          <p className="tagline">{typedText}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <h2>Experience</h2>
        <div className="cards">
          <div className="card">
            <h3>Sun Pharma</h3>
            <p>Senior Executive Safety Medical Writer & Reviewer</p>
            <span>Sep 2024 – Present</span>
            <div className="metrics-badges">
              <span className="badge">📄 250+ PADERs authored</span>
              <span className="badge">📚 8000+ safety articles screened</span>
              <span className="badge">📑 3000+ ICH guidelines reviewed</span>
            </div>
          </div>

          <div className="card">
            <h3>Sun Pharma</h3>
            <p>Pharmacovigilance Trainee</p>
            <span>Jan 2024 – Sep 2024</span>
            <div className="metrics-badges">
              <span className="badge">Assisted in PADERs & PSURs drafting</span>
              <span className="badge">Analyzed safety signals</span>
            </div>
          </div>

          <div className="card">
            <h3>Max Healthcare</h3>
            <p>Clinical Research Coordinator Intern</p>
            <span>Oct – Nov 2023</span>
            <div className="metrics-badges">
              <span className="badge">
                Assisted in study coordination & data collection
              </span>
              <span className="badge">Ensured regulatory compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <h2>Education</h2>
        <div className="cards">
          <div className="card">
            <h3>Jamia Hamdard</h3>
            <p>Master's in Clinical Research (2022–2024)</p>
          </div>
          <div className="card">
            <h3>Sudha Rustagi College of Dental Science & Research</h3>
            <p>BDS (2016–2021)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {[
            "Medical Review",
            "PSURs",
            "PADER",
            "Data Analysis",
            "Regulatory Compliance",
          ].map((skill, i) => (
            <div key={i} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: akanksha.chhabra07@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/akanksha-chhabra-31ba55187"
            target="_blank"
            rel="noreferrer"
          >
            akanksha-chhabra
          </a>
        </p>
        <a href="mailto:akanksha.chhabra07@gmail.com" className="cta-btn">
          📩 Email Me
        </a>
        <a href="/Akanksha_Chhabra_Resume.pdf" className="cta-btn" download>
          📄 Download Resume
        </a>
      </section>
    </div>
  );
}
