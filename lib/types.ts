export type ContentType = 'course' | 'webinar' | 'siksha-bite' | 'resource' | 'e-book' | 'competency' | 'role' | 'article';

export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatar: string;
  bio: string;
  credentials: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz' | 'practical';
  videoUrl?: string;
  content?: string;
  quiz?: QuizQuestion[];
  isCompleted?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  instructor: Speaker;
  targetRoles: string[];
  topics: string[];
  rating: number;
  enrolledCount: number;
  modules: Module[];
  certificateAvailable: boolean;
  learningObjectives: string[];
  prerequisites: string[];
  relatedBiteIds?: string[];
  relatedWebinarIds?: string[];
  relatedResourceIds?: string[];
}

export interface Webinar {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  duration: string;
  speaker: Speaker;
  status: 'upcoming' | 'live' | 'recorded';
  recordingUrl?: string;
  learningObjectives: string[];
  whoShouldAttend: string[];
  agenda: { time: string; topic: string }[];
  registeredCount: number;
  topics: string[];
  relatedCourseIds?: string[];
  relatedResourceIds?: string[];
}

export interface SikshaBite {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  keyTakeaways: string[];
  duration: string;
  author: Speaker;
  role: string;
  topic: string;
  difficulty: 'Basic' | 'Intermediate' | 'Expert';
  thumbnail: string;
  videoUrl?: string;
  publishedDate: string;
  relatedCourseId?: string;
}

export interface Competency {
  id: string;
  code: string;
  title: string;
  domain: string;
  role: string;
  type: 'Knowledge' | 'Skill';
  description: string;
  rubricCriteria: string[];
  assessmentMethod: string;
}

export interface AopRole {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  iconName: string;
  overview: string;
  keyResponsibilities: string[];
  competenciesCount: number;
  knowledgeCompetencies: Competency[];
  skillCompetencies: Competency[];
  recommendedCourseIds: string[];
  relatedBiteIds: string[];
  relatedWebinarIds: string[];
  relatedResourceIds: string[];
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  type: 'Teaching Slide' | 'Handout' | 'Video' | 'Log Form' | 'Question Bank' | 'Skill Assessment' | 'Interactive Guide';
  format: 'PDF' | 'PPTX' | 'MP4' | 'DOCX';
  fileSize: string;
  topic: string;
  targetRole: string;
  level: 'Knowledge' | 'Skill';
  description: string;
  downloadCount: number;
  author: string;
  publishedDate: string;
}

export interface EBook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  coverImage: string;
  coverBg: string;
  description: string;
  pagesCount: number;
  tableOfContents: string[];
  downloadCount: number;
  targetRoles: string[];
  publishedYear: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Speaker;
  publishedDate: string;
  readTime: string;
  category: string;
  image: string;
}

export interface SearchResultItem {
  id: string;
  type: ContentType;
  title: string;
  subtitle: string;
  url: string;
  badge: string;
}
