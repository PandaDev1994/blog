import clsx from 'clsx';

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  content,
  contentTitle,
  pageTitle,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center',
        )}
      >
        <div className=' '>
          <h1 className='text-7xl/tight font-extrabold mb-4'>{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
