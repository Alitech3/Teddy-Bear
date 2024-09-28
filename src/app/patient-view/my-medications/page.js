import Link from 'next/link';
import data from '../../../../data/patients.json';
import prescriptionData from '../../../../data/prescriptions.json';
import PatientLayout from "@/components/PatientLayout";
import MedicationCard from '@/components/MedicationCard';

export default function MyMedications({ patient_id }) {
  const prescription = prescriptionData[0].medications
 
  return (
      <>
          <PatientLayout>
          <h2>My Medications</h2>
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
          
          {prescription.map((medication, index) => (
            <MedicationCard key={index} index={index} medication={medication}/>
          ))}

          <Link href="https://www.google.com/maps/search/pharmacies+near+me/" target="_blank">Find a Pharmacy</Link>
          </PatientLayout>
      </>
      


  );
}