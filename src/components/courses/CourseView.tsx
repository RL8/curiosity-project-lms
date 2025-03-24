import React from 'react';
import CourseSidebar from '../modules/CourseSidebar';
import ModuleViewer from '../modules/ModuleViewer';
import { useLMS } from '../../contexts/LMSContext';
import useProgress from '../../hooks/useProgress';

const CourseView: React.FC = () => {
  const { setActiveView, activeModule, courses } = useLMS();
  const { calculateCourseProgress } = useProgress();
  
  const currentCourse = courses.find(course => course.id === activeModule?.courseId);
  const courseProgress = currentCourse ? calculateCourseProgress(currentCourse.id) : 0;
  
  const handleBackToDashboard = () => {
    setActiveView('main');
  };
  
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={handleBackToDashboard}
            className="mr-4 text-gray-600 hover:text-indigo-700 focus:outline-none"
            aria-label="Back to dashboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">{currentCourse?.title}</h1>
            <p className="text-sm text-gray-600">{currentCourse?.description}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-3">Course Progress:</span>
          <div className="w-32 bg-gray-200 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${courseProgress === 100 ? 'bg-green-600' : 'bg-indigo-600'}`}
              style={{ width: `${courseProgress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">{courseProgress}%</span>
        </div>
      </div>
      
      <div className="flex h-full">
        <CourseSidebar />
        <ModuleViewer />
      </div>
    </div>
  );
};

export default CourseView;
