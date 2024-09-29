import { Suspense } from "react";
import data from "../../../../data/patients.json";
import visitData from "../../../../data/visit_history.json";

import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PatientLayout = dynamic(() => import("@/components/PatientLayout"), {
  ssr: false,
});

export default function Home() {
  const patient = data[data.length - 1];
  const myVisits = visitData.slice(0, patient.visit_history);

  return (
    <Suspense fallback={<>Loading...</>}>
      <PatientLayout>
        <Card>
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row">
            <div className="">
              <img src={patient.image} className="w-[200px]" />
              <h2>
                {patient.first_name} {patient.last_name}
              </h2>
              <table>
                <tr>
                  <td>DOB</td>
                  <td>{patient.date_of_birth}</td>
                </tr>
                <tr>
                  <td>Sex</td>
                  <td>{patient.sex}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{patient.height}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{patient.weight}</td>
                </tr>
              </table>
            </div>
            <div>
              <h3>Contact Info</h3>
              <table>
                <tr>
                  <td>Phone Number</td>
                  <td>{patient.phone_number}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{patient.email}</td>
                </tr>
                <tr>
                  <td>Home Address</td>
                  <td>{patient.home_address}</td>
                </tr>
              </table>
            </div>
          </CardContent>
        </Card>

        <h3>Diagnoses</h3>
        <p>{patient.diagnoses}</p>

        <h3>Allergies</h3>
        <p>{patient.allergies}</p>

        <h3>Treatment Notes</h3>
        <p>{patient.treat_notes}</p>

        <h3>Recent Visits</h3>
        {myVisits.length > 0 ? (
          <table>
            <th>
              <td>Date</td>
              <td>Provider</td>
              <td>Reason</td>
            </th>
            {myVisits.map((visit, index) => (
              <tr key={index}>
                <td>{visit.date}</td>
                <td>
                  {visit.provider_first_name} {visit.provider_last_name}
                </td>
                <td>{visit.reason}</td>
              </tr>
            ))}
          </table>
        ) : (
          <p>Make your first appointment today!</p>
        )}
      </PatientLayout>
    </Suspense>
  );
}
