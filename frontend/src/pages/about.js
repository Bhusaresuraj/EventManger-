import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="about-us">
          <h1>About Us</h1>
          <p>Information about the company...</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About; 