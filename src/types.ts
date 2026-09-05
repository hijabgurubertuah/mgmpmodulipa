import React from 'react';
import { LucideIcon } from 'lucide-react';

export type Question = {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
};

export type Material = {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
  content: string;
  videoUrl?: string;
  quiz: Question[];
  Component?: React.ComponentType;
};

export type Theme = {
  name: string;
  bgMain: string;
  bgSidebar: string;
  accent: string;
  textMain: string;
  textSidebar: string;
  isDark: boolean;
};

export type QuizAttempt = {
  materialId: string;
  score: number;
  date: string;
};

export type UserProgress = {
  completedMaterials: string[]; // Array of material IDs
  isIntroductionCompleted: boolean;
  highScores: Record<string, number>; // materialId -> score
  quizHistory: QuizAttempt[];
  username: string;
};
