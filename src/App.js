import React from 'react';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contactForm"><ContactForm /></section>
      <Footer />
    </div>
  );
}

export default App;
