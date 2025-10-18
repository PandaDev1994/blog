import { PostHeading } from '../PostHeading';

type PostDescriptionProps = {
  date: string;
  title: string;
  description: string;
  url: string;
};

export function PostDescription({
  date,
  description,
  title,
  url,
}: PostDescriptionProps) {
  return (
    <div className='flex flex-col gap-2 sm:justify-center'>
      <time dateTime='2025-4-20' className='text-slate-600 text-sm/tight'>
        {date}
      </time>
      <PostHeading url={url} as='h2'>
        {title}
      </PostHeading>
      {description}
    </div>
  );
}
