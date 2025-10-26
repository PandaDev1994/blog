import clsx from 'clsx';
import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMkDownProps = {
  mkDown: string;
};

export function SafeMkDown({ mkDown }: SafeMkDownProps) {
  return (
    <div
      className={clsx(
        'prose prose-slate',
        'w-full',
        'max-w-none',
        'overflow-hidden',
        'prose-a:no-underline',
        'prose-a:transition',
        'prose-a:text-blue-500',
        'prose-a:hover:text-blue-700',
        'prose-a:hover:underline',
        'prose-img:mx-auto',
        'md:prose-sm',
        'lg:prose-lg',
      )}
    >
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return '';

            return (
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[600px]' {...props} />
              </div>
            );
          },
        }}
      >
        {mkDown}
      </ReactMarkDown>
    </div>
  );
}
