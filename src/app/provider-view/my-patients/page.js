"use client";
import PageTitle from "@/components/PageTitle";
import PatientCard from "@/components/PatientCard";
import ProviderLayout from "@/components/ProviderLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyPatients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Calling the same app's API via relative URL
        const patientsData = await fetch("/api/patients", {
          method: "GET",
        });

        if (!patientsData.ok) {
          throw new Error("Failed to fetch");
        }

        const json = await patientsData.json();
        setData(json.results); // Assuming the data is in the `data` field
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ProviderLayout>
      <div className="min-h-screen min-w-5/6 max-w-fit mx-auto space-y-6 pb-20">
        <PageTitle text={"My Patients"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-fit">
          {data.map(
            (d, index) =>
              index <= 10 && (
                <PatientCard
                  patient={d}
                  link={`/provider-view/my-patients/${d.id}`}
                />
              )
          )}
        </div>
      </div>
    </ProviderLayout>
  );
}
