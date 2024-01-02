import { Note } from '@/shared';
import dayjs from 'dayjs';
import { EditButton } from './edit-button';
import { NotePreview } from './note-preview';

export function Note({ noteId, note }: { noteId: string; note: Note }) {
  const { title, content, updateTime } = note;

  return (
    <div className='note'>
      <div className='note-header'>
        <h1 className='note-title'>{title}</h1>
        <div className='note-menu' role='menubar'>
          <small className='note-updated-at' role='status'>
            Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
          </small>
          <EditButton noteId={noteId}>Edit</EditButton>
        </div>
      </div>
      <NotePreview>{content}</NotePreview>
    </div>
  );
}
