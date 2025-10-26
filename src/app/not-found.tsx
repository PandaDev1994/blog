import ErrorMessage from '@/components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        pageTitle={'Página não encontrada'}
        contentTitle={'404'}
        content={
          'Error 404 - A página que está tentando acessar não existe nesse site'
        }
      />
    </>
  );
}
