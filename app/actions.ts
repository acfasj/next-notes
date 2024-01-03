'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { EditorFormState } from '@/shared';
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  content: z.string().min(1, '请填写内容').max(100, '字数最多 100'),
});
const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));
export async function saveNote(prevState: EditorFormState, formData: FormData) {
  const noteId = formData.get('noteId') as string;
  const data = {
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  };

  // 校验数据
  const validated = schema.safeParse(data);
  if (!validated.success) {
    return {
      errors: validated.error.issues,
    };
  }

  await sleep(2000);

  const str = JSON.stringify(data);

  if (noteId) {
    await updateNote(noteId, str);
  } else {
    await addNote(str);
  }

  return { message: `Add Success!` };
}

export async function deleteNote(
  prevState: EditorFormState,
  formData: FormData
) {
  const noteId = formData.get('noteId') as string;
  delNote(noteId);
  redirect('/');
}
