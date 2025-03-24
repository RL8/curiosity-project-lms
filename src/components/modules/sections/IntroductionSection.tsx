import React from 'react';
import { useLMS } from '../../../contexts/LMSContext';

interface IntroductionSectionProps {
  courseId: number;
  moduleIndex: number;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ courseId, moduleIndex }) => {
  const { courses, setActiveSection, markSectionComplete } = useLMS();
  
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[moduleIndex]) return null;
  
  const module = course.modules[moduleIndex];
  
  // Use the content from the data structure if available, otherwise use fallback text
  const introText = module.content?.introduction || 
    "This module is part of the Floorbook Approach learning series. Work through each section to build your understanding of inquiry-based learning principles.";
  
  // Generate learning objectives based on module description or title
  const objectiveText = module.description || module.title;
  
  const handleContinue = () => {
    markSectionComplete(courseId, moduleIndex, 'introduction');
    setActiveSection('key concepts');
  };
  
  return (
    <>
      <div className="bg-indigo-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Learning Objectives</h3>
        <p className="mb-2">After completing this module, you will be able to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Identify the key components of {objectiveText.toLowerCase()}</li>
          <li>Reflect on your current practice in relation to the Floorbook Approach</li>
          <li>Apply new concepts to your educational setting</li>
          <li>Develop strategies for implementing IBL principles</li>
        </ul>
      </div>
      
      <div className="prose max-w-none">
        <h3>Module Overview</h3>
        <p>{introText}</p>
        
        {module.content?.theory && (
          <>
            <h4 className="mt-4">Theory</h4>
            <p>{module.content.theory}</p>
          </>
        )}
        
        {module.content?.interactiveExercise && (
          <>
            <h4 className="mt-4">Interactive Exercise</h4>
            <p>{module.content.interactiveExercise}</p>
          </>
        )}
        
        <h4 className="mt-4">How to Use This Module</h4>
        <p>
          Work through each section in order, completing the activities as you go. You can track your 
          progress in the sidebar and return to any section at any time. We recommend setting aside 
          30-45 minutes for each section to allow for deep engagement with the material.
        </p>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleContinue}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
        >
          Next: Key Concepts
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default IntroductionSection;
