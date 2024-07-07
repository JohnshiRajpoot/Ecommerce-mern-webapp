import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="about-section">
        <div className="about-image-container">
          <img src="/images/about.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <p className="about-description">
            {generateAboutText()}
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

const generateAboutText = () => {
  const loremIpsumText = [
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
"Nulla facilisi. Nam eget nibh eu eros semper ullamcorper."
"Donec eu libero sit amet lacus tincidunt convallis."
"Cras sed volutpat metus. In ac diam id neque semper lacinia."
"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
"Aliquam erat volutpat. Donec vitae leo nec enim ornare tincidunt."
"Phasellus vitae mauris eget elit aliquam elementum."
"Sed non quam ac mi viverra lacinia."
"Integer sed arcu eget sem aliquam euismod."
"In hac habitasse platea dictumst."
  ];

  return loremIpsumText.join(' ');
};

export default AboutPage;
