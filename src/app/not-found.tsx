import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada</title>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center',
        )}
      >
        <div className=' '>
          <h1 className='text-7xl/tight font-extrabold mb-4'>404</h1>
          <p>
            Error 404 - A página que está tentando acessar não existe nesse site
          </p>
        </div>
      </div>
    </>
  );
}
