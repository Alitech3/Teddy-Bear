import Link from 'next/link';

export default function Footer() {
  return(
    <footer className="bg-gray-800 text-white py-6 h-24">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          <Link href="/sitemap" className="hover:text-gray-400">Sitemap</Link>
        </div>
        <p className="text-sm">
                &copy; 2024 Teddy Bear LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}