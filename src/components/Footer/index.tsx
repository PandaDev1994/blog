import Link from 'next/link';

export function Footer() {
  return (
    <footer className='py-10 text-center'>
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} </span>
        <Link
          className='text-slate-900 hover:text-slate-600 transition '
          href='/'
        >
          - The Blog
        </Link>
      </p>
    </footer>
  );
}
