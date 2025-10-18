import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostFeature } from '@/components/Post/PostFeature';
import { PostsList } from '@/components/Post/postsList';
import { SpinLoader } from '@/components/SpinLoader/idex';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeature />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
