import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import NoticeSection from '../components/NoticeSection';
import TeacherSection from '../components/TeacherSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <NoticeSection />
      <Features />
      <TeacherSection />
      {/* এখানে আর ফুটার দেওয়ার দরকার নেই, কারণ App.jsx এ দেওয়া আছে */}
    </main>
  );
};

export default Home;