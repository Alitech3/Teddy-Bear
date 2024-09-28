'use client';
import { CardWithForm } from "@/components/ui/cardwithform";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-3  justify-center">

        <CardWithForm className = "justify-center" router={router}></CardWithForm>
    </div>
    );
}
