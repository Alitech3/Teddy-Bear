import data from '../../../data/patients.json';
import Header from '@/components/header';
import PatientCard from '@/components/PatientCard';

export default function Home() {

  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap gap-10">
        {data.map((d, index) => (
          <PatientCard key={index} patient={d} />
        ))}
      </div>
    </>

  );
}