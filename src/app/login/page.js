'use client';
import { CardWithForm } from '@/components/ui/cardwithform';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex h-full justify-center items-center">
      <CardWithForm Title = "Login" Description= "Login to Meddy" router={router}></CardWithForm>
    </div>
  );
}