import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectCourse }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={() => onSelectCourse(course)}
    >
      <img className="w-full h-48 object-cover" src={course.thumbnailUrl} alt={course.title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">{course.title}</h3>
        <p className="text-sm text-gray-500">por {course.instructor}</p>
      </div>
    </div>
  );
};

export default CourseCard;