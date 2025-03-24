import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  onProfileClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onProfileClick }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header onProfileClick={onProfileClick} />
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <footer className="bg-white shadow-inner mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Floorbook Approach LMS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
