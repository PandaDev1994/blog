import { PostDate } from '@/components/PostDate';
import { PostHeading } from '../PostHeading';

type PostDescriptionProps = {
  date: string;
  title: string;
  description: string;
  url: string;
  as: 'h1' | 'h2';
};

export function PostDescription({
  date,
  description,
  title,
  url,
  as,
}: PostDescriptionProps) {
  return (
    <div className='flex flex-col gap-2 sm:justify-center'>
      <PostDate date={date} />
      <PostHeading url={url} as={as}>
        {title}
      </PostHeading>
      {description}
    </div>
  );
}
