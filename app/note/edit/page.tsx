import { Editor } from '@/components/editor';

export default async function EditPage() {
  return <Editor noteId={null} initialTitle='Untitled' initialBody='' />;
}
