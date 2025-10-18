import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeature() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 sm:grid-cols-2 mb-16 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1220,
          height: 720,
          alt: 'titulo',
          src: '/images/bryen_0.png',
        }}
      />
      <div className='flex flex-col gap-2 sm:justify-center'>
        <time dateTime='2025-4-20' className='text-slate-600 text-sm/tight'>
          14/04/1994
        </time>
        <PostHeading url={postLink} as='h1'>
          Lorem ipsum dolor sit
        </PostHeading>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique enim
        qui laboriosam quaerat eos eligendi iure! Voluptatibus dolorum nesciunt
        sit similique saepe accusantium iure ducimus consequatur odio. Vero,
        repellendus voluptatibus.
      </div>
    </section>
  );
}
