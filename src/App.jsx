import React from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import ContactForm from "./Components/ContactForm";

const App = () => {
  return (
    // <div>App</div>
    <>
    <Navbar />
    <Hero />
    <Features />
    <ContactForm />
    
    </>
  )
}

export default App