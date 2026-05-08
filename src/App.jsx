import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Traction from './components/Traction';
import Market from './components/Market';
import BusinessModel from './components/BusinessModel';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Fade-up on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Nav active state
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const handleScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? '#0A0A0A' : '';
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <Market />
      <BusinessModel />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
