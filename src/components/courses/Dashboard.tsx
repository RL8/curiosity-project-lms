import React from 'react';
import WelcomeSection from './WelcomeSection';
import CourseGrid from './CourseGrid';
import Navigation from '../layout/Navigation';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <Navigation />
      <WelcomeSection />
      <CourseGrid />
    </div>
  );
};

export default Dashboard;
