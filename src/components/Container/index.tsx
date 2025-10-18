type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='bg-slate-100 min-h-screen text-slate-900 dark:bg-slate-900 dark:text-slate-100 '>
      <div className='items-center justify-center max-w-screen-lg px-8 mx-auto'>
        {children}
      </div>
    </div>
  );
}
