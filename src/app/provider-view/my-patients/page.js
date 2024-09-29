'use client';
import PatientCard from '@/components/PatientCard';
import ProviderLayout from '@/components/ProviderLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MyPatients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Calling the same app's API via relative URL
        const patientsData = await fetch('/api/patients', {
          method: 'GET',
        });

        if (!patientsData.ok) {
          throw new Error('Failed to fetch');
        }

        const json = await patientsData.json();
        setData(json.results); // Assuming the data is in the `data` field
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ProviderLayout>
      {data.length > 0 && (
        <div className='flex flex-col gap-10 pt-5'>
          {data.map(
            (d, index) =>
              index <= 10 && (
                <Link key={index} href={`/provider-view/my-patients/${d.id}`}>
                  <PatientCard patient={d} />
                </Link>
              )
          )}
        </div>
      )}
    </ProviderLayout>
  );
}
