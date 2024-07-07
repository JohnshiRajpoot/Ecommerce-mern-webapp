import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import HeroSection from './HeroSection'; // Import custom HeroSection component

const LandingPage = () => {
  return (
    <PageLayout>
      <HeroSection />  {/* Utilize the HeroSection component */}
    </PageLayout>
  );
};

export default LandingPage;
