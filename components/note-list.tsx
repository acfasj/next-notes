import NoteItem from './note-item';

export async function NoteList({ notes }: { notes: Record<string, string> }) {
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
