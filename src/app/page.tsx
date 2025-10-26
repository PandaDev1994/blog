import { PostFeature } from '@/components/Post/PostFeature';
import { PostsList } from '@/components/Post/postsList';
import { SpinLoader } from '@/components/SpinLoader/idex';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
        <PostFeature />
        <PostsList />
      </Suspense>
    </>
  );
}
