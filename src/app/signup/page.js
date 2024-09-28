'use client';
import { CardWithForm } from '@/components/ui/cardwithform';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex h-full items-center justify-center">
      <CardWithForm className = "justify-center" router={router} Title='Signup' Description='Join Meddy :)'></CardWithForm>
    </div>
  );
}
