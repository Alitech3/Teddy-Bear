
import data from '../../../data/patients.json';
import PatientCard from '@/components/PatientCard';
import ProviderHeader from '@/components/ProviderHeader';

export default function Home() {

  return (
    <>
      <ProviderHeader />
      <div className="flex flex-row flex-wrap gap-10">
        {data.map((d, index) => (
          <PatientCard key={index} patient={d} />
        ))}
      </div>
    </>

  );
}