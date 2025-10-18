import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog',
  description: 'Este é um blog com nect.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
