import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';
import { DocumentTextIcon, SparklesIcon, CubeTransparentIcon } from './icons';

interface DashboardProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

const Feature: React.FC<{ icon: React.ReactNode; title: string; children: string }> = ({ icon, title, children }) => (
    <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-4 mb-3">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-500/10 text-sky-500 rounded-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ courses, onSelectCourse }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Desvende a Medicina com o <span className="text-sky-500">Método Zanatta</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              Aulas, esquemas visuais e 15 anos de experiência para garantir a sua aprovação. Estude com quem mais entende do assunto.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#cursos" className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Ver Cursos
              </a>
              <a href="#diferenciais" className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg transition-all duration-300">
                Nossos Diferenciais
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop" 
              alt="Medical professional studying"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="diferenciais" className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
                <Feature icon={<DocumentTextIcon className="w-6 h-6"/>} title="Apuntes de Qualidade">
                    Facilite seu aprendizado com esquemas visuais e materiais de apoio desenhados para uma fixação de conteúdo eficiente.
                </Feature>
                <Feature icon={<SparklesIcon className="w-6 h-6"/>} title="Experiência Comprovada">
                    Aprenda com a Profa. Patrícia Zanatta, com 15 anos de experiência e milhares de alunos aprovados.
                </Feature>
                <Feature icon={<CubeTransparentIcon className="w-6 h-6"/>} title="Flexibilidade Total">
                    Aulas gravadas para ver quando quiser, encontros presenciais e valor acessível para sua comodidade.
                </Feature>
            </div>
        </div>
      </section>

      {/* About Professor Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <img 
                        src="https://picsum.photos/seed/zanatta/500/500" 
                        alt="Professora Patrícia Zanatta" 
                        className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
                    />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Conheça sua Mentora: Profa. Patrícia Zanatta</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Com uma paixão contagiante por ensinar e uma carreira de 15 anos dedicada à preparação de futuros médicos, a Profa. Patrícia Zanatta desenvolveu um método único que já guiou milhares de alunos à aprovação. Sua didática combina profundidade teórica com a simplicidade dos esquemas visuais, transformando temas complexos em conhecimento sólido e acessível.
                    </p>
                    <div className="flex justify-center md:justify-start gap-8">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-sky-500">15+</span>
                            <span className="text-gray-600">Anos de Experiência</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-sky-500">1000+</span>
                            <span className="text-gray-600">Aprovações</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Nossos Cursos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Conteúdo completo e direcionado para sua aprovação em Anatomia, Histologia e Bioquímica.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-sky-500 text-white py-20">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-10">O que nossos aprovados dizem</h2>
              <div className="max-w-3xl mx-auto space-y-8">
                  <div className="bg-white/20 p-6 rounded-lg">
                      <p className="italic">"O método com esquemas visuais da Profa. Zanatta foi um divisor de águas na minha preparação. Finalmente consegui entender anatomia de verdade!"</p>
                      <h4 className="font-bold mt-4">- Carlos M., Aprovado em Medicina</h4>
                  </div>
                  <div className="bg-white/20 p-6 rounded-lg">
                      <p className="italic">"Os 'apuntes' são perfeitos, muito completos e fáceis de revisar. Melhor investimento que fiz nos meus estudos. Recomendo de olhos fechados!"</p>
                      <h4 className="font-bold mt-4">- Juliana P., Aluna do Ciclo Básico</h4>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Dashboard;