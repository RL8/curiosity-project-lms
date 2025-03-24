import React, { useState } from 'react';
import { useLMS } from '../../contexts/LMSContext';
import useProgress from '../../hooks/useProgress';
import ProgressBar from '../common/ProgressBar';

const CourseSidebar: React.FC = () => {
  const { courses, activeModule, setActiveModule, setActiveView, setActiveSection } = useLMS();
  const { calculateModuleProgress } = useProgress();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  if (!activeModule) return null;
  
  const { courseId, moduleIndex } = activeModule;
  const course = courses.find(c => c.id === courseId);
  
  if (!course) return null;
  
  const handleModuleClick = (moduleIndex: number) => {
    setActiveModule({ courseId, moduleIndex });
    setActiveSection('introduction');
  };
  
  const handleBackClick = () => {
    setActiveView('main');
    setActiveModule(null);
  };
  
  return (
    <div className={`bg-gray-50 border-r transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b flex items-center justify-between">
        <button
          onClick={handleBackClick}
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          {!isCollapsed && <span>Back to Dashboard</span>}
        </button>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-600 hover:text-gray-900"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="p-4 border-b">
        {!isCollapsed && (
          <h2 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h2>
        )}
        <p className={`text-sm text-gray-600 ${isCollapsed ? 'hidden' : ''}`}>
          {course.description}
        </p>
      </div>
      
      <div className="p-4">
        {!isCollapsed && <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Modules</h3>}
        
        <ul className="space-y-2">
          {course.modules.map((module, index) => {
            const isActive = moduleIndex === index;
            const progress = calculateModuleProgress(courseId, index);
            
            return (
              <li key={index}>
                <button
                  onClick={() => handleModuleClick(index)}
                  className={`w-full text-left rounded-md p-3 transition-colors ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {isCollapsed ? (
                    <div className="flex flex-col items-center">
                      <span className="font-medium">{index + 1}</span>
                      <div className="mt-1 w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-600 h-full" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{module.title}</span>
                        <span className="text-xs text-gray-500">{progress}%</span>
                      </div>
                      <ProgressBar 
                        progress={progress}
                        height={4}
                        showLabel={false}
                        className="mt-2"
                      />
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebar;
