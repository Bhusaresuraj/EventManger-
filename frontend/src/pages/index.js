import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import FeedbackForm from '../components/FeedbackForm';
import EnquiryButton from '../components/EnquiryButton';
import { EventContext } from '../context/EventContext';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { events } = React.useContext(EventContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Creating Unforgettable Events</h1>
            <p>Transform your vision into extraordinary experiences</p>
            <EnquiryButton />
          </div>
        </section>

        {/* Recent Events */}
        <section className={`section ${styles.recentEvents}`}>
          <div className="container">
            <h2 className="section-title">Recent Events</h2>
            <div className="grid grid-3">
              {events.recent.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={`section ${styles.partners}`}>
          <div className="container">
            <h2 className="section-title">Our Partners</h2>
            <div className={styles.brandsGrid}>
              <img src="/images/brand1.png" alt="Brand 1" />
              <img src="/images/brand2.png" alt="Brand 2" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`section ${styles.about}`}>
          <div className="container">
            <div className="grid grid-2">
              <div className={styles.aboutContent}>
                <h2>About Us</h2>
                <p>Information about the company...</p>
              </div>
              <div className={styles.aboutImage}>
                <img src="/images/about.jpg" alt="About Us" />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className={`section ${styles.upcomingEvents}`}>
          <div className="container">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="grid grid-3">
              {events.upcoming.map(event => (
                <EventCard key={event.id} event={event}>
                  <PaymentButton eventId={event.id} />
                </EventCard>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className={`section ${styles.feedback}`}>
          <div className="container">
            <h2 className="section-title">Share Your Experience</h2>
            <FeedbackForm />
          </div>
        </section>

        {/* Contact Section */}
        <section className={`section ${styles.contact}`}>
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className={styles.contactContent}>
              <EnquiryButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home; 