import React from 'react';
import { useLMS } from '../../contexts/LMSContext';

interface SectionNavigationProps {
  courseId?: number;
  moduleIndex?: number;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ courseId, moduleIndex }) => {
  const { activeSection, setActiveSection, activeModule, isSectionComplete } = useLMS();
  
  // If courseId and moduleIndex are not provided, use the ones from activeModule
  const currentCourseId = courseId || (activeModule?.courseId || 0);
  const currentModuleIndex = moduleIndex || (activeModule?.moduleIndex || 0);
  
  // Map section names to their corresponding completion keys in the Module['sections'] type
  const sectionCompletionKeys: Record<string, keyof any> = {
    'introduction': 'introduction',
    'key concepts': 'keyConceptsCompleted',
    'case study': 'caseStudyCompleted',
    'resources': 'resourcesCompleted',
    'practical activity': 'practicalActivityCompleted',
    'reflection': 'reflectionCompleted'
  };
  
  // Sections array for navigation
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'key concepts', label: 'Key Concepts' },
    { id: 'case study', label: 'Case Study' },
    { id: 'resources', label: 'Resources' },
    { id: 'practical activity', label: 'Practical Activity' },
    { id: 'reflection', label: 'Reflection' }
  ];
  
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto">
        <nav className="flex overflow-x-auto py-2 px-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const isCompleted = isSectionComplete(
              currentCourseId, 
              currentModuleIndex, 
              sectionCompletionKeys[section.id]
            );
            
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`flex items-center px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isCompleted && (
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SectionNavigation;
