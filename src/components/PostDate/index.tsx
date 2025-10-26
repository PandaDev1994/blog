import { formatDateTime, formatRelativeDate } from '@/utils/format-datetime';

type PostDateProps = {
  date: string;
};

export function PostDate({ date }: PostDateProps) {
  const parsed = new Date(date);

  if (isNaN(parsed.getTime())) {
    console.warn('Data inválida recebida em <PostDate />:', date);
    return null;
  }
  return (
    <time
      dateTime={date}
      className='text-slate-600 text-sm/tight mt-3'
      title={formatRelativeDate(date)}
    >
      {formatDateTime(date)}
    </time>
  );
}
