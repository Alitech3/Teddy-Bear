'use client';
import { CardWithForm } from "@/components/ui/cardwithform";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3">
    <CardWithForm router={router}></CardWithForm>
    </div>
    );
}
