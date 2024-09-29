import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001861] text-white h-20 pb-6">
      <div className="container mx-auto text-center flex flex-col gap-2 pt-3">
        <div className="flex justify-center space-x-6 my-auto">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/sitemap" className="hover:text-gray-400">
            Sitemap
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 Meddy LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
