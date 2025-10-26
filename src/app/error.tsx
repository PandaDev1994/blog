'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle={'Slug'}
      contentTitle={'Error'}
      content={
        <button onClick={() => reset()}>Clique para tentar novamente</button>
      }
    />
  );
}
