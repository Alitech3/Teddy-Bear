
import data from '../../../data/patients.json';
import PatientCard from '@/components/PatientCard';
import ProviderSidebar from '@/components/ProviderSidebar';

export default function Home() {

  return (
    <div className='flex flex-row '>
      <ProviderSidebar/>
      <div className="flex flex-col gap-10 h-screen overflow-auto pt-5">
        {data.map((d, index) => ( index <= 10 &&
          <PatientCard key={index} patient={d} />
        ))}
      </div>
    </div>

  );
}