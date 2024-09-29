"use client";
import Footer from "@/components/Footer";
import { CardWithForm } from "@/components/ui/cardwithform";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <CardWithForm
          Title='Login'
          Description='Meddys got you :)'
          router={router}></CardWithForm>
      </div>
      <Footer />
    </>
  );
}
