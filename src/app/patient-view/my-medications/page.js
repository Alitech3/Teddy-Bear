import Link from 'next/link';
import data from '../../../../data/patients.json';
import prescriptionData from '../../../../data/prescriptions.json';
import PatientLayout from "@/components/PatientLayout";
import MedicationCard from '@/components/MedicationCard';
import PageTitle from '@/components/PageTitle';

export default function MyMedications({ patient_id }) {
 
  return (
      <>
          <PatientLayout>
          <PageTitle text={"My Medications"}/>
          {/* {myMeds.length > 0 ? (
            <ul>
              {Object.keys(myMeds[0]).filter((key, index) => index !== 0 && myMeds[0][key]).map((med, index) => (
                <MedicationCard key={index} medication={myMeds[0]}/>
              <li key={index}>{myMeds[0][med]}</li>
              ))}
            </ul>
          ) : (
            <p>No meds found</p>
          )} */}
          <div className='flex flex-col gap-5'>
            {prescriptionData[0].medications.map((medication, index) => (
              <MedicationCard key={index} index={index} medication={medication}/>
            ))}
          </div>
          

          <Link href="https://www.google.com/maps/search/pharmacies+near+me/" target="_blank">Find a Pharmacy</Link>
          </PatientLayout>
      </>
      


  );
}