import data from '../../../../data/patients.json';
import prescriptionData from '../../../../data/prescriptions.json';
import PatientLayout from "@/components/PatientLayout";

export default function MyMedications({ patient_id }) {
  const patient = data[100]
  const myMeds = prescriptionData.filter(prescription => prescription.id === patient.medications)
  return (

      <>
          <PatientLayout>
          <h2>My Medications</h2>
          {myMeds.length > 0 ? (
            <ul>
              {Object.keys(myMeds[0]).filter((key, index) => index !== 0 && myMeds[0][key]).map((med, index) => (
              <li key={index}>{myMeds[0][med]}</li>
              ))}
            </ul>
          ) : (
            <p>No meds found</p>
          )}
          </PatientLayout>
          

      </>
      


  );
}