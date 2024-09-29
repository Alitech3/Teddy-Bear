import Link from "next/link";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex flex-col w-full overflow-y-auto">
      <div className="flex justify-end items-center">
        <Link
          className="mx-3 mt-4 mr-10 text-lg hover:text-blue-900 px-2 py-1 font-bold h-1/2 text-Text"
          href={"./login"}
          id="Login"
        >
          Log In
        </Link>
        <Link
          className="mx-3 mt-4 mr-10 text-lg hover:text-blue-900 px-2 py-1 font-bold h-1/2 text-Text"
          href={"./signup"}
          id="Signup"
        >
          Sign Up
        </Link>
      </div>
      <main className="h-screen text-Text flex flex-col w-full place-items-center justify-center space-y-10">
        <h1 className="text-9xl">404 Error</h1>
        <p className="text-3xl">Looks like someone needs a hug :c</p>
        <Button asChild>
          <Link href="/">Go Back Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
