import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);


export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => {
    return undefined;
  });

  return !post ? notFound() : post;
});

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
