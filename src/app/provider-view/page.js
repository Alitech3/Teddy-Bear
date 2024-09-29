import PageTitle from "@/components/PageTitle";
import data from "../../../data/patients.json";
import PatientCard from "@/components/PatientCard";
import ProviderLayout from "@/components/ProviderLayout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ProviderLayout>
        <div className="min-h-screen min-w-5/6 max-w-fit mx-auto">
          <PageTitle text={"My Patients"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-fit mb-10">
            {data.map(
              (d, index) =>
                index <= 10 && (
                  <Link key={d.id} href={`/provider-view/my-patients/${d.id}`}>
                    <PatientCard
                      patient={d}
                      link={`/provider-view/my-patients/${d.id}`}
                    />
                  </Link>
                )
            )}
          </div>
        </div>
      </ProviderLayout>
    </>
  );
}
