import { PostCoverImage } from '../PostCoverImage';
import { PostDescription } from '../PostDescription';
import clsx from 'clsx';

import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPostsCached();

  return (
    <div
      className={clsx(
        'grid grid-cols- gap-8',
        ' sm:grid sm:grid-cols-2',
        'lg:grid lg:grid-cols-3',
      )}
    >
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className='flex flex-col group' key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1220,
                height: 720,
                alt: post.title,
                src: post.coverImageUrl,
              }}
            />
            <PostDescription
              date={post.createdAt}
              title={post.title}
              description={post.excerpt}
              url={postLink}
              as={'h2'}
            />
          </div>
        );
      })}
    </div>
  );
}
