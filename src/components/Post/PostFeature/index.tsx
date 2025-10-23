import { PostCoverImage } from '../PostCoverImage';
import { PostDescription } from '../PostDescription';
import { formatDateTime, formatRelativeDate } from '@/utils/format-datetime';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostFeature() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
   const postLink = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 sm:grid-cols-2 mb-16 group'>
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
        date={formatDateTime(post.updatedAt)}
        title={post.title}
        description={post.content}
        url={''}
        titleTime={formatRelativeDate(post.createdAt)}
        as='h1'
      />
    </section>
  );
}
