import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <Link href={'/login'}>Home</Link>
      <Link href={'/signup'}>Home</Link>
      <Link href={'/patient-view'}>Home</Link>
      <Link href={'/provider-view'}>Home</Link>
    </div>
  );
}
