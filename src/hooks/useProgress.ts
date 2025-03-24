import { useLMS } from '../contexts/LMSContext';
import { Course, Module } from '../data/courses';

// Hook for calculating and managing progress
const useProgress = () => {
  const { 
    courses, 
    markSectionComplete, 
    isSectionComplete, 
    getCompletedSectionsCount, 
    getTotalSectionsCount,
    resetProgress
  } = useLMS();

  // Calculate overall progress across all courses
  const calculateOverallProgress = (): number => {
    let totalSections = 0;
    let completedSections = 0;

    courses.forEach(course => {
      course.modules.forEach((_, moduleIndex) => {
        totalSections += getTotalSectionsCount(course.id, moduleIndex);
        completedSections += getCompletedSectionsCount(course.id, moduleIndex);
      });
    });

    return totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
  };

  // Calculate overall progress for a course
  const calculateCourseProgress = (courseId: number): number => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;

    let totalSections = 0;
    let completedSections = 0;

    course.modules.forEach((_, moduleIndex) => {
      totalSections += getTotalSectionsCount(courseId, moduleIndex);
      completedSections += getCompletedSectionsCount(courseId, moduleIndex);
    });

    return totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
  };

  // Calculate progress for a specific module
  const calculateModuleProgress = (courseId: number, moduleIndex: number): number => {
    const completedSections = getCompletedSectionsCount(courseId, moduleIndex);
    const totalSections = getTotalSectionsCount(courseId, moduleIndex);
    
    return totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
  };

  // Get next incomplete section for a module
  const getNextIncompleteSection = (courseId: number, moduleIndex?: number): { moduleIndex: number, sectionName: string } | null => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return null;

    // If moduleIndex is provided, check only that module
    if (moduleIndex !== undefined) {
      if (!course.modules[moduleIndex]) return null;
      
      if (!isSectionComplete(courseId, moduleIndex, 'introduction')) 
        return { moduleIndex, sectionName: 'introduction' };
      if (!isSectionComplete(courseId, moduleIndex, 'keyConceptsCompleted')) 
        return { moduleIndex, sectionName: 'key concepts' };
      if (!isSectionComplete(courseId, moduleIndex, 'caseStudyCompleted')) 
        return { moduleIndex, sectionName: 'case study' };
      if (!isSectionComplete(courseId, moduleIndex, 'practicalActivityCompleted')) 
        return { moduleIndex, sectionName: 'practical activity' };
      if (!isSectionComplete(courseId, moduleIndex, 'reflectionCompleted')) 
        return { moduleIndex, sectionName: 'reflection' };
      
      return null;
    }
    
    // If no moduleIndex is provided, check all modules
    for (let i = 0; i < course.modules.length; i++) {
      const nextSection = getNextIncompleteSection(courseId, i);
      if (nextSection) return nextSection;
    }
    
    return null; // All sections in all modules are complete
  };

  // Get the next module to work on
  const getNextIncompleteModule = (courseId: number): number | null => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return null;

    for (let i = 0; i < course.modules.length; i++) {
      const moduleProgress = calculateModuleProgress(courseId, i);
      if (moduleProgress < 100) {
        return i;
      }
    }

    return null; // All modules are complete
  };

  // Check if a course is fully completed
  const isCourseComplete = (courseId: number): boolean => {
    return calculateCourseProgress(courseId) === 100;
  };

  return {
    calculateOverallProgress,
    calculateCourseProgress,
    calculateModuleProgress,
    getNextIncompleteSection,
    getNextIncompleteModule,
    isCourseComplete,
    markSectionComplete,
    resetProgress
  };
};

export default useProgress;
