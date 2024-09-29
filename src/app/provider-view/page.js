import ProviderSidebar from '@/components/ProviderSidebar';
import data from '../../../data/patients.json';
import PatientCard from '@/components/PatientCard';
import ProviderLayout from '@/components/ProviderLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ProviderLayout>
        <div className='flex flex-col gap-10 pt-5'>
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
