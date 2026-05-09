import React from 'react';
import './About.css'; 
import { Link } from 'react-router-dom'; 
import { Leaf, Cpu, ChefHat, User } from 'lucide-react'; 

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1 className="hero-title">Cooking with <em>Intelligence</em>.</h1>
        <p className="hero-text">
          RecipeCraft was born from a simple question: "What can I cook with exactly what's in my fridge right now?" 
          We're ending food waste and decision fatigue, one AI-generated meal at a time.
        </p>
      </section>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="icon-wrapper" style={{ color: '#4A7C59' }}><Leaf size={32} /></div>
          <h3>Zero Waste Vision</h3>
          <p>Our AI prioritizes the ingredients you already have, helping you save money and reduce global food waste.</p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper" style={{ color: '#8B6F47' }}><Cpu size={32} /></div>
          <h3>Neural Nutrition</h3>
          <p>Trained on professional culinary techniques to ensure every recipe is safe, tasty, and balanced.</p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper" style={{ color: '#5C4730' }}><ChefHat size={32} /></div>
          <h3>Chef-Verified</h3>
          <p>While AI generates the ideas, our logic is rooted in classical cooking principles for reliable results.</p>
        </div>
      </div>

      <section className="developer-profile">
        <div className="dev-header">
          <span className="hero-badge">The Creator</span>
          <h2>Behind the Code</h2>
        </div>

        <div className="dev-card">
          <div className="dev-visual">
            <div className="dev-avatar">S</div>
            <div className="dev-links">
              <a href="https://github.com/sadwika12" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/sadwikabollineni" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="dev-info">
            <h3>Sadwika</h3>
            <p className="dev-title">Full-Stack Developer & CS Student</p>
            <p className="dev-bio">
              Passionate about the intersection of AI and daily utility. I built RecipeCraft 
              to solve the "what's for dinner" dilemma using modern tech stacks. 
              When I'm not coding, I'm usually experimenting with new recipes or 
              exploring the latest in neural networks.
            </p>
            <div className="dev-tags">
              <span>  MERN</span>
              <span>PERN</span>
              <span>Typescript</span>
              <span>Machine Learning learner</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 style={{ fontSize: '2.2rem' }}>Ready to transform your kitchen?</h2>
        <p style={{ opacity: 0.8 }}>Join thousands of home chefs cooking smarter.</p>
        <Link to="/">
          <button className="cta-btn">Create a Recipe</button>
        </Link>
      </section>
    </div>
  );
};

export default About;