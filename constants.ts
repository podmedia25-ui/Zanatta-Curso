import { Course } from './types';

export const COURSES_DATA: Course[] = [
  {
    id: 'anatomia-humana',
    title: 'Anatomia Humana Descomplicada',
    instructor: 'Profa. Patrícia Zanatta',
    description: 'Explore a estrutura do corpo humano com um método visual e didático. Nossos apuntes e esquemas facilitam a compreensão dos sistemas anatômicos mais complexos.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a1c8?q=80&w=800&auto=format&fit=crop',
    modules: [
      {
        id: 'm1',
        title: 'Módulo 1: Sistema Esquelético e Articular',
        lessons: [
          { id: 'l1-1', title: 'Introdução à Anatomia', duration: '15:30', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: false, description: 'Conceitos fundamentais e terminologia anatômica.' },
          { id: 'l1-2', title: 'Ossos do Crânio e da Face', duration: '22:10', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: false, description: 'Estudo detalhado dos ossos que compõem a cabeça.' },
          { id: 'l1-3', title: 'Coluna Vertebral e Tórax', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: true, description: 'Análise das vértebras, costelas e esterno.' },
        ],
      },
    ],
  },
  {
    id: 'histologia-essencial',
    title: 'Histologia Essencial: Dos Tecidos aos Sistemas',
    instructor: 'Profa. Patrícia Zanatta',
    description: 'Mergulhe no mundo microscópico dos tecidos. Com nossos apuntes ricos em detalhes e esquemas visuais, você dominará a histologia de forma definitiva.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578496479532-35d2d3ad3ea3?q=80&w=800&auto=format&fit=crop',
    modules: [
      {
        id: 'm2',
        title: 'Módulo 1: Tecidos Fundamentais',
        lessons: [
          { id: 'l2-1', title: 'Tecido Epitelial', duration: '18:45', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: false, description: 'Classificação e funções dos epitélios de revestimento e glandulares.' },
          { id: 'l2-2', title: 'Tecido Conjuntivo', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: true, description: 'Estudo das células, fibras e matriz extracelular.' },
        ],
      },
    ],
  },
  {
    id: 'bioquimica-medica',
    title: 'Bioquímica Médica Aplicada',
    instructor: 'Profa. Patrícia Zanatta',
    description: 'Entenda as bases moleculares da vida e sua aplicação na medicina. Aprenda sobre metabolismo, sinalização celular e muito mais com uma didática clara e objetiva.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1628858489644-37c885614bde?q=80&w=800&auto=format&fit=crop',
    modules: [
        {
          id: 'm3',
          title: 'Módulo 1: Metabolismo de Carboidratos',
          lessons: [
            { id: 'l3-1', title: 'Glicólise e Gliconeogênese', duration: '20:55', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: false, description: 'As principais vias do metabolismo da glicose.' },
            { id: 'l3-2', title: 'Ciclo de Krebs', duration: '26:30', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk', isLocked: true, description: 'O centro do metabolismo celular.' },
          ],
        },
      ],
  },
];
