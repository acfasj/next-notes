import type { ZodIssue } from 'zod';
export interface Note {
  title: string;
  snut: string;
  content: string;
  updateTime: number;
}

export type EditorFormState = {
  message?: string | null;
  errors?: ZodIssue[];
} | void;
