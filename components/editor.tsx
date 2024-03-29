'use client';

import { useState } from 'react';
import { NotePreview } from '@/components/note-preview';
import { useFormState } from 'react-dom';
import { saveNote, deleteNote } from '../app/actions';
import { EditorFormState } from '@/shared';
import { SaveButton } from '@/components/save-button';
import { DeleteButton } from '@/components/delete-button';

const initialState: EditorFormState = {
  message: null,
};
export function Editor({
  noteId,
  initialTitle,
  initialBody,
}: {
  noteId: string | null;
  initialTitle: string;
  initialBody: string;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const isDraft = !noteId;

  const [saveState, saveFormAction] = useFormState<EditorFormState, FormData>(
    saveNote,
    initialState
  );
  const [delState, delFormAction] = useFormState<EditorFormState, FormData>(
    deleteNote,
    initialState
  );

  return (
    <div className='note-editor'>
      <form className='note-editor-form' autoComplete='off'>
        <div className='note-editor-menu' role='menubar'>
          <input type='hidden' name='noteId' value={noteId || ''} />
          <SaveButton formAction={saveFormAction} />
          <DeleteButton isDraft={isDraft} formAction={delFormAction} />
        </div>
        <div className='note-editor-menu'>{saveState?.message}</div>
        <div style={{ textAlign: 'right' }}>
          {saveState?.errors &&
            saveState.errors.map((item) => (
              <p key={item.path.toString()}>
                {item.path} {item.message}
              </p>
            ))}
        </div>
        <label className='offscreen' htmlFor='note-title-input'>
          Enter a title for your note
        </label>
        <input
          id='note-title-input'
          name='title'
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className='offscreen' htmlFor='note-body-input'>
          Enter the body for your note
        </label>
        <textarea
          value={body}
          name='body'
          id='note-body-input'
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className='note-editor-preview'>
        <div className='label label--preview' role='status'>
          Preview
        </div>
        <h1 className='note-title'>{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}
