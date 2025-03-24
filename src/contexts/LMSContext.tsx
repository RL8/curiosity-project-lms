import React, { createContext, useContext, useState, useEffect } from 'react';
import coursesData, { Course, Module } from '../data/courses';

type ViewType = 'main' | 'course';
type SectionType = 'introduction' | 'key concepts' | 'case study' | 'resources' | 'practical activity' | 'reflection';

interface ActiveModuleType {
  courseId: number;
  moduleIndex: number;
}

interface LMSContextType {
  courses: Course[];
  activeView: ViewType;
  activeModule: ActiveModuleType | null;
  activeSection: SectionType;
  userProgress: Record<string, boolean>;
  setActiveView: (view: ViewType) => void;
  setActiveModule: (module: ActiveModuleType | null) => void;
  setActiveSection: (section: SectionType) => void;
  markSectionComplete: (courseId: number, moduleIndex: number, sectionKey: keyof Module['sections']) => void;
  isSectionComplete: (courseId: number, moduleIndex: number, sectionKey: keyof Module['sections']) => boolean;
  getCompletedSectionsCount: (courseId: number, moduleIndex: number) => number;
  getTotalSectionsCount: (courseId: number, moduleIndex: number) => number;
  resetProgress: () => void;
}

const LMSContext = createContext<LMSContextType>({
  courses: [],
  activeView: 'main',
  activeModule: null,
  activeSection: 'introduction',
  userProgress: {},
  setActiveView: () => {},
  setActiveModule: () => {},
  setActiveSection: () => {},
  markSectionComplete: () => {},
  isSectionComplete: () => false,
  getCompletedSectionsCount: () => 0,
  getTotalSectionsCount: () => 0,
  resetProgress: () => {},
});

export const useLMS = () => useContext(LMSContext);

export const LMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ViewType>('main');
  const [activeModule, setActiveModule] = useState<ActiveModuleType | null>(null);
  const [activeSection, setActiveSection] = useState<SectionType>('introduction');
  
  // Initialize user progress from localStorage or empty object
  const [userProgress, setUserProgress] = useState<Record<string, boolean>>(() => {
    const savedProgress = localStorage.getItem('lms-user-progress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });
  
  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lms-user-progress', JSON.stringify(userProgress));
  }, [userProgress]);
  
  // Create a progress key for a specific section
  const createProgressKey = (courseId: number, moduleIndex: number, sectionKey: string): string => {
    return `course_${courseId}_module_${moduleIndex}_${sectionKey}`;
  };
  
  // Mark a section as complete
  const markSectionComplete = (courseId: number, moduleIndex: number, sectionKey: keyof Module['sections']) => {
    const progressKey = createProgressKey(courseId, moduleIndex, sectionKey);
    setUserProgress(prev => ({
      ...prev,
      [progressKey]: true
    }));
    
    // Update the courses array with the completed section
    const updatedCourses = [...coursesData];
    const courseIndex = updatedCourses.findIndex(c => c.id === courseId);
    
    if (courseIndex !== -1 && updatedCourses[courseIndex].modules[moduleIndex]) {
      updatedCourses[courseIndex].modules[moduleIndex].sections[sectionKey] = true;
    }
  };
  
  // Check if a section is complete
  const isSectionComplete = (courseId: number, moduleIndex: number, sectionKey: keyof Module['sections']): boolean => {
    const progressKey = createProgressKey(courseId, moduleIndex, sectionKey);
    return userProgress[progressKey] === true;
  };
  
  // Get the number of completed sections for a module
  const getCompletedSectionsCount = (courseId: number, moduleIndex: number): number => {
    const sectionKeys: (keyof Module['sections'])[] = [
      'introduction', 
      'keyConceptsCompleted', 
      'caseStudyCompleted',
      'resourcesCompleted',
      'practicalActivityCompleted', 
      'reflectionCompleted'
    ];
    
    return sectionKeys.filter(key => isSectionComplete(courseId, moduleIndex, key)).length;
  };
  
  // Get the total number of sections for a module
  const getTotalSectionsCount = (courseId: number, moduleIndex: number): number => {
    return 6; // Updated to 6 as we now have 6 sections per module
  };
  
  // Reset all progress
  const resetProgress = () => {
    setUserProgress({});
    localStorage.removeItem('lms-user-progress');
  };
  
  return (
    <LMSContext.Provider
      value={{
        courses: coursesData,
        activeView,
        activeModule,
        activeSection,
        userProgress,
        setActiveView,
        setActiveModule,
        setActiveSection,
        markSectionComplete,
        isSectionComplete,
        getCompletedSectionsCount,
        getTotalSectionsCount,
        resetProgress,
      }}
    >
      {children}
    </LMSContext.Provider>
  );
};
