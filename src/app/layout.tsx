import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The blog',
    template: '%s | The blog',
  },
  description: 'Este é um blog com nect.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={'antialiased'}>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
