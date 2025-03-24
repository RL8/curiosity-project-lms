import React, { useState } from 'react';
import { LMSProvider, useLMS } from './contexts/LMSContext';
import Layout from './components/layout/Layout';
import Dashboard from './components/courses/Dashboard';
import CourseView from './components/courses/CourseView';
import UserProfile from './components/user/UserProfile';

const AppContent: React.FC = () => {
  const { activeView } = useLMS();
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <Layout onProfileClick={() => setShowProfile(!showProfile)}>
      {showProfile ? (
        <UserProfile />
      ) : (
        <>
          {activeView === 'main' && <Dashboard />}
          {activeView === 'course' && <CourseView />}
        </>
      )}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <LMSProvider>
      <AppContent />
    </LMSProvider>
  );
};

export default App;
