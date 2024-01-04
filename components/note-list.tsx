import { getAllNotes } from '@/lib/redis';
import { NoteListFilter } from './note-list-filter';
import { NoteItem } from './note-item';

export async function NoteList() {
  const notes = await getAllNotes();
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className='notes-empty'>{'No notes created yet!'}</div>;
  }

  return (
    <NoteListFilter
      notes={Object.entries(notes).map(([noteId, note]) => {
        return (
          <NoteItem key={noteId} noteId={noteId} note={JSON.parse(note)} />
        );
      })}
    />
  );
}
