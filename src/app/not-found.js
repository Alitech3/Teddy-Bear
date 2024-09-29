import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h1 className="flex text-9xl pb-20">404 Error</h1>
      <p className="flex text-3xl pb-7">
        Looks like someone made a fucky-wucky :c
      </p>
      <Button asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
