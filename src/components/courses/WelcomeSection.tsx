import React from 'react';
import { useLMS } from '../../contexts/LMSContext';
import useProgress from '../../hooks/useProgress';

const WelcomeSection: React.FC = () => {
  const { setActiveView, setActiveModule, setActiveSection, courses } = useLMS();
  const { calculateOverallProgress, getNextIncompleteSection } = useProgress();
  
  const overallProgress = calculateOverallProgress();
  
  // Find the first course with incomplete sections
  const findNextCourseToStudy = () => {
    for (const course of courses) {
      const nextIncompleteSection = getNextIncompleteSection(course.id);
      if (nextIncompleteSection) {
        return {
          courseId: course.id,
          moduleIndex: nextIncompleteSection.moduleIndex,
          sectionName: nextIncompleteSection.sectionName
        };
      }
    }
    return null;
  };
  
  const nextCourse = findNextCourseToStudy();
  
  const handleContinueLearning = () => {
    if (nextCourse) {
      setActiveModule({ 
        courseId: nextCourse.courseId, 
        moduleIndex: nextCourse.moduleIndex 
      });
      setActiveSection(nextCourse.sectionName);
      setActiveView('course');
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h2 className="text-2xl font-bold">Welcome to The Floorbook Approach</h2>
        {overallProgress > 0 && (
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-600 mr-3">Your Learning Journey:</span>
            <div className="w-48 bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  overallProgress === 100 
                    ? 'bg-green-600' 
                    : overallProgress > 50 
                      ? 'bg-indigo-600' 
                      : 'bg-indigo-400'
                }`}
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">{overallProgress}%</span>
          </div>
        )}
      </div>
      
      <p className="text-gray-600 mb-4">
        Discover Inquiry-Based Learning through our comprehensive course series. Explore
        Inside, Outside, and Beyond approaches to learning and documentation.
      </p>
      
      <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">Series Introduction</h3>
            <p className="text-gray-600">
              This course series will guide you through the philosophy and practical implementation
              of the Floorbook Approach, helping you transform your teaching practice.
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Presented by:</strong> Dr. Claire Warden, Mindstretchers Ltd
            </p>
          </div>
          
          {nextCourse && (
            <div className="mt-4 md:mt-0 md:ml-6">
              <button
                onClick={handleContinueLearning}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue Learning
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
