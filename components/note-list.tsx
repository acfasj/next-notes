import { getAllNotes } from '@/lib/redis';
import NoteItem from './note-item';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export async function NoteList() {
  await sleep(10000);
  const notes = await getAllNotes();
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className='notes-empty'>{'No notes created yet!'}</div>;
  }

  return (
    <ul className='notes-list'>
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <NoteItem noteId={noteId} note={JSON.parse(note)} />
          </li>
        );
      })}
    </ul>
  );
}
