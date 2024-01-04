import React, { Suspense } from 'react';
import Link from 'next/link';
import { NoteList } from '@/components/note-list';
import { EditButton } from './edit-button';
import { NoteListSkeleton } from './note-list-skeleton';
import { SidebarSearch } from './sidebar-search';

export async function Sidebar() {
  return (
    <>
      <section className='col sidebar'>
        <Link href={'/'} className='link--unstyled'>
          <section className='sidebar-header'>
            <img
              className='logo'
              src='/logo.svg'
              width='22px'
              height='20px'
              alt=''
              role='presentation'
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className='sidebar-menu' role='menubar'>
          <SidebarSearch />
          <EditButton>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <NoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
}
