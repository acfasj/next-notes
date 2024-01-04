'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

export function NoteListFilter({
  notes,
}: {
  notes: React.ReactElement<{ title: string }>[];
}) {
  const searchParams = useSearchParams();
  const searchText = searchParams.get('q');

  return (
    <ul className='notes-list'>
      {notes.map((child, index) => {
        const title = child.props.title;
        // console.log('title', child.props);
        if (
          !searchText ||
          (searchText && title.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          return <li key={index}>{child}</li>;
        }
        return null;
      })}
    </ul>
  );
}
