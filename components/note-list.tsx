import { Note } from '@/shared';

export async function NoteList({ notes }: { notes: Record<string, string> }) {
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className='notes-empty'>{'No notes created yet!'}</div>;
  }

  return (
    <ul className='notes-list'>
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(note) as Note;
        return (
          <li key={noteId}>
            <header className='sidebar-note-header'>
              <strong>{title}</strong>
              <small>{updateTime}</small>
            </header>
          </li>
        );
      })}
    </ul>
  );
}
