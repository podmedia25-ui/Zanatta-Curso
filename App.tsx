import React, { useState } from 'react';
import { Course, Lesson, View } from './types';
import { COURSES_DATA } from './constants';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseView from './components/CourseView';
import LessonView from './components/LessonView';
import { IZLogo } from './components/icons';

interface AppState {
    view: View;
    selectedCourse: Course | null;
    selectedLesson: Lesson | null;
}

const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <IZLogo className="h-10 w-10" />
                    <span className="font-bold text-xl">Instituto Zanatta</span>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Instituto Zanatta. Todos os direitos reservados.</p>
                    <p className="text-sm text-gray-500">A sua jornada para o sucesso começa aqui.</p>
                </div>
            </div>
        </div>
    </footer>
);


const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        view: 'DASHBOARD',
        selectedCourse: null,
        selectedLesson: null,
    });

    const handleSelectCourse = (course: Course) => {
        window.scrollTo(0, 0);
        setState({ view: 'COURSE', selectedCourse: course, selectedLesson: null });
    };

    const handleSelectLesson = (lesson: Lesson, course: Course) => {
        window.scrollTo(0, 0);
        setState({ view: 'LESSON', selectedCourse: course, selectedLesson: lesson });
    };

    const handleBackToDashboard = () => {
        window.scrollTo(0, 0);
        setState({ view: 'DASHBOARD', selectedCourse: null, selectedLesson: null });
    };
    
    const handleBackToCourse = (course: Course) => {
        window.scrollTo(0, 0);
        setState({ view: 'COURSE', selectedCourse: course, selectedLesson: null });
    };

    const renderContent = () => {
        switch (state.view) {
            case 'DASHBOARD':
                return <Dashboard courses={COURSES_DATA} onSelectCourse={handleSelectCourse} />;
            case 'COURSE':
                if (state.selectedCourse) {
                    return <CourseView course={state.selectedCourse} onSelectLesson={handleSelectLesson} onBack={handleBackToDashboard} />;
                }
                return null;
            case 'LESSON':
                if (state.selectedLesson && state.selectedCourse) {
                    return <LessonView lesson={state.selectedLesson} course={state.selectedCourse} onSelectLesson={handleSelectLesson} onBackToCourse={handleBackToCourse}/>;
                }
                return null;
            default:
                return <Dashboard courses={COURSES_DATA} onSelectCourse={handleSelectCourse} />;
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;