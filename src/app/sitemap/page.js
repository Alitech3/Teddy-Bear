import Link from 'next/link';

export default function Sitemap() {
  return (
    <div class='flex justify-evenly h-full items-center text-xl'>
      <Link href={'/'}>Home</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/signup'}>Signup</Link>
      <Link href={'/patient-view'}>Patient View</Link>
      <Link href={'/provider-view'}>Provider View</Link>
    </div>
  );
}
