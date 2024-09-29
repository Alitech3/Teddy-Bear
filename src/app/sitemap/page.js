import Link from 'next/link';

export default function Sitemap() {
  return (
    <div className='flex justify-evenly h-screen text-xl mx-20 text-Text'>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/contact'}>Contact</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/signup'}>Signup</Link>
      <Link href={'/not-found'}>404 Not Found</Link>
      <Link href={'/patient-view'}>Patient View</Link>
      <Link href={'/patient-view/find-a-provider'}>-- Find a Provider</Link>
      <Link href={'/patient-view/medical-history'}>-- Medical History</Link>
      <Link href={'/patient-view/my-medications'}>-- My Medications</Link>
      <Link href={'/provider-view'}>Provider View</Link>
      <Link href={'/provider-view/prescribe'}>-- Prescribe</Link>
    </div>
  );
}
