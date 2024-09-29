'use client';
import ProviderSidebar from '@/components/ProviderSidebar';
import data from '../../../data/patients.json';
import PatientCard from '@/components/PatientCard';
import ProviderLayout from '@/components/ProviderLayout';
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Home() {
  const [dat, setData] = useState();

  console.log('hey');

  useEffect(() => {
    fetch('https://meddybear.co/api/patients').then((e) => console.log(e));
  })


  return (
    <>
      <ProviderLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-screen">
          {data.map(
            (d, index) =>
              index <= 10 && (
                <Link key={d.id} href={`/provider-view/my-patients/${d.id}`}>
                  <PatientCard patient={d} />
                </Link>
              )
          )}
        </div>
      </ProviderLayout>
    </>
  );
}
