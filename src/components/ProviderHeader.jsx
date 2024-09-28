import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function ProviderHeader({props}) {
  return (
    <header className="bg-Primary text-white py-4 mr mb-8">
      <div className="container mx-auto flex justify-between items-center pl-5 pr-5">
        <h1 className="text-xl font-bold">My Patients</h1>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li className="hover:text-gray-200"><Link href="/provider-view">Home</Link></li>
            <li><Button asChild className="bg-Primary hover:bg-Text hover:text-Primary outline outline-1 outline-Text"><Link href="/">Log Out</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
