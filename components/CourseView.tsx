import React, { useState } from 'react';
import { Course, Lesson, Module } from '../types';
import { ChevronDownIcon, LockIcon, PlayIcon, ArrowLeftIcon } from './icons';

interface CourseViewProps {
  course: Course;
  onSelectLesson: (lesson: Lesson, course: Course) => void;
  onBack: () => void;
}

const ModuleAccordion: React.FC<{ module: Module; onSelectLesson: (lesson: Lesson, course: Course) => void; course: Course }> = ({ module, onSelectLesson, course }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-300"
            >
                <span>{module.title}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="bg-gray-50/50">
                    <ul>
                        {module.lessons.map((lesson, index) => (
                            <li key={lesson.id} className={`border-t border-gray-200 ${lesson.isLocked ? 'opacity-60' : 'cursor-pointer hover:bg-gray-100'}`} onClick={() => !lesson.isLocked && onSelectLesson(lesson, course)}>
                                <div className="flex items-center p-5 space-x-4">
                                    {lesson.isLocked ? <LockIcon className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <PlayIcon className="w-5 h-5 text-sky-500 flex-shrink-0" />}
                                    <div className="flex-grow">
                                        <p className="text-gray-800">{lesson.title}</p>
                                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const CourseView: React.FC<CourseViewProps> = ({ course, onSelectLesson, onBack }) => {
  return (
    <div className="container mx-auto px-6 py-12">
        <button onClick={onBack} className="flex items-center space-x-2 text-sky-600 hover:text-sky-500 mb-8 font-semibold">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Voltar para os cursos</span>
        </button>
      <div className="lg:flex lg:space-x-12">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">{course.title}</h2>
          <p className="text-lg text-gray-500 mb-4">por {course.instructor}</p>
          <p className="text-gray-600 leading-relaxed">{course.description}</p>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="space-y-4">
            {course.modules.map(module => (
              <ModuleAccordion key={module.id} module={module} onSelectLesson={onSelectLesson} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;