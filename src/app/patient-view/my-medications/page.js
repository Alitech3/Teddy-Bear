import Link from "next/link";
import data from "../../../../data/patients.json";
import prescriptionData from "../../../../data/prescriptions.json";
import PatientLayout from "@/components/PatientLayout";
import MedicationCard from "@/components/MedicationCard";
import PageTitle from "@/components/PageTitle";

export default function MyMedications({ patient_id }) {
  return (
    <>
      <PatientLayout>
        <PageTitle text={"My Medications"} />
        <div className="flex flex-col gap-5">
          {prescriptionData[2].medications.map(
            (medication, index) =>
              index !== 0 && (
                <MedicationCard
                  key={index}
                  index={index}
                  medication={medication}
                />
              )
          )}
        </div>

        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAlbXNaNhpa7wqP-BuEoOmWLz4XiXq5HWw
            &q=pharmacies+near+me"
        ></iframe>
      </PatientLayout>
    </>
  );
}
