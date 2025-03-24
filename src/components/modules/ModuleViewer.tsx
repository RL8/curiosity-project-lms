import React from 'react';
import { useLMS } from '../../contexts/LMSContext';
import SectionNavigation from './SectionNavigation';
import IntroductionSection from './sections/IntroductionSection';
import KeyConceptsSection from './sections/KeyConceptsSection';
import CaseStudySection from './sections/CaseStudySection';
import PracticalActivitySection from './sections/PracticalActivitySection';
import ReflectionSection from './sections/ReflectionSection';
import ResourcesSection from './sections/ResourcesSection';
import ProgressBar from '../common/ProgressBar';
import useProgress from '../../hooks/useProgress';

const ModuleViewer: React.FC = () => {
  const { activeModule, activeSection } = useLMS();
  const { calculateModuleProgress } = useProgress();
  
  if (!activeModule) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Please select a module to view its content.</p>
      </div>
    );
  }
  
  const { courseId, moduleIndex } = activeModule;
  const progress = calculateModuleProgress(courseId, moduleIndex);
  
  // Render the appropriate section based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'introduction':
        return <IntroductionSection courseId={courseId} moduleIndex={moduleIndex} />;
      case 'key concepts':
        return <KeyConceptsSection courseId={courseId} moduleIndex={moduleIndex} />;
      case 'case study':
        return <CaseStudySection courseId={courseId} moduleIndex={moduleIndex} />;
      case 'resources':
        return <ResourcesSection courseId={courseId} moduleIndex={moduleIndex} />;
      case 'practical activity':
        return <PracticalActivitySection courseId={courseId} moduleIndex={moduleIndex} />;
      case 'reflection':
        return <ReflectionSection courseId={courseId} moduleIndex={moduleIndex} />;
      default:
        return <IntroductionSection courseId={courseId} moduleIndex={moduleIndex} />;
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Module Progress</h2>
          <span className="text-sm text-gray-600">{progress}% Complete</span>
        </div>
        <ProgressBar progress={progress} height={8} labelPosition="inside" />
      </div>
      
      <SectionNavigation courseId={courseId} moduleIndex={moduleIndex} />
      
      <div className="flex-grow overflow-auto p-6">
        <div className="max-w-3xl mx-auto">
          {renderSection()}
        </div>
      </div>
      
      <div className="p-4 border-t bg-gray-50">
        <div className="max-w-3xl mx-auto flex justify-between">
          <button 
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={() => {
              // Logic to navigate to previous section
              const sections = ['introduction', 'key concepts', 'case study', 'resources', 'practical activity', 'reflection'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex > 0) {
                const { setActiveSection } = useLMS();
                setActiveSection(sections[currentIndex - 1] as any);
              }
            }}
            disabled={activeSection === 'introduction'}
          >
            Previous Section
          </button>
          
          <button 
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            onClick={() => {
              // Logic to navigate to next section
              const sections = ['introduction', 'key concepts', 'case study', 'resources', 'practical activity', 'reflection'];
              const currentIndex = sections.indexOf(activeSection);
              if (currentIndex < sections.length - 1) {
                const { setActiveSection } = useLMS();
                setActiveSection(sections[currentIndex + 1] as any);
              }
            }}
            disabled={activeSection === 'reflection'}
          >
            Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleViewer;
