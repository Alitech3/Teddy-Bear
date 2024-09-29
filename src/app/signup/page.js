"use client";
import Footer from "@/components/Footer";
import { CardWithForm } from "@/components/ui/cardwithform";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <CardWithForm
          className="justify-center"
          router={router}
          Title="Sign Up"
          Description="Join Meddy :)"
        ></CardWithForm>
      </div>
      <Footer />
    </>
  );
}
