import data from "../../../../data/patients.json";
import PatientCard from "@/components/PatientCard";
import ProviderLayout from "@/components/ProviderLayout";
import Link from "next/link";

export default function MyPatients() {
  return (
    <ProviderLayout>
      <div className="flex flex-col gap-10 pt-5">
        {data.map(
          (d, index) =>
            index <= 10 && (
              <Link key={index} href={`/provider-view/my-patients/${index}`}>
                <PatientCard key={index} patient={d} />
              </Link>
            )
        )}
      </div>
    </ProviderLayout>
  );
}
