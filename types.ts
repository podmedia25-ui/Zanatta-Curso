export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isLocked: boolean;
  description: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  thumbnailUrl: string;
  modules: Module[];
}

export type View = 'DASHBOARD' | 'COURSE' | 'LESSON';