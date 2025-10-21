import { PostHeading } from '../PostHeading';

type PostDescriptionProps = {
  date: string;
  title: string;
  description: string;
  url: string;
  titleTime: string;
};

export function PostDescription({
  date,
  description,
  title,
  url,
  titleTime,
}: PostDescriptionProps) {
  return (
    <div className='flex flex-col gap-2 sm:justify-center'>
      <time
        dateTime='2025-4-20'
        className='text-slate-600 text-sm/tight mt-3'
        title={titleTime}
      >
        {date}
      </time>
      <PostHeading url={url} as='h2'>
        {title}
      </PostHeading>
      {description}
    </div>
  );
}
