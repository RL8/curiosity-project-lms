import React, { useState } from 'react';
import { useLMS } from '../../contexts/LMSContext';
import useProgress from '../../hooks/useProgress';

const UserProfile: React.FC = () => {
  const { courses } = useLMS();
  const { calculateCourseProgress, resetProgress } = useProgress();
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Calculate overall progress across all courses
  const overallProgress = courses.length > 0 
    ? courses.reduce((sum, course) => sum + calculateCourseProgress(course.id), 0) / courses.length 
    : 0;
  
  const handleResetProgress = () => {
    setShowConfirmation(true);
  };
  
  const confirmReset = () => {
    resetProgress();
    setShowConfirmation(false);
  };
  
  const cancelReset = () => {
    setShowConfirmation(false);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Learning Profile</h2>
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-indigo-600 h-4 rounded-full"
            style={{ width: `${Math.round(overallProgress)}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-600 mt-1">{Math.round(overallProgress)}% Complete</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Course Progress</h3>
        <div className="space-y-4">
          {courses.map(course => {
            const progress = calculateCourseProgress(course.id);
            return (
              <div key={course.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">{course.title}</h4>
                  <span className="text-sm text-gray-600">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="border-t pt-4">
        <button 
          onClick={handleResetProgress}
          className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
          aria-label="Reset all progress"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Reset All Progress
        </button>
      </div>
      
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Reset Progress</h3>
            <p className="mb-6">
              Are you sure you want to reset all your progress? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={cancelReset}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={confirmReset}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Reset Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
