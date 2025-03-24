import React from 'react';
import { useLMS } from '../../contexts/LMSContext';
import CourseCard from './CourseCard';

const CourseGrid: React.FC = () => {
  const { courses } = useLMS();
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Learning Path</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
