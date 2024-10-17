import React from 'react';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app">
      <Navigation />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
    </div>
  );
}

export default App;
