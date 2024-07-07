import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';

const NotFound = () => {
  return (
    <PageLayout>
      <div className="error-page">  {/* Descriptive class name */}
        <h1 className="error-code">404</h1> {/* More specific class name */}
        <h2 className="error-message">Lost your way? </h2> {/* Engaging message */}
        <Link to="/" className="error-btn">
          Head Back Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
