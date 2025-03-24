import React from 'react';
import { Course } from '../../data/courses';
import useProgress from '../../hooks/useProgress';
import { useLMS } from '../../contexts/LMSContext';
import ProgressBar from '../common/ProgressBar';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { setActiveView, setActiveModule, setActiveSection } = useLMS();
  const { calculateCourseProgress, getNextIncompleteModule } = useProgress();
  
  const progress = calculateCourseProgress(course.id);
  const nextModuleIndex = getNextIncompleteModule(course.id);
  
  const handleCourseClick = () => {
    // If there's an incomplete module, go to that one, otherwise start from the beginning
    const moduleToOpen = nextModuleIndex !== null ? nextModuleIndex : 0;
    setActiveModule({ courseId: course.id, moduleIndex: moduleToOpen });
    setActiveSection('introduction');
    setActiveView('course');
  };
  
  // Determine the status badge text and color
  const getBadgeInfo = () => {
    if (progress === 0) {
      return { text: 'Not Started', color: 'gray' };
    } else if (progress === 100) {
      return { text: 'Completed', color: 'green' };
    } else {
      return { text: 'In Progress', color: 'indigo' };
    }
  };
  
  const badge = getBadgeInfo();
  
  // Get background color based on course image type
  const getBackgroundColor = () => {
    switch (course.image) {
      case 'foundation':
        return 'bg-green-100';
      case 'beginner':
        return 'bg-red-100';
      case 'intermediate':
        return 'bg-blue-100';
      case 'advanced':
        return 'bg-purple-100';
      default:
        return 'bg-gray-100';
    }
  };
  
  // Generate a more detailed description based on the course level
  const getDetailedDescription = () => {
    switch (course.level) {
      case 'Foundation':
        return 'Essential knowledge for understanding the core principles that will serve as the basis for all future learning.';
      case 'Beginner':
        return 'Practical introduction with hands-on activities designed for those new to the Floorbook methodology.';
      case 'Intermediate':
        return 'Advanced techniques building on foundational knowledge for experienced practitioners looking to enhance their skills.';
      case 'Advanced':
        return 'Expert-level content for mastering complex implementation strategies and mentoring others in the approach.';
      default:
        return course.description;
    }
  };
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCourseClick}
    >
      <div className={`h-40 ${getBackgroundColor()} flex items-center justify-center`}>
        <div className="text-center p-4">
          <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{course.level}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-2">
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full bg-${badge.color}-100 text-${badge.color}-800`}>
              {badge.text}
            </span>
            <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
              {course.level}
            </span>
          </div>
          <span className="text-sm text-gray-600">{progress}%</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{getDetailedDescription()}</p>
        
        <ProgressBar 
          progress={progress} 
          height={6} 
          showLabel={false}
          color={progress === 100 ? 'green' : 'indigo'}
        />
        
        {nextModuleIndex !== null && progress > 0 && (
          <div className="mt-3 text-xs text-indigo-600">
            <span className="font-medium">Continue with Module {nextModuleIndex + 1}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
