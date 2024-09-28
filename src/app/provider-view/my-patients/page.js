import data from '../../../../data/patients.json';
import PatientCard from '@/components/PatientCard';
import ProviderLayout from "@/components/ProviderLayout";

export default function MyPatients() {
    return(
        <>
        <ProviderLayout>
            <div className='flex h-screen'>
                <div className="flex flex-col w-full gap-10 overflow-y-scroll pt-5">
                {data.map((d, index) => ( index <= 10 &&
                    <PatientCard key={index} patient={d} />
                ))}
                </div>
            </div>
        </ProviderLayout>
        </>
    )
}
