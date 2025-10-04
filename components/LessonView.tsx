import React from 'react';
import { Course, Lesson } from '../types';
import { LockIcon, PlayIcon, ArrowLeftIcon } from './icons';

interface LessonViewProps {
  lesson: Lesson;
  course: Course;
  onSelectLesson: (lesson: Lesson, course: Course) => void;
  onBackToCourse: (course: Course) => void;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, course, onSelectLesson, onBackToCourse }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <button onClick={() => onBackToCourse(course)} className="flex items-center space-x-2 text-sky-600 hover:text-sky-500 mb-6 font-semibold">
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Voltar para o curso</span>
      </button>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content: Video Player and Description */}
        <div className="w-full lg:w-3/4">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            {/* 
              This is a placeholder for a secure video player. In a real-world scenario,
              the `videoUrl` would be a temporary, signed URL from a service like AWS S3,
              Vimeo, or Wistia to prevent unauthorized sharing and downloads. The iframe
              can also have security attributes like `sandbox` or `allow="encrypted-media"`.
            */}
            <iframe
              className="w-full h-full rounded-lg shadow-2xl border border-gray-200"
              src={lesson.videoUrl}
              title={lesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">{lesson.title}</h1>
          <p className="text-gray-600">{lesson.description}</p>
        </div>

        {/* Sidebar: Lesson List */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <h3 className="text-lg font-semibold p-4 border-b border-gray-200 text-gray-900">{course.title}</h3>
            <ul className="max-h-[70vh] overflow-y-auto">
              {course.modules.map(module => (
                <React.Fragment key={module.id}>
                  <li className="p-4 font-semibold text-sm text-gray-500 uppercase tracking-wider bg-gray-50">{module.title}</li>
                  {module.lessons.map(l => (
                    <li
                      key={l.id}
                      className={`
                        flex items-center space-x-3 p-4 border-t border-gray-200
                        ${lesson.id === l.id ? 'bg-sky-100 text-sky-700' : ''}
                        ${l.isLocked ? 'opacity-50' : 'cursor-pointer hover:bg-gray-100'}
                      `}
                      onClick={() => !l.isLocked && onSelectLesson(l, course)}
                    >
                      {l.isLocked ? <LockIcon className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <PlayIcon className={`w-5 h-5 flex-shrink-0 ${lesson.id === l.id ? 'text-sky-500' : 'text-gray-500'}`} />}
                      <span className="flex-grow text-sm text-gray-800">{l.title}</span>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;