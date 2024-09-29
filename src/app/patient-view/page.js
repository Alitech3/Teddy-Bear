import prescriptionData from "../../../data/prescriptions.json";
import PatientLayout from "@/components/PatientLayout";
import MedicationCard from "@/components/MedicationCard";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PatientLayout>
        <div className="grid grid-cols-3 gap-6 max-w-fit mx-auto">
          <div className="h-fit col-span-3">
            <PageTitle text={"My Medications"} />
          </div>
          <div className="col-span-1 flex flex-col gap-5 h-dvh">
            {prescriptionData[2].medications.map(
              (medication, index) =>
                index !== 0 && (
                  <MedicationCard
                    className="col-span-1"
                    key={index}
                    index={index}
                    medication={medication}
                  />
                )
            )}
          </div>
          <iframe
            className="col-span-2 w-[650px] h-[500px]"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAlbXNaNhpa7wqP-BuEoOmWLz4XiXq5HWw
            &q=pharmacies+near+me"
          ></iframe>
        </div>
      </PatientLayout>
    </>
  );
}
